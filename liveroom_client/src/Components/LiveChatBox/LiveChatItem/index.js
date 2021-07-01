import React, { Fragment, Component } from 'react';
import '../chatbox.css'

class Chatlistitem extends Component{
    
    render(){
        return(
            <Fragment>
                <div id="list-item" className="list-item-style">
                    <span id="list-item-name" className="list-item-name-style" style={{backgroundColor:this.setColor2listitem()}}>{this.props.username}</span>:
                    <span id="list-item-content" className="list-item-content-style">{this.props.usermeg}</span>
                </div>
            </Fragment>
        )
    }

    setColor2listitem = () => {
        var colorArray=['#FF6666','#006699','#0066CC','#336699','#CC6600','#FF0033','#339933','#FF9900'];
		const num = Math.floor(Math.random() * colorArray.length);
		return colorArray[num];
    }

}

export default Chatlistitem