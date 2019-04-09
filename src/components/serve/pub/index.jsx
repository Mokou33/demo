import React, {Component} from 'react';


import  "./index.scss";



class Pub extends Component {
    render() {
        return (
            <div className="pub">
                <div className="adv">
                    <div className="box">
                        <img src={require("../../../assets/img/server/adv_01.png")}  alt="1"/>
                    </div>
                    <div className="con">
                        <div className="top">
                            <p>新经济的剧烈变革时代，传统的</p>
                            <p>招商还有用吗？</p>
                            <p>传统企业加快淘汰速度，99%不</p>
                            <p>注重渠道的企业将会被淘汰</p>
                        </div>
                        <div className="bottom">
                            <p>98-企业发展引擎，</p>
                            <p>让业绩飞起来</p>
                        </div>
                    </div>
                    <div className="box2">
                        <img src={require("../../../assets/img/server/adv_02.png")} alt="2"/>
                        <img src={require("../../../assets/img/server/adv_03.png")} alt="3"/>
                        <img src={require("../../../assets/img/server/adv_04.png")} alt="4"/>
                        <img src={require("../../../assets/img/server/adv_05.png")} alt="5"/>
                    </div>
                    <div className="box3">
                        <img src={require("../../../assets/img/server/adv_06.png")} alt="6"/>
                    </div>
                </div>
                <div className="tip">
                    <p><span>New opportunities in a time of economic change</span> <span>98 Help your business become a unicorn</span></p>
                    <p><span>经济变革时期的新机会</span> 98助力你的企业成为独角兽</p>
                </div>
            </div>
        );
    }
}

export default Pub;