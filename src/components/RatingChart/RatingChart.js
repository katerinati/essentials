import React, { Component } from 'react';
import classNames from 'classnames';
import ChartTooltip from "../ChartTooltip";

export class RatingChart extends Component{

    constructor(props) {
        super(props)
    }

    render() {

        const {sectionTitle, sectionValue, detailStatus, detailStatusValue, classes} = this.props;

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

            </div>

        );
    }
}