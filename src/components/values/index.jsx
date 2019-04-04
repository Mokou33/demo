import React, {Component} from 'react';


import "./index.scss";



class Values extends Component {
    render() {
        return (
            <div className={"values"}>
                <h2>招商价值观</h2>
                <div className="con">
                    <div className={"con-sp1"}>
                        <p>专业</p>
                        <p>professional</p>
                    </div>
                    <div className={"con-sp2"}>
                        <p>全面</p>
                        <p>comprehensive</p>
                    </div>
                    <div className={"con-sp3"}>
                        <div className="con-sp-p">
                            <p>
                                客户利益至上，客户的事情就是98加盟的事情
                            </p>
                            <p>
                                用心服务，对客户负责，对98加盟负责，是98加盟自始自终的经营信条
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Values;