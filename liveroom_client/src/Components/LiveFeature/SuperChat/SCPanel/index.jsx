import { Component, createRef } from "react";
import { message } from 'antd';
import './index.css';
import 'antd/dist/antd.css';

class SCPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sctype: [
                {name: '30', color: '#40be3f'},
                {name: '50', color: '#cfe619'},
                {name: '100', color: '#fd5000'},
                {name: '200', color: '#fd0034'},
                {name: '1000', color: '#ca002a'}
            ],
            selectType: 0
            
         }
        this.scinputref = createRef();
    }

    selectSCtype = (index) => {
        this.setState({
            selectType: index
        })
    }

    sendSuperChat = () => {
        if(this.scinputref.current.value.length === 0){
            message.error("什么都不说,点什么发送(╯▔皿▔)╯");
            return;
        }
        this.props.emitMegtoServer({
            type: true,
            msg: this.scinputref.current.value,
            sccolor: this.state.sctype[this.state.selectType].color,
            scmoney: this.state.sctype[this.state.selectType].name
        })
        this.scinputref.current.value = '';
    }

    closeSuperChat = () => {
        this.props.closeSuperChat();
    }

    render() { 
        return ( 
            <div className="scpanel-container">
                <div className="scselect-panel">
                    {
                        this.state.sctype.map((item, k) => {
                            return(
                                <div className="sctype-item" key={k} style={{backgroundColor: `${item.color}`}} onClick={() => this.selectSCtype(k)}>{item.name}元</div>
                            );
                        })
                    }
                </div>
                <div className="scinputpanel"  style={{borderBottom: `2px solid ${this.state.sctype[this.state.selectType].color}`}}>
                    <input type="text" className="scinput" ref={this.scinputref} placeholder={`点击发送${this.state.sctype[this.state.selectType].name}元的醒目留言`}/>
                    <div className="sc-sendbtn" onClick={this.sendSuperChat}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Sendmessage"></use>
                        </svg>
                    </div>
                    <div className="sc-closebtn" onClick={this.closeSuperChat}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-fault"></use>
                        </svg>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SCPanel;