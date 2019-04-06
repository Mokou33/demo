import React, {Component} from 'react';

import  "./index.scss";
import "antd/lib/tabs/style/css"

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;



class Team extends Component {
    render() {
        return (
            <div className="team">
                <div className="tit">
                    <h2><span>豪华招商团队</span> 实战经验丰富</h2>
                </div>
                <div className="teamTab">
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="bottom"
                        tabBarStyle={{

                        }}
                    >
                        <TabPane tab="Java" key="1">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="UID" key="2">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="Web" key="3">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="PHP" key="4">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="会计" key="5">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="网络营销" key="6">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="软件测试" key="7">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="Linux++" key="8">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="C++" key="9">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="VR/AR" key="10">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                        <TabPane tab="UED" key="11">
                            <div className="pic">
                                <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                                <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                                <img src={require("../../assets/img/team/team_03.png")} alt="郑焕娟"/>
                                <img src={require("../../assets/img/team/team_04.png")} alt="刘思伟"/>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Team;