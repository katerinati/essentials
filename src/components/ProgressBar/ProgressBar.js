import React, { Component } from 'react';
import ClassNames from 'classnames';


export class ProgressBar extends Component{

    constructor(props){
        super(props)
    }

    render() {

        const { progressValue, classes } = this.props;

        return (
            <div className={classes.itemProgress}>
                <div
                    className={ClassNames(classes.progressBarState, {
                        [classes.itemBarExcellent]: (progressValue <= 19),
                        [classes.itemBarGood]: (19 > progressValue && progressValue <= 39),
                        [classes.itemBarFair]: (39 > progressValue && progressValue <= 59),
                        [classes.itemBarPoor]: (59 > progressValue && progressValue <= 79),
                        [classes.itemBarVeryPoor]: (79 < progressValue),
                    })}
                    style={{width:`${progressValue}%`}}
                ></div>
            </div>
        )

    }

}