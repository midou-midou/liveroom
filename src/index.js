import React from 'react';
import ReactDOM from 'react-dom';
import Chatbox from './Chatbox';
import Livevideo from './Livevideo';
import Transmitdata from './Tramsmitdata';
import Livepeoplenum from './Livepeoplenum';
import Announcement from './Announcement';
import Gotobottom from './Gotobottom';
import './static/liveroom_icon/iconfont';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<GlobalStyled />, document.getElementById('liveroom'));
ReactDOM.render(<Chatbox />, document.getElementById('chatbox'));
ReactDOM.render(<Transmitdata />, document.getElementById('sendbox'));
ReactDOM.render(<Livevideo />, document.getElementById('reactflowplayer'));
ReactDOM.render(<Livepeoplenum />, document.getElementById('livePeople'));
ReactDOM.render(<Announcement />, document.getElementById('announcement'));
ReactDOM.render(<Gotobottom />, document.getElementById('gotobottom'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
