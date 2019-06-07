import React , { Component } from 'react';
import TabSwitcher from "../TabSwitcher";
import ReportDetails from "../ReportDetails";
import DataDetails from "../DataDetails";
import SwipeableViews from 'react-swipeable-views';

export default class DashboardTabs extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        this.state = {
            slide : 0
        }

        this.swipeableActions = {}
    }

    handleTabChange = (_, index) => {
        this.setState({slide: index});
    };

    handleChangeTab = (index, indexLatest, meta) => {
        this.setState({slide: index});
    };

    handleUpdateHeight = () => {
        for(let i = 0; i < 9; i++) {
            setTimeout(() => {this.swipeableActions.updateHeight()}, 45 * i)
        }
    };

    render() {

        const { reports, reportDataDetail, classes } = this.props;
        const { slide } = this.state;

        return(
            <section className={classes.detailsData}>
                <TabSwitcher onTabChange={this.handleTabChange} value={slide}/>

                <SwipeableViews index={slide}
                                onChangeIndex={this.handleChangeTab}
                                enableMouseEvents
                                ref={this.myRef}
                                animateHeight
                                action={ (actions) => { this.swipeableActions = actions; }}
                >
                    <ReportDetails reports={reports} updateHeight={this.handleUpdateHeight} />
                    <DataDetails reportDataDetail={reportDataDetail} />
                </SwipeableViews>
            </section>

        )

    }

}

