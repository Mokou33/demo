import React, {Component} from 'react';

// import {Link} from "react-router-dom";



import "./index.scss";




class SerCon extends Component {
    render() {
        return (
            <div className="sercon">
                <div className="tit">
                    <h2>THE SERVICE CONTENT</h2>
                    <h2>服务内容</h2>
                </div>
                <div className="serDtails">
                    <h3>以业绩为核心，全方位服务体系</h3>
                    <div className="serCon">
                        <div className="conTop">
                            <div className="serPic">
                                <img src={require("../../../assets/img/server/server_01.png")} alt=""/>
                                <h4>商业模式建立</h4>
                                <p>打造一个可持续盈利的商业模式</p>
                                <a className="more" href="/">了解更多</a>
                            </div>
                            <div className="serPic">
                                <img src={require("../../../assets/img/server/server_02.png")} alt=""/>
                                <h4>招商系统设计</h4>
                                <p>98招商三板斧，快速建立销售渠道</p>
                                <a className="more" href="/">了解更多</a>
                            </div>
                            <div className="serPic">
                                <img src={require("../../../assets/img/server/server_03.png")} alt=""/>
                                <h4>产品规划</h4>
                                <p>产品是根基，打造富有竞争力的产品</p>
                                <a className="more" href="/">了解更多</a>
                            </div>
                        </div>
                        <div className="conBot">
                            <div className="serPic">
                                <img src={require("../../../assets/img/server/server_04.png")} alt=""/>
                                <h4>战略定位</h4>
                                <p>千变万化市场环境，找到未来的发展方向</p>
                                <a className="more" href="/">了解更多</a>
                            </div>
                            <div className="serPic">
                                <img src={require("../../../assets/img/server/server_05.png")} alt=""/>
                                <h4>品牌营销整合策划</h4>
                                <p>系统化品牌营销推广</p>
                                <a className="more" href="/">了解更多</a>
                            </div>
                            <div className="serPic">
                                <img src={require("../../../assets/img/server/server_06.png")} alt=""/>
                                <h4>企业形象包装</h4>
                                <p>塑造标杆企业，聚集更多优势资源</p>
                                <a className="more" href="/">了解更多</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SerCon;