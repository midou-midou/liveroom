var fs = require('fs');
// const httpsOption = {
// 	key: fs.readFileSync("/usr/local/nginx/cert/3464649_live.xiaoblogs.cn.key"),
// 	cert: fs.readFileSync("/usr/local/nginx/cert/3464649_live.xiaoblogs.cn.pem")
// }
// var uploadserver = require('https').createServer(httpsOption, onRequest);
// var socketioserver = require('https').createServer(httpsOption, handle);
var uploadserver = require('http').createServer(onRequest);
var socketioserver = require('http').createServer(handle);
var formdata = require('formidable');
var io = require('socket.io')(socketioserver);
var audioIndex = 0;

socketioserver.listen(8085);
uploadserver.listen(8086);

//返回200状态码给客户端表示建立连接成功
function handle(req, res){
	function p(err, data) {
	    if (err) {
	      res.writeHead(500);
	      return res.end('Error');
	    }
		console.log("与服务器8085建立连接成功");
	    res.writeHead(200);
	    res.end(data);
  	};
}

//文件上传服务
function onRequest(req, res) {
	var form = new formdata.IncomingForm();
	form.uploadDir = "/var/www/img/upload";
	form.keepExtensions = true;
	req.files = {};
	req.data = {};
	form.on('field',function (name, value) {
		req.data[name] = value;
	}).on('file', function (name, file) {
		req.files[name] = file;
	}).on('end', function(){
		for(var k in req.files) {
			var f = req.files[k];
			fs.renameSync(f.path, form.uploadDir + "/" + "liveroombg" + f.name.substr(-4));
		}
	});
	form.parse(req,function(err, fields, files){
		if (err) {
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('500');
		}
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('success');
	});
}

var chatdata = {
	videojsurl: "",
	announce_title: "欢迎来到MiMonarchRD的直播间",
}

//socket.emit是socket.io中的发送数据，socket.on是socket.io中接收数据
io.on('connect', (socket) => {
	console.log("与服务器8085建立连接成功");
	// db.getlist(processdata);
	// function processdata(results){
	// 	var result = results;
	// 	console.log("server第一次上传数据到client");
	// 	socket.emit('serverfirst', result);
	// }
	//当新建立了一个链接的时候就会自动增加一个直播间的人数
	//socket.on('client', function replyfromclient(data){
	//	//db.updatelist(data.username, data.usermeg);
	//	chatdata.meglist.push({
	//		username: data.username,
	//		usermeg: data.usermeg,
	//		audiourl: ''
	//	});
	//});
	socket.on('clienttitle', (data) => {
		chatdata.announce_title=data.announce_title;
	});
	socket.on('clientvideojsurl', (data) => {
		chatdata.videojsurl=data.videojsurl;
	});
	//如果断开了一个直播间的链接，直播间的当前在线人数就会减一个
	socket.on('disconnecting', () =>{
	});
	//服务端的音频实现
	//socket.on('audioClient', function(object){
	//	audioIndex = audioIndex + 1;
	//		var path = "/var/www/img/upload/" + object.username + audioIndex + ".mp3";
	//		fs.writeFileSync(path,object.audioblob,function(err){
	//				console.log("error in save mp3 file");
	//		})
	//		var url = "http://img.xiaoblogs.cn:86/" + object.username + audioIndex + ".mp3";
	//		chatdata.meglist.push({
	//			username: object.username,
	//			usermeg: '',
	//			audiourl: url
	//		})
	//})
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
	}, 1500)
});
