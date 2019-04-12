import React, {Component} from 'react';

import "./index.scss"

class Inculd extends Component {
    render() {
        return (
            <div className="inculd">
                <h2>98招商系统包括：</h2>
                <div className="con">
                    <div className="box">
                        <img src={require("../../../assets/img/header/logo.png")} alt="98jiamengwang"/>
                        <h3>招商系统</h3>
                    </div>

                    <div className="box1">
                        <h4>A</h4>
                        <p>招商策略</p>
                        <p>制定</p>
                    </div>
                    <div className="box2">
                        <h4>B</h4>
                        <p>招商产品</p>
                        <p>组合策略</p>
                    </div>
                    <div className="box3">
                        <h4>C</h4>
                        <p>招商项目的</p>
                        <p>包装与策划</p>
                    </div>
                    <div className="box4">
                        <h4>D</h4>
                        <p>招商项目广告</p>
                        <p>创意设计</p>
                    </div>
                    <div className="box5">
                        <h4>E</h4>
                        <p>招商项目</p>
                        <p>推广与广告</p>
                    </div>
                    <div className="box6">
                        <h4>F</h4>
                        <p>招商客户</p>
                        <p>邀约</p>
                    </div>
                    <div className="box7">
                        <h4>G</h4>
                        <p>招商谈判</p>
                        <p>与签单追款</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inculd;