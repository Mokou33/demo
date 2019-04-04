import React, {Component} from 'react';

import "./index.scss"

class Honour extends Component {
    render() {
        return (
            <div className={"honour"}>
                <img src={require("../../assets/img/honour/honour.png")} alt=""/>
            </div>
        );
    }
}

export default Honour;