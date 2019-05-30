import React , { Component } from 'react';
import TabSwitcher from "../TabSwitcher";
import ReportDetails from "../ReportDetails";
import DataDetails from "../DataDetails";
import SwipeableViews from 'react-swipeable-views';

export default class DashboardTabs extends Component {
    constructor(props){
        super(props);

        this.state = {
            view : 0
        }
    }

    handleTabChange = (_, index) => {
        this.setState({view: index});
    };

    render() {

        const { reports, reportDataDetail, classes } = this.props;
        const { view } = this.state;

        return(
            <section className={classes.detailsData}>
                <TabSwitcher onTabChange={this.handleTabChange} value={view}/>

                <SwipeableViews index={view}>
                    <ReportDetails reports={reports} />
                    <DataDetails reportDataDetail={reportDataDetail} />
                </SwipeableViews>
            </section>

        )

    }

}
