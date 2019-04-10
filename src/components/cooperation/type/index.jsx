import React, {Component} from 'react';

import "./index.scss"

class Type extends Component {
    render() {
        return (
            <div className="type">
                <div className="top">
                    <h2><i> 2 </i> 种合作模式</h2>
                    <div className="tit">
                        <h2>招商合作</h2>
                    </div>
                    <h3>以业绩为核心的招商服务，98加盟负责招商全部流程内容策划以及教练培训；</h3>
                    <div className="pic">
                        <img src={require("../../../assets/img/coop/type.png")} alt="合作模式"/>
                    </div>
                    <span className="mind">注：合作周期以3个月为单位，可以合作半年/整年</span>
                </div>
                <div className="bom">
                    <div className="tit">
                        <h2>战略合作</h2>
                    </div>
                    <h3>全局化操作项目，除了招商支持之外，覆盖更多的企业服务，从品牌打造、产品打造、营销推广、商誉增值等立体化服务；</h3>
                    <h2 className="flow">合作流程</h2>
                    <div className="flPic">
                        <div className="pic">
                            <div className="top">
                                <img src={require("../../../assets/img/coop/flow_01.png")} alt=""/>
                            </div>
                            <span>项目立案</span>
                        </div>
                        <div className="pic">
                            <div className="top">
                                <img src={require("../../../assets/img/coop/flow_02.png")} alt=""/>
                            </div>
                            <span>项目诊断</span>
                        </div>
                        <div className="pic">
                            <div className="top">
                                <img src={require("../../../assets/img/coop/flow_03.png")} alt=""/>
                            </div>
                            <span>制定策略</span>
                        </div>
                        <div className="pic">
                            <div className="top">
                                <img src={require("../../../assets/img/coop/flow_04.png")} alt=""/>
                            </div>
                            <span>招商设计</span>
                        </div>
                        <div className="pic">
                            <div className="top">
                                <img src={require("../../../assets/img/coop/flow_05.png")} alt=""/>
                            </div>
                            <span>业绩落地</span>
                        </div>
                        <div className="pic">
                            <div className="top">
                                <img src={require("../../../assets/img/coop/flow_06.png")} alt=""/>
                            </div>
                            <span>优化复制</span>
                        </div>
                    </div>
                    <div className="sub">
                        <a href="#">提交需求</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Type;