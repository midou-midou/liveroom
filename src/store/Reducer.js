import { 
	HANDLEMESSAGE,
 	CLEARUSERSENDMESSAGE,
 	HANDLE_LOGIN_USERNAME,
	UPDATE_LIST_DATA,
	CHANGE_VIDEOJS_SRC
 } 
 from './actionType'

const defaultstate = {
	//用户的个人信(包括用户名、用户发送的信息，判断用户是不是第一次登录)
	userinfo:{
		username: 'Pinkie Pie',
		usermeg: 'My name is Pinkie Pie',
		isfirstlogin: false
	},
	//从后台拿到的聊天列表(不能直接将用户发的消息添加到这个list当中，这里数据发生更改会影响到往数据库中的操作)
	meslist: [
		{
			username: 'Rainbow Dash',
			message: 'from PonyVillage'
		}
	],
	//当前的在线观看直播的人数（和服务器建立的连接数，并不一定是准确的在线观看人数）
	livePeople: 0,
	videojs_source_src: ""
};

export default (state = defaultstate, action) => {
	if (action.type === HANDLEMESSAGE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.userinfo.usermeg = action.meg
		return newState;
	}
	if (action.type === CLEARUSERSENDMESSAGE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.meslist = action.value;
		return newState;
	}
	if (action.type === HANDLE_LOGIN_USERNAME) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.userinfo.username = action.value;
		newState.userinfo.isfirstlogin = action.loginstate;
		return newState;
	}
	if (action.type === UPDATE_LIST_DATA) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.meslist = action.value.meglist;
		newState.livePeople = action.value.livePeople;
		newState.announce_title = action.value.announce_title;
		return newState;
	}
	if (action.type === CHANGE_VIDEOJS_SRC) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.videojs_source_src = action.value;
		return newState;
	}
	return state;
}