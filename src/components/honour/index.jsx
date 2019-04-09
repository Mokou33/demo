import React, {Component} from 'react';

import "./index.scss"

class Honour extends Component {
    render() {
        return (
            <div className={"honour"}>
                {/*<img src={require("../../assets/img/honour/honour.png")} alt="pic"/>*/}
                <h3>公司荣誉</h3>
                <div className="honpic">
                    <img src={require("../../assets/img/honour/honpic.png")} alt="荣誉"/>
                </div>
            </div>
        );
    }
}

export default Honour;