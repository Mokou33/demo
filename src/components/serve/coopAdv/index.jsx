import React, {Component} from 'react';



import "./index.scss"

class CooAdv extends Component {
    render() {
        return (
            <div className="cooAdv">
                <div className="tit">
                    <h2>6 ADVANTAGES OF COOPERATION</h2>
                    <h2>6大合作优势</h2>
                </div>
                <div className="cooDtails">
                    <h3>为企业打造强引擎</h3>
                    <div className="cooCon">
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_01.png")} alt=""/>
                            <div className="txt">
                                <p>根据企业情况，解决经营痛点，</p>
                                <p>制定盈利方案</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_02.png")} alt=""/>
                            <div className="txt">
                                <p>以业绩为导向的，战略战术快速执行</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_03.png")} alt=""/>
                            <div className="txt">
                                <p>全渠道推广，招商营销无死角</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_04.png")} alt=""/>
                            <div className="txt">
                                <p>技术研发优势，以技术为企业经营加速</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_05.png")} alt=""/>
                            <div className="txt">
                                <p>跨界资源匹配，为企业快速积累资源</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_06.png")} alt=""/>
                            <div className="txt">
                                <p>一站式服务，省心省力</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CooAdv;