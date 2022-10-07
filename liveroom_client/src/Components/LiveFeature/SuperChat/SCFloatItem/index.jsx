import { Component } from "react";
import './index.css';

class SCFloatItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isTimeOut: false
        }
    }

    componentDidMount(){
        let waitTime = parseInt(this.props.money)*1000;
        this.setState({
            waitTime: waitTime/1000
        })
        setTimeout(() => {
            this.setState({
                isTimeOut: true
            })
        }, waitTime)
    }
    
    render() { 
        let show = this.state.isTimeOut ? 'none': 'block';
        return (
            <div className="sc-float-item" style={{backgroundColor: `${this.props.color}`, display: `${show}`}}>
                <div className="sc-float-container">
                    <div className="mask" style={{'--playTime': `${this.state.waitTime}s`}}></div>
                    <div className="sc-float-name">{this.props.name}</div>
                    <div className="sc-float-money">${this.props.money}</div>
                </div>
            </div>
        );
    }
}
 
export default SCFloatItem;