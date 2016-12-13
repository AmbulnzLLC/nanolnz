const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {

});

const port = process.env.PORT || 9001;

router.use(function(req, res, next) {
    console.log('request made', req);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/', function(req, res) {
   res.sendStatus(200);
});

app.use('/', router);

router.route('/appinfo').get(function(req, res) {
    console.log('request made to appinfo', req);
    res.json({
        name: 'nanolnz.restserver',
        version: '1.0.0'
    });
});

app.listen(port);
console.log('listening on port ' + port);
