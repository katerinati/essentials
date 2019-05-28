import React , { Component } from 'react';
import GlobalNavigation from "../Navigation/GlobalNavigation";

export class Header extends Component{
    constructor(props){
        super(props)
    }

    render () {

        const {classes} = this.props;

        return (
            <header className={classes.siteNavigation}>
                <GlobalNavigation />
            </header>
        )
    }
}