import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Container from "../../components/Container";
import PageNavigation from "../../components/Navigation/PageNavigation";
import Chart from "../../components/Chart";
import PieChart from "../../components/PieChart";
import TabTitle from "../../components/Title";
import FactorStep from "../../components/FactorStep";
import CardSlider from "../../components/CardSlider";
import DashboardTabs from "../../components/DashboardTabs/DashboardTabs";
import TabNavigation from "../../components/Navigation/TabNavigation";

/*
* Mock Data
* */
import { reports, reportDataDetail } from './_mockData';
import { sliderMockData } from './_mockData';


export class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            view : 0
        }
    }

    render () {

        const { classes } = this.props;

        return (
            <Container>
                <PageNavigation/>
                <TabNavigation/>
                <TabTitle title={'Credit cards '}/>
                <section className={classes.creditCardChart}>
                    <PieChart/>
                </section>
                <Chart chartTitle={'Credit cards usage'} />

                <DashboardTabs classes={classes} reports={reports} reportDataDetail={reportDataDetail} />

                <section className={classes.factorWrap}>
                    <FactorStep/>
                </section>

                <CardSlider sliderData={sliderMockData}/>


            </Container>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};