import React, { Component } from 'react';
import UserAvatar  from "../UserAvatar";
import ExpandMore from '@material-ui/icons/ExpandMore';

export class AccountNavigation extends Component {

    constructor(props){
        super(props)
    }

    render () {

        const { classes } = this.props;

        return (
            <div className={classes.userAccountSetting}>
                <a href={'#'} className={classes.userAccountGreetings}>Hello, Joanne</a>
                <UserAvatar/>
                <ExpandMore className={classes.arrow}/>
            </div>
        );
    };
}