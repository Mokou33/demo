import React, {Component} from 'react';

import "./index.scss"
import "antd/lib/carousel/style/css"
import { Carousel } from 'antd';


class Banner extends Component {
    render() {
        return (
            <div className={"banner"}>
                <Carousel autoplay={true}>
                    <img src={require("../../assets/img/banner/banner_02.png")} alt="banner"/>
                    <img src={require("../../assets/img/banner/banner_03.png")} alt="banner"/>
                </Carousel>,
            </div>
        );
    }
}

export default Banner;