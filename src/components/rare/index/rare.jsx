import React, {Component} from 'react';


import Header from "../../header";
import Banner from "../../banner";
import Content from "../content";


import Contact from "../../contact";
import Footer from "../../footer";

class Rare extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <Content></Content>

                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }
}

export default Rare;