var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.json({
    status: 'OK',
    value: 'hello post！建立好囉！'
  });
});

module.exports = router;
