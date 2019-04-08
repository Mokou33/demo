import React, {Component} from 'react';

import "./index.scss"

class Plan extends Component {
    render() {
        return (
            <div className="plan">
                <h2>产品规划</h2>
                <h3><span>工业思维到产品思维的跨界整合，打造爆款产品塑造超级口碑，重塑消费品牌，让产品自己会说话，</span></h3>
                <h3><span>98招商产品中心，以互联网方式，玩转产品规划。</span></h3>
                <div className="pic">
                    <img src={require("../../../assets/img/recommend/conpic2.png")} alt="规划"/>
                </div>
            </div>
        );
    }
}

export default Plan;