import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyled } from '../../style.js'

import './index.css'

// const socket = require('socket.io-client')("https://live.xiaoblogs.cn:8085");
// const socket = require('socket.io-client')("http://192.168.31.67:8085");
const socket = require('socket.io-client')("http://localhost:3000/liveroombackstage");

class Announcement extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            Temptitle: ''
        }
        this.editTitle=this.editTitle.bind(this);
        this.updateTitle=this.updateTitle.bind(this);
        this.blurFocus=this.blurFocus.bind(this);
        this.emitTitletoServer = this.emitTitletoServer.bind(this);
    }

    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <GlobalStyled />
                    <Route path='/' exact render={() =>
                        <div id="announce-div" className="announce-div-style">
                            <span id="announce-title" className="announce-title-style">{this.state.title}</span>
                        </div>
                    }></Route>
                    <Route path='/backstage' exact render={() =>
                        <div id="announce-div" className="announce-div-style">
                            <span id="announce-title" className="announce-title-style">{this.state.title}</span>
                            <input id="announce-title-edit" 
                                className="announce-title-edit-style"                                
                                onBlur={this.blurFocus}
                                onChange={this.updateTitle}                                
                                ></input>
                            <button id="announce-title-edit-btn" className="announce-title-edit-btn-style" onClick={this.editTitle}>
                                <svg className="icon-edit-title" aria-hidden="true">
                                    <use xlinkHref="#icon-pencil-ruler"></use>
                                </svg>                              
                            </button>
                        </div>
                    }></Route>
                </Fragment>
            </BrowserRouter>
        );
    }

    componentDidMount(){
		socket.on('server', (data) => {
			if(data === null){
				console.log("data is null");
            }
			else if(this.state.title!==data.announce_title){
				this.setState({
                    title: data.announce_title
                })
			}
		})
	}

    editTitle(){
        var inputDOM=document.getElementById('announce-title-edit');
        var spanDOM=document.getElementById('announce-title');
        inputDOM.style.display="block";
        inputDOM.value=spanDOM.innerHTML;
    }

    updateTitle(e){
        this.setState({
            Temptitle: e.target.value
        })
    }

    blurFocus(){
        var inputDOM=document.getElementById('announce-title-edit');
        inputDOM.style.display="none";
        this.emitTitletoServer(this.state.Temptitle);
    }

    emitTitletoServer(data){
		var obj = {
			announce_title: data
        }
        socket.emit('clienttitle', obj);
	}

}
export default Announcement