import { 
	HANDLEMESSAGE,
 	CLEARUSERSENDMESSAGE,
 	HANDLE_LOGIN_USERNAME	
 } 
 from './actionType'

const defaultstate = {
	meslist: [
		{
			username: '李四',
			message: 'O(∩_∩)O~',
			firstloginstate: false
		},
		{
			username: '王五',
			message: 'O(∩_∩)O~',
			firstloginstate: false
		},
		{
			username: '张三',
			message: 'O(∩_∩)O~',
			firstloginstate: false
		}
	]
};

export default (state = defaultstate, action) => {
	if (action.type === HANDLEMESSAGE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.content = action.value;
		return newState;
	}
	if (action.type === CLEARUSERSENDMESSAGE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.content = action.value;
		return newState;
	}
	if (action.type === HANDLE_LOGIN_USERNAME) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.meslist[0].username = action.value;
		newState.meslist[0].firstloginstate = action.loginstate;
		return newState;
	}
	return state;
}