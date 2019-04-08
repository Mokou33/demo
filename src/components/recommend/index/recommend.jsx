import React, {Component} from 'react';


import Header from "../../header";
import Banner from "../../banner";
import Explanation from "../explanation";
import Design from "../design";
import Includ from "../includ";
import Plan from "../plan";
import Tactic from "../tactic";
import Diffuse from "../diffuse";
import Pack from "../pack";
import Train from "../train";
import Contact from "../../contact";
import Footer from "../../footer";

class Recommend extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Explanation />
                <Design></Design>
                <Includ />
                <Plan />
                <Tactic />
                <Diffuse />
                <Pack />
                <Train />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Recommend;