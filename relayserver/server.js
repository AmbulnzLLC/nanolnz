var http = require('http'),
    socketIO = require('socket.io'),
    fs = require('fs'),
    server,
    io;

var lyrics = `We're no strangers to love
You know the rules and so do I
A full commitment's what I'm thinking of
You wouldn't get this from any other guy
I just want to tell you how I'm feeling
Gotta make you understand
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
We've known each other for so long
Your heart's been aching but you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it
And if you ask me how I'm feeling
Don't tell me you're too blind to see
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
We've known each other for so long
Your heart's been aching but you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it
I just want to tell you how I'm feeling
Gotta make you understand
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you`.split("\n");

server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(5000);
io = socketIO(server);

io.on('connection', function (socket) {
    socket.emit('greeting-from-server', {
        greeting: 'Hello Client'
    });
    socket.on('greeting-from-client', function (message) {
        console.log(message);
    });
});

const redis = require('redis');
const redisUrl = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
console.log('log-redis at', redisUrl);
const pub = redis.createClient(redisUrl);
var lyricLine = 0;

(function startLoop(channel, count) {
    pub.publish('lyrics', 'Welcome to the lyrics channel.');
    setInterval(() => {
        var line = lyrics[lyricLine++];
        console.log('publishing', line);
        pub.publish('lyrics', lyrics[lyricLine++]);
        if(lyricLine >= lyrics.length) lyricLine = 0;
    }, 1333);
})();
