import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import hsbcCardStep from '../../resources/images/hsbc-tab.png';
import sainsburyCardStep from '../../resources/images/sainsbury-tab.png';
import vanquisCardStep from '../../resources/images/vanquis-tab.png';

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
                            backgroundImage : `url(${hsbcCardStep})`
                        }} />
                        <Tab classes={{selected: classes.selected}} className={classes.slideTab} style={{
                            backgroundImage : `url(${sainsburyCardStep})`
                        }} />
                        <Tab classes={{selected: classes.selected}} className={classes.slideTab} style={{
                            backgroundImage : `url(${vanquisCardStep})`
                        }} />
                    </Tabs>
                </AppBar>
            </div>
        );
    }

}