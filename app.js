const express = require('express')
const app = express()
console.log('伺服器已經啟動拉！');

app.get('/hello', function (req, res) {
  console.log('ㄚㄚㄚ，我被get到了！！')
  res.send('不要get我啊！！');
})

app.listen(3000)