import React, {Component} from 'react';

import  "./index.scss";



class CooAdvinfo extends Component {
    render() {
        return (
            <div className="cooAdvinfo">
                {/*<img src={require("../../../assets/img/server/cooAdvinfo.png")} alt=""/>*/}
                <div className="con">
                    <div className="box">
                        <p>快速见效</p>
                        <p>Speed of response</p>
                    </div>
                    <div className="box">
                        <p>风险保障</p>
                        <p>Risk guarantee</p>
                    </div>
                    <div className="box">
                        <p>规模优势</p>
                        <p>Scale advantage</p>
                    </div>
                    <div className="box">
                        <p>专业团队</p>
                        <p>Speed of response</p>
                    </div>
                    <div className="box">
                        <p>回款快速</p>
                        <p>Risk guarantee</p>
                    </div>
                    <div className="box">
                        <p>资源共享</p>
                        <p>Scale advantage</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CooAdvinfo;