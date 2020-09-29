var express = require('express');
var router = express.Router();

/* GET home page. */
let rendeData = { title: '什麼都略懂一點，生活更多彩一些', navBar: [
  {
    name: '努力',
  },
  {
    name: '堅持',
  },
  {
    name: '入門',
  },
  {
    name: '放棄',
  },
]}


router.get('/', function(req, res, next) {
  res.render('index', rendeData);
});

router.get('/test', function(req, res, next) {
  res.render('test', rendeData);
});

module.exports = router;
