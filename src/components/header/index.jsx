import React, {Component} from 'react';


import  "./index.scss";



class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <div className="logo">
                    <img src={require("../../assets/img/header/logo.png")} alt="98加盟网"/>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="/">首页</a></li>
                        <li><a href="/">服务内容</a></li>
                        <li><a href="/">合作优势</a></li>
                        <li><a href="/">98介绍</a></li>
                        <li><a href="/">快速资源</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;