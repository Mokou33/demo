import React, {Component} from 'react';


import "./index.scss"

class Content extends Component {
    render() {
        return (
            <div className="contact">
                <ul>
                    <li><img src={require("../../../assets/img/rare/rare_01.png")} alt=""/></li>
                    <li><img src={require("../../../assets/img/rare/rare_02.png")} alt=""/></li>
                    <li><img src={require("../../../assets/img/rare/rare_03.png")} alt=""/></li>
                    <li><img src={require("../../../assets/img/rare/rare_04.png")} alt=""/></li>
                </ul>
            </div>
        );
    }
}

export default Content;