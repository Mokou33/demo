import React, {Component} from 'react';


import Header from "../../header";
import Banner from "../../banner";
import SerCon from "../serCon";





class Serve extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <SerCon></SerCon>
            </div>
        );
    }
}

export default Serve;