import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import creditCardStep from '../../resources/images/creditCC-tab.png';
import debitCardStep from '../../resources/images/debitCC-tab.png';
import prepaidCardStep from '../../resources/images/prepaidCC-tab.png';

export class SlideSwitcher extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { onSlideChange, value, classes } = this.props;

        return (
            <div className={classes.sliderSwitcherWrap}>
                <AppBar position="static" color="default" className={classes.sliderSwitcher}>
                    <Tabs
                        value={value}
                        onChange={onSlideChange}
                        className={classes.slideTabWrap}
                        classes={{
                            indicator: classes.indicator,
                        }}
                    >
                        <Tab classes={{selected: classes.selected}} className={classes.slideTab} style={{
                            backgroundImage : `url(${creditCardStep})`
                        }} />
                        <Tab classes={{selected: classes.selected}} className={classes.slideTab} style={{
                            backgroundImage : `url(${debitCardStep})`
                        }} />
                        <Tab classes={{selected: classes.selected}} className={classes.slideTab} style={{
                            backgroundImage : `url(${prepaidCardStep})`
                        }} />
                    </Tabs>
                </AppBar>
            </div>
        );
    }

}