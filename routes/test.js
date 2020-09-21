var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.json({
    status: 'OK',
    value: 'hello post！建立好囉！'
  });
});

router.get('/get', function(req, res, next) {
  res.json({
    status: 'OK',
    value: 'hello get！建立好囉！',
    query: req.query
  });
});

router.get('/get/:id', function(req, res, next) {
  res.json({
    status: 'OK',
    value: 'hello get2！建立好囉！',
    query: req.query,
    params: req.params
  });
});

router.post('/post/:id', function(req, res, next) {
  res.json({
    status: 'OK',
    value: 'hello post！建立好囉！',
    query: req.query,
    params: req.params,
    body: req.body
  });
});
module.exports = router;
