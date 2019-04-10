import React, {Component} from 'react';

import Header from "../../header";
import Banner from "../../banner";
import Content from "../content";
import Sale from "../sale";
import Product from "../product";
import Gene from "../gene";
import Contact from "../../contact";
import Footer from "../../footer";

class Rare extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Content />
                <Sale />
                <Product />
                <Gene />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Rare;