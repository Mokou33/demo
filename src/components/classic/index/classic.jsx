import React, {Component} from 'react';




import Header from "../../header";
import Clcase from "../clcase";


import Contact from "../../contact";
import Footer from "../../footer";

class Classic extends Component {

    componentDidMount() {
        this.node.scrollIntoView();
    }

    render() {
        return (
            <div className={'classic'} ref={node => this.node = node}>
                <Header />
                <Clcase />

                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Classic;