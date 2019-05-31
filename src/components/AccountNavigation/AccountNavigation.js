import React, { Component } from 'react';
import UserAvatar  from "../UserAvatar";
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

export class AccountNavigation extends Component {

    constructor(props){
        super(props)
    }

    render () {

        const { classes } = this.props;

        return (
            <div className={classes.userAccountSetting}>
                <Typography className={classes.userAccountGreetings}>Hello, Joanne</Typography>
                <UserAvatar/>
                <ExpandMore className={classes.arrow}/>
            </div>
        );
    };
}