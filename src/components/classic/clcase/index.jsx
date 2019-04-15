import React, {Component} from 'react';

import "./index.scss"

class Clcase extends Component {




    render() {
        return (
            <div className="clcase" >
                <div className="sort">
                    <span>分类:</span>
                    <ul className="sortCon">
                        <li><a href="javascript:;">不限</a></li>
                        <li><a href="javascript:;">分类一</a></li>
                        <li><a href="javascript:;">分类二</a></li>
                        <li><a href="javascript:;">分类三</a></li>
                    </ul>
                </div>
                <div className="con">
                    <ul className="conUl">
                        <li><img src={require("../../../assets/img/case/01.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/02.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/03.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/04.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/06.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/08.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/10.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/12.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/14.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/15.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/17.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/19.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/20.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/21.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/22.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/23.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/25.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/30.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/33.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/35.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/38.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/39.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/40.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/41.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/45.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/46.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/47.jpg")} alt="case"/></li>
                        <li><img src={require("../../../assets/img/case/48.jpg")} alt="case"/></li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Clcase;