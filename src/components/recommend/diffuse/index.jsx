import React, {Component} from 'react';

import  "./index.scss";



class Diffuse extends Component {
    render() {
        return (
            <div className="diffuse">
                <h2>品牌营销整合传播</h2>
                <p>明确目标受众，98整合多种渠道，以构建客户能达到的所有接触点，直接影响消费者的决策。</p>
                <div className="con">
                    <h3>98全面传播平台</h3>
                    <div className="pic">
                        <div className="box"><img src={require("../../../assets/img/recommend/diffuse_01.png")} alt=""/></div>
                        <div className="box"><img src={require("../../../assets/img/recommend/diffuse_02.png")} alt=""/></div>
                        <div className="box"><img src={require("../../../assets/img/recommend/diffuse_03.png")} alt=""/></div>
                        <div className="box"><img src={require("../../../assets/img/recommend/diffuse_04.png")} alt=""/></div>
                        <div className="box"><img src={require("../../../assets/img/recommend/diffuse_05.png")} alt=""/></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Diffuse;