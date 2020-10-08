import { type } from "os";

var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let result = await axios.get('https://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000259?sort=SiteName&offset=0&limit=1000');
  let data = result.data as airRawData;
  let outData : Array<airSiteData> = data.result.records;
  res.json(outData);
});

type airRawData = {
  success : boolean,
  result : {
    resource_id : string,
    fields : Array<airFieldTitle>,
    records : Array<airSiteData>,
    limit	:	number,
    offset	:	number,
    total	:	number,
  }
}

type airFieldTitle = {
  type: string,
  id: "SiteName" |
      "County" |
      "AQI" |
      "Pollutant" |
      "Status" |
      "SO2" |
      "CO" |
      "CO_8hr" |
      "O3" |
      "O3_8hr" |
      "PM10" |
      "PM2.5" |
      "NO2" |
      "NOx" |
      "NO" |
      "WindSpeed" |
      "WindDirec" |
      "PublishTime" |
      "PM2.5_AVG" |
      "PM10_AVG" |
      "SO2_AVG" |
      "Longitude" |
      "Latitude" |
      "SiteId" 
}

type airSiteData = {
  SiteName	: string,
  County	: string,
  AQI	: string,
  Pollutant	: string,
  Status	: string,
  SO2	: string,
  CO	: string,
  CO_8hr	: string,
  O3	: string,
  O3_8hr	: string,
  PM10	: string,
  "PM2.5": string,
  NO2	: string,
  NOx	: string,
  NO	: string,
  WindSpeed	: string,
  WindDirec	: string,
  PublishTime	: string,
  "PM2.5_AVG" : string,
  PM10_AVG	: string,
  SO2_AVG	: string,
  Longitude	: string,
  Latitude	: string,
  SiteId	: string,
}

module.exports = router;