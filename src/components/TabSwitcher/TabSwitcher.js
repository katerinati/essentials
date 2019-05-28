import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export class TabSwitcher extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { onTabChange, value, classes } = this.props;

        return (
            <div>
                <AppBar position="static" color="default" className={classes.tabSwitcher}>
                    <Tabs
                        value={value}
                        onChange={onTabChange}
                        className={classes.tabWrap}
                        classes={{
                            indicator: classes.indicator,
                        }}
                    >
                        <Tab label="Rating" classes={{selected: classes.selected}} className={classes.tab}/>
                        <Tab label="Data" classes={{selected: classes.selected}} className={classes.tab}/>
                    </Tabs>
                </AppBar>
            </div>
        );
    }

}