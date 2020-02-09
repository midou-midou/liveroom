import { 
	HANDLEMESSAGE,
 	CLEARUSERSENDMESSAGE,
 	HANDLE_LOGIN_USERNAME,
	UPDATE_LIST_DATA,
	CHANGE_VIDEOJS_SRC
 } 
 from './actionType'

export const getsendmessageaction = (meg) => ({
	type: HANDLEMESSAGE,
	meg
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

export const getupdatelistdataaction = (value) => ({
	type: UPDATE_LIST_DATA,
	value
})

export const changevideojssrc = (value) => ({
	type: CHANGE_VIDEOJS_SRC,
	value
})

