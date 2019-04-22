import React from 'react';
import ReactDOM from 'react-dom';
import Chatbox from './Chatbox';
//import SendMegsbox from './SendMegsbox';
import Livetitle from './Livetitle';
import Livevideo from './Livevideo';
import Componentcontain from './Componentcontain';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Chatbox />, document.getElementById('chatbox'));
ReactDOM.render(<Componentcontain />, document.getElementById('sendbox'));
ReactDOM.render(<Livetitle />, document.getElementById('menu'));
ReactDOM.render(<Livevideo />, document.getElementById('reactflowplayer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
