const express = require('express')
const app = express()
const httpServer = require('http').createServer((req,res) => {
  res.writeHead(200);
  res.end();
})
const socketServer = require('socket.io')(httpServer, {
	allowEIO3: true
});
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
// 直播间聊天内容
var liveChatData = {
  liveRealPeople: 0,
  meglist:[]
}

httpServer.listen(83);

// socket.io
socketServer.on('connect', (socket) => {
    //当新建立了一个链接的时候就会自动增加一个直播间的人数
    liveChatData.liveRealPeople++;
	socket.on('client', function replyfromclient(data){
		liveChatData.meglist.push({
			username: data.username,
			usermeg: data.usermeg,
		});
	});
	//如果断开了一个直播间的链接，直播间的当前在线人数就会减一个
	socket.on('disconnecting', () =>{
		liveChatData.liveRealPeople -= 1;
	});
  // 定时器向连接的客户端发送这些聊天数据
  setInterval(() => {
		socket.emit('server',liveChatData);	
	}, 5000)
})

// express
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