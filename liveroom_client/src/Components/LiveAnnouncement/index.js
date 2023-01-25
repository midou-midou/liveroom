import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { GlobalStyled } from '../../style.js'

import './index.css'
import { message } from 'antd'

class Announcement extends Component{

    state = {
        title: ''
    }

    constructor(props){
        super(props);
        
        // this.editTitle=this.editTitle.bind(this);
        this.blurFocus=this.blurFocus.bind(this);
        this.emitTitletoServer = this.emitTitletoServer.bind(this);
    }

    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <GlobalStyled />
                    <Switch>
                    <Route path='/' exact render={() =>
                        <div id="announce-div" className="announce-div-style">
                            <span id="announce-title" className="announce-title-style">{this.state.title}</span>
                        </div>
                    } />
                    <Route path='/backstage' exact render={() =>
                        <div id="announce-div" className="announce-div-style">
                            <span id="announce-title" ref={current => {this.titleSpan = current}} className="announce-title-style">{this.state.title}</span>
                            <input id="announce-title-edit" 
                                ref={current => {this.titleInput = current}}
                                className="announce-title-edit-style"                                
                                onBlur={this.blurFocus}                             
                                ></input>
                            <button id="announce-title-edit-btn" className="announce-title-edit-btn-style" onClick={this.editTitle}>
                                <svg className="icon-edit-title" aria-hidden="true">
                                    <use xlinkHref="#icon-pencil-ruler"></use>
                                </svg>                              
                            </button>
                        </div>
                    } />
                    <Redirect to="/" />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }

    componentDidMount(){
        axios.get('/liveAnnounce/liveroomAnnounce').then(
            rep => {
                this.setState({
                    title: rep.data.value
                })
            },
            err => {
                console.log(err);
            }
        )
	}

    editTitle = () => {
        const { titleInput, titleSpan } = this;
        titleInput.style.display="block";
        titleInput.value=titleSpan.innerHTML;
    }

    blurFocus(){
        const {titleInput} = this;
        titleInput.style.display = "none";
        this.emitTitletoServer(titleInput.value);
    }

    emitTitletoServer(data){
		axios.get(`/sendAnnoProxy/sendAnno?anno=${data}`).then(
            rep => {
                message.success("修改直播间标题成功");
                this.setState({
                    title: data
                })
            },
            err => {
                message.error("修改直播间标题失败");
            }
        )
	}

}
export default Announcement