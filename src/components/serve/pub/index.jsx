import React, {Component} from 'react';


import  "./index.scss";



class Pub extends Component {
    render() {
        return (
            <div className="pub">
                <img src={require("../../../assets/img/server/pub_01.png")} alt=""/>
                <img src={require("../../../assets/img/server/pub_02.png")} alt=""/>
            </div>
        );
    }
}

export default Pub;