const express = require('express')
const app = express()
const port = 8000
// 直播间标题
var liveAnnounce = {
  value: "欢迎来到米豆的直播间"
}
// 直播间直播地址
var liveAddr = {
  value: ""
}
// 直播间在线人数
var liveRealPeople = 0;


app.get('/liveroomAnnounce', (req, res) => {
  res.send(liveAnnounce);
})

app.get('/sendAnno', (req, res) => {
	liveAnnounce.value = req.query.anno;
	res.send("修改直播间标题成功");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})