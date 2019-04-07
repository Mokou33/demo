import React, {Component} from 'react';


import "./index.scss"
class Issue extends Component {
    render() {
        return (
            <div className="issue">
                <div className="tit">
                    <h2>FACING PROBLEMS IN DIFFERENT STAGES</h2>
                    <h2>解决企业不同阶段的问题</h2>
                </div>
                <div className="cooDtails">
                    <h3 className="dtaTit">98助力企业突破发展瓶颈</h3>
                    <div className="cooCon">
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_01.png")} alt=""/>
                            <h3>初创企业</h3>
                            <div className="txt">
                                <p>根据企业情况，解决经营痛点，</p>
                                <p>制定盈利方案</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_02.png")} alt=""/>
                            <h3>发展型企业</h3>
                            <div className="txt">
                                <p>发展速度慢，</p>
                                <p>怎样找到快速发展强引擎</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_03.png")} alt=""/>
                            <h3>成熟型企业</h3>
                            <div className="txt">
                                <p>传统模式遇阻，</p>
                                <p>找到新的增长模式</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_04.png")} alt=""/>
                            <h3>传统型企业</h3>
                            <div className="txt">
                                <p>怎样结合互联网+，</p>
                                <p>创造更多的可能</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_05.png")} alt=""/>
                            <h3>区域型企业</h3>
                            <div className="txt">
                                <p>地方品牌无法突破，</p>
                                <p>怎样打造全国性品牌</p>
                            </div>
                        </div>
                        <div className="cooPic">
                            <div className="emp">
                                <i></i>
                            </div>
                            <h3>其他</h3>
                            <div className="txt">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Issue;