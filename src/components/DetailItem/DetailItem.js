import React, { Component } from 'react';
import CardImage from '../../resources/images/credit-cards.png';
import ProgressBar from "../ProgressBar";
import ClassNames from 'classnames';
import LinkNextStep from "../LinkNextStep";

export class DetailItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { reportDataDetail, className, classes } = this.props;

        return(
            <div className={ClassNames(classes.detailItem, className)}>
                <span className={classes.itemTitle}>
                    <span className={classes.itemIcon}>
                        <img src={CardImage}/>
                    </span>
                    <h6 className={classes.cardName}>Bank of America Card</h6>
                    <span className={ClassNames(classes.valueItem, {
                              [classes.itemValueExcellent]: (reportDataDetail.progressValue <= 19),
                              [classes.itemValueGood]: (19 > reportDataDetail.progressValue && reportDataDetail.progressValue <= 39),
                              [classes.itemValueFair]: (39 > reportDataDetail.progressValue && reportDataDetail.progressValue <= 59),
                              [classes.itemValuePoor]: (59 > reportDataDetail.progressValue && reportDataDetail.progressValue <= 79),
                              [classes.itemValueVeryPoor]: (79 < reportDataDetail.progressValue),
                          })}
                    >{reportDataDetail.progressValue}%</span>
                </span>
                <ProgressBar progressValue={reportDataDetail.progressValue}/>
                <div className={classes.detailItemDesc}>
                    <div className={classes.infoWrap}>
                        <span className={classes.balanceTitle}>Balance</span>
                        <span className={classes.balanceAmount}>{reportDataDetail.balanceValue}</span>
                    </div>
                    <div className={classes.infoWrap}>
                        <span className={classes.limitTitle}>Limit:</span>
                        <span className={classes.limitAmount}>{reportDataDetail.limitValue}</span>
                    </div>
                </div>
                <LinkNextStep link={'#'} title={'Go to details'}/>
            </div>
        )
    }
}