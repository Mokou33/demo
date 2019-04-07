import React, {Component} from 'react';

import  "./index.scss";



class CooAdvinfo extends Component {
    render() {
        return (
            <div className="cooAdvinfo">
                <img src={require("../../../assets/img/server/cooAdvinfo.png")} alt=""/>
            </div>
        );
    }
}

export default CooAdvinfo;