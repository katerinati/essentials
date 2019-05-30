import React, { Component } from 'react';
import RatingChart from "../../components/RatingChart";
import Paper from '@material-ui/core/Paper';

export class ReportDetails extends Component {

    constructor(props) {
        super(props);

    }

    render () {

        const { reports, classes } = this.props;

        return(
            <div className={classes.tabWrap}>
                { reports.map( (report, i) =>
                    <Paper className={classes.detailsWrap} key={i}>
                        <RatingChart sectionTitle={report.detailTile}
                                     sectionValue={report.detailValue}
                                     detailStatus={report.detailStatus}
                                     detailStatusValue={report.detailStatusValue}

                        />
                    </Paper>
                ) }
            </div>
        )
    }
}