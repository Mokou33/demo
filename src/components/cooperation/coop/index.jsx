import React, {Component} from 'react';


import "./index.scss";

class Coop extends Component {
    render() {
        return (
            <div className="coop">
                <img src={require("../../../assets/img/coop/coop.png")} alt="合作"/>
            </div>
        );
    }
}

export default Coop;