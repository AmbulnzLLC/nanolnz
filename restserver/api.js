const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 9001;

router.get('/', function(req, res) {
   res.sendStatus(200);
});

app.listen(port);
console.log('listening on port ' + port);
