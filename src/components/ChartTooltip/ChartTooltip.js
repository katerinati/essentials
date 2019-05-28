import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

export class ChartTooltip extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        const { detailStatus, detailStatusValue, classes } = this.props;

        return(
            <div className={classes.chartTooltip} style={{'left': `calc(${detailStatusValue}% - 40px)`}}>
                <Chip className={classes.chartNotification}
                      key={detailStatus}
                      label={detailStatus}
                />
                <span className={classes.trunk}></span>
                <span className={classes.circle}></span>
            </div>

        )

    }
}