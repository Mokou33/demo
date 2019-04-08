import React, {Component} from 'react';

import "./index.scss"


class Case extends Component {
    render() {
        return (
            <div className="case">
                <div className="tit">
                    <h2>A CLASSIC CASE</h2>
                    <h2>经典案例</h2>
                </div>
                <div className="con">
                    <ul className="conUl">
                        <li><img src={require("../../assets/img/server/hezuoanli_img_01.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_02.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_03.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_04.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_05.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_06.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_07.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_08.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_09.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_10.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_11.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_12.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_13.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_14.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_15.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_16.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_17.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_18.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_19.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_20.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_21.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_22.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_23.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_24.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_25.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_26.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_27.jpg")} alt=""/></li>
                        <li><img src={require("../../assets/img/server/hezuoanli_img_28.jpg")} alt=""/></li>
                    </ul>
                    <div className="caseMore">
                        <a href="/">查看更多</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Case;