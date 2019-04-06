import React, {Component} from 'react';

import './index.scss'

import Header from "../header";
import Banner from "../banner";
import Introduce from "../introduce";
import Honour from "../honour";
import Values from "../values";
import Method from "../method";
import Team from "../team";
import Contact from "../contact";
import Footer from "../footer";




class Home extends Component {
    render() {
        return (
            <div className={'wrap'}>
                <Header></Header>
                <Banner></Banner>
                <Introduce></Introduce>
                <Honour></Honour>
                <Values></Values>
                <Method></Method>
                <Team></Team>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;