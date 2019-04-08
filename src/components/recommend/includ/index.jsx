import React, {Component} from 'react';

import "./index.scss"

class Inculd extends Component {
    render() {
        return (
            <div className="inculd">
                <div className="pic">
                    <img src={require("../../../assets/img/recommend/conpic.png")} alt="招商系统"/>
                </div>
            </div>
        );
    }
}

export default Inculd;