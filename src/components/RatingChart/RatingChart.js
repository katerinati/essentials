import React, { Component } from 'react';
import classNames from 'classnames';
import ChartTooltip from "../ChartTooltip";

import CustomLink from "../CustomLink";

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import FactorDetail from '../FactorDetail';

export class RatingChart extends Component{

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    toggleFactor = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({open: open});
    };

    render() {

        const {sectionTitle, sectionValue, detailStatus, detailStatusValue, className, classes} = this.props;

        return(
            <div>
                <h6 className={classes.chartTitle}>{sectionTitle}</h6>
                <span className={classes.chartDesc}>{sectionValue}</span>
                <div className={classes.ratingChartRow}>
                    <div className={classNames(
                        classes.chartElement,
                        classes.chartElementVeryPoor
                    )}></div>
                    <div className={classNames(
                        classes.chartElement,
                        classes.chartElementPoor
                    )}></div>
                    <div className={classNames(
                        classes.chartElement,
                        classes.chartElementFair
                    )}></div>
                    <div className={classNames(
                        classes.chartElement,
                        classes.chartElementGood
                    )}></div>
                    <div className={classNames(
                        classes.chartElement,
                        classes.chartElementExcellent
                    )}></div>
                    <ChartTooltip detailStatus={detailStatus} detailStatusValue={detailStatusValue}  />
                </div>

                <div className={classes.factorDetails}>
                    <CustomLink color="primary" className={classes.link} component="button" onClick={this.toggleFactor(!this.state.open)}> factor details {this.state.open ? <ExpandLess /> : <ExpandMore />}</CustomLink>
                </div>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <FactorDetail/>
                </Collapse>

            </div>

        );
    }
}