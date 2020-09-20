var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '什麼都略懂一點，生活更多彩一些' });
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;
