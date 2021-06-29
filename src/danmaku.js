import React, { Component, Fragment } from 'react'
import {CommentManager} from 'comment-core-library'
import Store from 'react-redux'

class Danmaku extends Component{
    constructor(props){
        super(props);
        this.state = {
            testitem: [{
                "mode":1,
                "text":"Hello World",
                "stime":0,
                "size":25,
                "color":0xffffff
            }]
        }
    }
    render(){
        return(
            <Fragment>
                
            </Fragment>
        )
    }

    componentDidMount(){
       //CommentManager(document.getElementById("danmaku-container"));
        // DM.init();
        // DM.load(this.state.testitem[0]);
    }

}

export default Danmaku