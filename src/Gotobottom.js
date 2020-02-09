import React, { Fragment, Component } from 'react'

import './gotobottom.css'

class Gotobottom extends Component{
    constructor(props){
        super(props);
        this.gotoBottom=this.gotoBottom.bind(this);
    }

    render(){
        return(
            <Fragment>
                <div id="gotobtn-div" className="gotobtn-div-style">
                    <button id="gotobottom-btn" className="gotobottom-btn-style" onClick={this.gotoBottom}>
                        <svg className="icon-down-arrow" aria-hidden="true">
                            <use xlinkHref="#icon-down-arrow"></use>
                        </svg>
                    </button>
                </div>
            </Fragment>
        );
    }

    gotoBottom(){
        var scrollbarDOM=document.getElementById('list-container');
        scrollbarDOM.scrollTop=scrollbarDOM.scrollHeight;
        var DOM=document.getElementById('gotobottom');
		DOM.style.display="none";
    }

}
export default Gotobottom