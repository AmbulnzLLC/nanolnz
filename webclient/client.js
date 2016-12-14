const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const redis = require('redis');
const redisUrl = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

console.log('creating sub client');
console.log('log-redis at', redisUrl);
const subClient = redis.createClient(redisUrl);
subClient.on("message", (channel, message) => console.log(channel + ":", message));
console.log("Subscribing to lyrics.");
subClient.subscribe("lyrics");

app.use(serveStatic('public', {'index': ['index.html', 'index.htm']}));
const PORT_NUMBER = process.env.PORT_NUMBER || 5665;
console.log('set to listen on port', PORT_NUMBER);
app.listen(PORT_NUMBER);
