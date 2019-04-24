import React, {Component} from 'react';

import  "./index.scss";

import Header from "../../header";
import Footer from "../../footer";





class Details extends Component {

    componentDidMount() {
        this.node.scrollIntoView()
    }


    render() {
        const url = this.props.match.params.url
        return (
            <div>
                <Header />
                <div className="detail" ref={node=>this.node=node}>
                    {
                        url<10?<img src={require(`../../../assets/img/cases/to_0${url}.jpg`)} alt="details"/>:<img src={require(`../../../assets/img/cases/to_${url}.jpg`)} alt="details"/>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Details;