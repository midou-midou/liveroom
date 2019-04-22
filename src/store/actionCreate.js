import { 
	HANDLEMESSAGE,
 	CLEARUSERSENDMESSAGE,
 	HANDLE_LOGIN_USERNAME	
 } 
 from './actionType'

export const getsendmessageaction = (content) => ({
	type: HANDLEMESSAGE,
	content
})

export const getcleartextareaaction = (value) => ({
	type: CLEARUSERSENDMESSAGE,
	value
})

export const gethandleloginbuttonaction = (value, loginstate) => ({
	type: HANDLE_LOGIN_USERNAME,
	value,
	loginstate
})