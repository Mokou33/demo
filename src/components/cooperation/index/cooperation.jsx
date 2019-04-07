import React, {Component} from 'react';


import Header from "../../header";
import Banner from "../../banner";
import Coop from "../coop";
import Type from "../type";
import Contact from "../../contact";
import Footer from "../../footer";





class Serve extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <Coop></Coop>
                <Type></Type>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }
}

export default Serve;