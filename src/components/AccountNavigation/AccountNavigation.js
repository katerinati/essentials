import React, { Component } from 'react';
import UserAvatar  from "../UserAvatar";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import CustomLink from "../CustomLink";
import classNames from 'classnames';

export class AccountNavigation extends Component {

    constructor(props){
        super(props);

        this.state = {
            open : false
        }
    }

    handleChange = () => {
        const {open} = this.state;
        this.setState({open: !open});
    };

    render () {

        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.userAccountSetting}>
                {/*<a href={'#'} className={classes.userAccountGreetings}>Hello, Joanne</a>*/}
                <CustomLink color="primary"
                            className={classes.accountNav}
                            component="button"
                            onClick={this.handleChange}
                > Hello, Joanne <UserAvatar className={classes.userAvatar}/> {open ? <ExpandLess className={classes.arrow} /> : <ExpandMore className={classes.arrow} />}</CustomLink>
                {/*<UserAvatar/>*/}
                {/*<ExpandMore className={classes.arrow}/>*/}
                <Fade in={open}>
                    <Paper elevation={4} className={classes.userMenu}>
                        <a href={'#'} className={classes.userMenuLink}>Profile</a>
                        <a href={'#'} className={classes.userMenuLink}>Dispute account</a>
                        <a href={'#'} className={classNames(classes.userMenuLink, classes.logOut)}>Log out</a>
                    </Paper>
                </Fade>
            </div>
        );
    };
}