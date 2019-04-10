import React, {Component} from 'react';


import "./index.scss"

class Explanation extends Component {
    render() {
        return (
            <div className="explanation">
                <h2>到底什么是好的商业模式？</h2>
                <div className="tip">
                    <span>洞察商业本质——为企业解决问题</span>
                </div>
                <div className="tip">
                    <span>98为客户重新打磨商业模型，让商业模式成为企业无形竞争力</span>
                </div>
                <div className="conWrap">
                    <div className="content">
                        <div className="ico">
                            <p>分销</p>
                            <p>渠道</p>
                        </div>
                        <div className="word">
                            <p>为您的企业建设</p>
                            <p>接触消费者的各</p>
                            <p>种途径</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ico">
                            <p>核心</p>
                            <p>能力</p>
                        </div>
                        <div className="word">
                            <p>挖掘企业的绝对</p>
                            <p>价值亮点以及98</p>
                            <p>逐渐培养并进化</p>
                            <p>成核心能力</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ico">
                            <p>收入</p>
                            <p>模型</p>
                        </div>
                        <div className="word">
                            <p>梳理现金流通路</p>
                            <p>以及投入产出比</p>
                            <p>的财务模型</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ico">
                            <p>价值</p>
                            <p>链</p>
                        </div>
                        <div className="word">
                            <p>提高企业的产品和</p>
                            <p>服务的价值，加强</p>
                            <p>关联性的上下游产</p>
                            <p>业价值链条</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ico">
                            <p>竞争</p>
                            <p>壁垒</p>
                        </div>
                        <div className="word">
                            <p>98为客户打造竞争</p>
                            <p>壁垒,增加市场核</p>
                            <p>心竞争力；</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explanation;