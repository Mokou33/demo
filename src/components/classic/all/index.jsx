import React, {Component} from 'react';

import {Link} from "react-router-dom";



class All extends Component {

    state = {
        arr:[10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,29,31,33,35]
    }

    render() {
        return (
            <div>
                <ul className="conUl">
                    {
                        this.state.arr.length>0 && (
                            this.state.arr.map((item,index)=>{
                                return(
                                    <li key={index}><img src={require(`../../../assets/img/case/${item}.jpg`)} alt="case"/></li>
                                )
                            })
                        )
                    }
                    {/*<li><img src={require("../../../assets/img/case/01.jpg")} alt="case"/></li>
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
                    <li><img src={require("../../../assets/img/case/48.jpg")} alt="case"/></li>*/}

                </ul>
            </div>
        );
    }
}

export default All;