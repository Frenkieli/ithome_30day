var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let result = await axios.get('https://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000259?sort=SiteName&offset=0&limit=1000');
  res.json(result.data);
});

module.exports = router;