import React from 'react';
import ReactDOM from 'react-dom';
import Chatlist from './Components/LiveChatBox/LiveChatList';
import Livevideo from './Components/Livevideo';
import LivePanel from './Components/LiveFeature/LivePanel';
import Livepeoplenum from './Components/LiveNumber';
import Announcement from './Components/LiveAnnouncement';
import LiveDesc from './Components/LiveFeature/LiveDesc';
import './static/liveroom_icon/iconfont.css';

ReactDOM.render(<Chatlist />, document.getElementById('chatbox'));
ReactDOM.render(<LivePanel />, document.getElementById('sendbox'));
ReactDOM.render(<Livevideo />, document.getElementById('reactflowplayer'));
ReactDOM.render(<Livepeoplenum />, document.getElementById('livePeople'));
ReactDOM.render(<Announcement />, document.getElementById('announcement'));
ReactDOM.render(<LiveDesc />, document.getElementById('liveroom_desc_container'));