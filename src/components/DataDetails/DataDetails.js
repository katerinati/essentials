import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import DetailItem from "../DetailItem";

export class DataDetails extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { reportDataDetail, classes } = this.props;

        return(
            <div className={classes.tabWrap}>
                <Paper className={classes.dataDetailWrap}>
                    { reportDataDetail.map( (reportData, i) =>
                        <DetailItem reportDataDetail={reportData} key={i} className={classes.detailItem}/>
                    )}
                </Paper>
            </div>
        )
    }
}