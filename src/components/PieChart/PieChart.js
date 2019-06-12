import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import Typography from '@material-ui/core/Typography';
import {CircleChart} from "../Icons/CircleChart";

export class PieChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '60%',
                        },
                        track: {
                            background: '#E4E6EE',
                        },
                        dataLabels: {
                            showOn: 'always',
                            name: {
                                show: true,
                                color: '#474C58',
                                fontSize: '18px',
                                fontWeight: 500,
                                offsetY: 10,
                            },
                            value: {
                                show: false,
                            }
                        },
                        chart: {
                            fontFamily: 'Heebo',
                            stroke: {
                                lineCap: 'round'
                            },
                        },
                    },
                },
                labels: ['Good'],
                fill: {
                    colors:['#45B376']
                },
                stroke: {
                    lineCap: 'round'
                },



            },


            series: [65],

        }
    }

    render () {

        const {classes} = this.props;

        return(

            <div className={classes.PieChart}>
                {/*<ReactApexChart*/}
                    {/*options={this.state.options}*/}
                    {/*series={this.state.series}*/}
                    {/*type="radialBar"*/}
                    {/*height="300"*/}
                {/*/>*/}
                <div className={classes.pieChartWrap}>
                    <span className={classes.progressTitle}>Good</span>
                    <CircleChart width="240" height="243" viewBox="0 0 240 243" fill="none" xmlns="http://www.w3.org/2000/svg" />
                </div>
                <div className={classes.pieDesc}>
                    <Typography className={classes.cardChartInfo} align="center">Your credit card balances look pretty high </Typography>
                    <Typography className={classes.cardChartDesc} align="center">A good rule of thumb is to keep your balances below 30% of your limit </Typography>
                </div>

            </div>

        );
    }
}