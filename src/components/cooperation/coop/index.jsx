import React, {Component} from 'react';


import "./index.scss";

class Coop extends Component {
    render() {
        return (
            <div className="coop">
                <h2>合作优势</h2>
                <h3>6大合作优势——为企业打造强引擎</h3>
                <div className="con">
                    <div className="conWa1">
                        <div className="box">
                            <div className="boxP">
                                <p>根据企业情况</p>
                                <p>解决经营痛点</p>
                                <p>制定盈利方案</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxP">
                                <p>以业绩</p>
                                <p>为导向的</p>
                                <p>战略战术</p>
                                <p>快速执行</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxP">
                                <p>全渠道推广</p>
                                <p>招商营销</p>
                                <p>无死角</p>
                            </div>
                        </div>
                    </div>
                    <div className="conWa2">
                        <div className="box">
                            <div className="boxP">
                                <p>一站式服务</p>
                                <p>省心省力</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxP">
                                <p>跨界资源匹配</p>
                                <p>为企业快速</p>
                                <p>积累资源</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxP">
                                <p>技术研发优势</p>
                                <p>以技术为企业</p>
                                <p>经营加速</p>
                            </div>
                        </div>
                    </div>
                    <div className="posi">
                        <img src={require("../../../assets/img/coop/arrow_01.png")} alt="arrow"/>
                        <img src={require("../../../assets/img/coop/arrow_01.png")} alt="arrow"/>
                        <img src={require("../../../assets/img/coop/arrow_02.png")} alt="arrow"/>
                        <img src={require("../../../assets/img/coop/arrow_03.png")} alt="arrow"/>
                        <img src={require("../../../assets/img/coop/arrow_04.png")} alt="arrow"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Coop;