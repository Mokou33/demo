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
                            <p><span>为您的企业建设</span></p>
                            <p><span>接触消费者的各</span></p>
                            <p><span>种途径</span></p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ico">
                            <p>核心</p>
                            <p>能力</p>
                        </div>
                        <div className="word">
                            <p><span>挖掘企业的绝对</span></p>
                            <p><span>价值亮点以及98</span></p>
                            <p><span>逐渐培养并进化</span></p>
                            <p><span>成核心能力</span></p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ico">
                            <p>收入</p>
                            <p>模型</p>
                        </div>
                        <div className="word">
                            <p><span>梳理现金流通路</span></p>
                            <p><span>以及投入产出比</span></p>
                            <p><span>的财务模型</span></p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ico">
                            <p>价值</p>
                            <p>链</p>
                        </div>
                        <div className="word">
                            <p><span>提高企业的产品和</span></p>
                            <p><span>服务的价值，加强</span></p>
                            <p><span>关联性的上下游产</span></p>
                            <p><span>业价值链条</span></p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ico">
                            <p>竞争</p>
                            <p>壁垒</p>
                        </div>
                        <div className="word">
                            <p><span>98为客户打造竞争</span></p>
                            <p><span>壁垒,增加市场核</span></p>
                            <p><span>心竞争力；</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explanation;