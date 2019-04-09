import React, {Component} from 'react';

import "./index.scss"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="info">
                    <div className="conWrap">
                        <div className="con">
                            <h2>首页</h2>
                            <div className="details">
                                <span>3个BANNER</span>
                                <span>服务内容</span>
                                <span>合作优势（6大点）</span>
                                <span>经典案例</span>
                                <span>客户反馈</span>
                                <span>公司动态</span>
                                <span>一键咨询</span>
                            </div>
                        </div>
                        <div className="con">
                            <h2>服务内容</h2>
                            <div className="details">
                                <span>商业模式建立</span>
                                <span>招商系统设计</span>
                                <span>产品规划</span>
                                <span>战略定位</span>
                                <span>品牌营销整合传播</span>
                                <span>企业形象包装</span>
                                <span>招商教练培训</span>
                                <span>0到1销售培训</span>
                            </div>
                        </div>
                        <div className="con">
                            <h2>合作优势</h2>
                            <div className="details">
                                <span>合作优势（6大点）</span>
                                <span>三种合作模式</span>
                                <span>合作流程</span>
                                <span>提交需求</span>
                                <span>经典案例</span>
                            </div>
                        </div>
                        <div className="con">
                            <h2>98介绍</h2>
                            <div className="details">
                                <span>基本介绍</span>
                                <span>公司荣誉</span>
                                <span>新闻动态</span>
                                <span>招商方法论</span>
                                <span>招商价值观</span>
                                <span>团队介绍(不同团队介绍)</span>
                            </div>
                        </div>
                        <div className="con">
                            <h2>快速咨询</h2>
                            <div className="details">
                                <span>招商问题咨询</span>
                                <span>销售问题咨询</span>
                                <span>战略问题咨询</span>
                                <span>推广问题咨询</span>
                                <span>公司联系方式</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address">
                    <p><i className="iconfont icon-dingwei"></i>百龄足健康管理有限公司总部：上海市松江区新桥镇莘砖公路668号漕河泾开发区双子楼阿里巴巴创新中心b1座</p>
                </div>
            </div>
        );
    }
}

export default Footer;





