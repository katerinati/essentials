import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Logo from "../../Logo";
import AccountNavigation from "../../AccountNavigation";



class GlobalNavigation extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.tabNavigation}>
                <Logo className={classes.siteLogo}
                    width="38"
                    height="40"
                    viewBox="0 0 38 40"
                />
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    centered
                    classes={{
                        flexContainer : classes.menuWrapp,
                        indicator: classes.indicator,
                    }}
                >
                    <Tab label="Home" classes={{selected: classes.selected}} className={classes.mainTabItem} />
                    <Tab label="Offers" classes={{selected: classes.selected}} className={classes.mainTabItem} />
                    <Tab label="Checklist" classes={{selected: classes.selected}} className={classes.mainTabItem} />
                </Tabs>
                <AccountNavigation />
            </Paper>
        );
    }
}

GlobalNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default GlobalNavigation;