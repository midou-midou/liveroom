var fs = require('fs');
const httpsOption = {
	key: fs.readFileSync("/usr/local/nginx/cert/3464649_live.xiaoblogs.cn.key"),
	cert: fs.readFileSync("/usr/local/nginx/cert/3464649_live.xiaoblogs.cn.pem")
}

var socketioserver = require('http').createServer(handle);
var serverhttps = require('https').createServer(httpsOption, handle);
var io = require('socket.io')(serverhttps);
var audioIndex = 0;

//socketioserver.listen(83);


serverhttps.listen(83);

//返回200状态码给客户端表示建立连接成功
function handle(req, res){
	function p(err, data) {
	    if (err) {
	      res.writeHead(500);
	      return res.end('Error');
	    }
	    res.writeHead(200);
	    res.end(data);
  	};
}

var chatdata = {
	livePeople: 0,
	meglist: []
}

var chatdatalength=chatdata.meglist.length;

var firststate = true;


//socket.emit是socket.io中的发送数据，socket.on是socket.io中接收数据
io.on('connect', (socket) => {

	// db.getlist(processdata);
	// function processdata(results){
	// 	var result = results;
	// 	console.log("server第一次上传数据到client");
	// 	socket.emit('serverfirst', result);
	// }
	//当新建立了一个链接的时候就会自动增加一个直播间的人数
	chatdata.livePeople++;
	socket.on('client', function replyfromclient(data){
		//db.updatelist(data.username, data.usermeg);
		chatdata.meglist.push({
			username: data.username,
			usermeg: data.usermeg,
			audiourl: ''
		});
	});
	//如果断开了一个直播间的链接，直播间的当前在线人数就会减一个
	socket.on('disconnecting', () =>{
		chatdata.livePeople = chatdata.livePeople - 1;
	});
	//服务端的音频实现
	socket.on('audioClient', function(object){
		audioIndex = audioIndex + 1;
			var path = "/var/www/img/upload/" + object.username + audioIndex + ".mp3";
			fs.writeFileSync(path,object.audioblob,function(err){
					console.log("error in save mp3 file");
			})
			var url = "http://img.xiaoblogs.cn:86/" + object.username + audioIndex + ".mp3";
			chatdata.meglist.push({
				username: object.username,
				usermeg: '',
				audiourl: url
			})
	})
	//每隔一段时间发送数据给直播端
	//可以用setTimeout或者setInterval,建议前者
	//function intervalEmit(){
	//	if(chatdatalength==chatdata.meglist.length){
	//		if(firststate==true){
	//		//	socket.emit('server',chatdata);
	//		}
	//		firststate=false;
	//		}else{
	//			socket.emit('server', chatdata);
	//			chatdatalength=chatdata.meglist.length
	//		}
	//	setTimeout(() => {
	//		intervalEmit();
	//	},1000);
	//}
	//intervalEmit();
	//setInterval(() => {
	//	if(chatdatalength==chatdata.meglist.length){
	//		if(firststate==true){
	//			console.log("firststate");
	//			socket.emit('server',chatdata);
	//		}
	//		firststate=false;
	//	}else{
	//		console.log("emit");
	//		socket.emit('server', chatdata);
	//		chatdatalength=chatdata.meglist.length
	//	}
	//}, 3000);
	setInterval(() => {
		socket.emit('server',chatdata);	
	}, 1000)
});
