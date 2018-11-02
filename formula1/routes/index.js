var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/standings', function(req, res, next) {
    var url = "http://ergast.com/api/f1/";
    console.log("query ", req.query);
    url += req.query['q'];
    url += "/driverStandings.json";
    console.log(url);
    request(url).pipe(res);
});

router.get('/podium', function(req, res, next) {
    var url = "http://ergast.com/api/f1/";
    console.log("query ", req.query);
    url += req.query['q'];
    url += "/driverStandings.json";
    console.log(url);
    request(url).pipe(res);
});

module.exports = router;
