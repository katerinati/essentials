import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

class AppLayout extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const {children} = this.props;

        return (
            <div className={'layout'}>
                <Header/>
                {children}
                <Footer/>
            </div>
        );
    }

}

export default AppLayout;