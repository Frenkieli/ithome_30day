var express = require('express');
var router = express.Router();
// 把line引入進來
const line = require('@line/bot-sdk');
const config = {
  channelAccessToken: 'UzdN1dGZNXeWdLJ8sElruM+gLXTHVgskrO4IB06FRQ3olCJEOVTM9xE7HgUcEUSf3l0/dvWW3XzKGWwTHRyw77Wq8EkHxM/ye00CgjYoTGPg/oKJ2LMb66UL5B1pIqHSUXbIcCPcyLTu6XWGueZ+2AdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'df76c07a7c3eb6fe86cbdedc62e916e2'
};
const client = new line.Client(config);
// 加入處理的中間層
const middleware = require('@line/bot-sdk').middleware;
router.post('/callback', middleware(config), function (req, res, next) {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});
// 處理事件的函式
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }
  // create a echoing text message
  const echo = { type: 'text', text: event.message.text };
  // use reply API
  if(event.replyToken !== '00000000000000000000000000000000'){
    return client.replyMessage(event.replyToken, echo);
  }
}
module.exports = router;