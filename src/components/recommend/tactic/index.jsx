import React, {Component} from 'react';

import "./index.scss"

class Tactic extends Component {
    render() {
        return (
            <div className="tactic">
                <h2>战略规划</h2>
                <p>经济变革中，产业链中的机会，消费趋势有哪些变化？</p>
                <p>98加盟深刻洞察国内经济发展的趋势与周期，</p>
                <p className="spc">抓住企业发展的<span>黄金机会</span>，为企业做好战略定位</p>
                <div className="con">
                    <img src={require("../../../assets/img/recommend/conpic3.png")} alt="pic"/>
                </div>
            </div>
        );
    }
}

export default Tactic;