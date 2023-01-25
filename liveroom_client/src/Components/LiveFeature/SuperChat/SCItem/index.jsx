import React, { Fragment, Component } from 'react';
import './index.css'

class SuperChatItem extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Fragment>
                <div className="sc-list-item-style" style={{backgroundColor: this.props.data.color}}>
                    <span className="sc-list-item-name-style" >{this.props.data.username}的SuperChat</span>
                    <span className="sc-list-item-content-style" >{this.props.data.usermeg}</span>
                    <span className="sc-list-item-money" >${this.props.data.money}</span>
                </div>
            </Fragment>
        )
    }

}

export default SuperChatItem