import React, {Component} from 'react';

import {Link, NavLink} from "react-router-dom";


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
                        {/*<li><img src={require("../../assets/img/case/01.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/02.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/03.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/04.jpg")} alt="case"/></li>*/}
                        <li><img src={require("../../assets/img/case/06.jpg")} alt="case"/></li>
                        {/*<li><img src={require("../../assets/img/case/08.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/10.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/12.jpg")} alt="case"/></li>*/}
                        <li><img src={require("../../assets/img/case/14.jpg")} alt="case"/></li>
                        {/*<li><img src={require("../../assets/img/case/15.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/17.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/19.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/20.jpg")} alt="case"/></li>*/}
                        <li><img src={require("../../assets/img/case/21.jpg")} alt="case"/></li>
                        {/*<li><img src={require("../../assets/img/case/22.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/23.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/25.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/30.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/33.jpg")} alt="case"/></li>*/}
                        <li><img src={require("../../assets/img/case/35.jpg")} alt="case"/></li>
                        {/*<li><img src={require("../../assets/img/case/38.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/39.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/40.jpg")} alt="case"/></li>*/}
                        <li><img src={require("../../assets/img/case/41.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/45.jpg")} alt="case"/></li>
                        {/*<li><img src={require("../../assets/img/case/46.jpg")} alt="case"/></li>*/}
                        {/*<li><img src={require("../../assets/img/case/47.jpg")} alt="case"/></li>*/}
                        <li><img src={require("../../assets/img/case/48.jpg")} alt="case"/></li>

                    </ul>
                    <div className="caseMore">
                        <Link to="classic" >查看更多</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Case;