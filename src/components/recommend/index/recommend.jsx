import React, {Component} from 'react';


import Header from "../../header";
import Banner from "../../banner";
import Explanation from "../explanation";



// import Contact from "../contact";
// import Footer from "../footer";

class Recommend extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <Explanation></Explanation>


                {/*<Contact></Contact>
                <Footer></Footer>*/}
            </div>
        );
    }
}

export default Recommend;