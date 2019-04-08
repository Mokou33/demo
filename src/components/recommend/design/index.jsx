import React, {Component} from 'react';

import "./index.scss"


class Design extends Component {
    render() {
        return (
            <div className="design">
                <h2>招商系统设计</h2>
                <h3><span>98招商为你快速建立招商体系</span></h3>
                <div className="con">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
                <div className="tip">
                    <p><span>企业招商属于重资产的业务部门，98招商集中所有优势资源，</span></p>
                    <p><span>为客户提供全方位招商系统设计，以获得巨额业绩回报，同时，降低了招商风险。</span></p>
                </div>
            </div>
        );
    }
}

export default Design;