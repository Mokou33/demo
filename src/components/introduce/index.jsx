import React, {Component} from 'react';

import "./index.scss"

class Introduce extends Component {
    render() {
        return (
            <div className={"introduce"}>
                <div className="left">
                    <div className="pic">
                        <img  src={require("../../assets/img/header/rec.jpg")}></img>
                    </div>
                </div>
                <div className="right">
                    <div className="con">
                        <h2>98加盟介绍</h2>
                        <div className="con-p">
                            <p>98加盟是国内领先的营销策划机构，总部设在全国经济和金融中心——上</p>
                            <p>海。98加盟专注于企业品牌和营销战略。依托专业的品牌策划和营销渠道</p>
                            <p>建设管理能力，以品牌+渠道双驱动模式为合作伙伴打造完整的品牌战略</p>
                            <p>体系和稳定、全面的市场营销渠道，帮助企业快速打入市场，并实现可持</p>
                            <p>续发展。98加盟拥有多年的品牌策划和招商服务经验，在大健康产业、新</p>
                            <p>零售、时尚快消等行业有着众多成功案例，并奠基了良好的基础。目前，98</p>
                            <p>加盟以较快的发展速度，已累计服务100多家企业，成功策划举办招商会</p>
                            <p>1000多场，帮助10000多名创业者实现成功创业。</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduce;