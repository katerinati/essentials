import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import moment from "moment";
import ChartTitle from "../../components/Title";

import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'



const Chart = ({classes , chartTitle}) => {

    const mobile = useMediaQuery('(max-width:375px)');

    const chartWidth = (mobile) ? 355 : 990;

    const MockData = [
        {"date":1521324000000,"value":55},
        {"date":1523998800000,"value":58},
        {"date":1526590800000,"value":60},
        {"date":1529269200000,"value":67},
        {"date":1531861200000,"value":69},
        {"date":1534539600000,"value":68},
        {"date":1537218000000,"value":60},
        {"date":1539810000000,"value":66},
        {"date":1542492000000,"value":68},
        {"date":1545084000000,"value":67},
        {"date":1547762400000,"value":66},
        {"date":1550440800000,"value":60},
        {"date":1552860000000,"value":59}
    ];

    const dateToYM = (date) => {

        let strArray=[
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ],
            d = date.getDate(),
            m = strArray[date.getMonth()],
            y = date.getFullYear();

        return m + ', ' + y;
    };

    const tickFormater = (date) => {

        return dateToYM(new Date(date));
    };
    const tickFormaterY = (percent) => {

        return percent + '%';
    };

    const tooltipValueFormatter = (value, name) => {
        return [
            `Credit Cards usage ${value}%`
        ]
    };

    const tooltipLabelFormatter = (date) => {
        return moment(date).format('MMMM, YYYY')

    };

    return (
        <section className={classes.LineChart}>
            <ChartTitle title={chartTitle}/>
            <div className={classes.chartWrap}>

                <LineChart width={chartWidth} height={240} data={MockData}
                           margin={{top: 65, right: 30, left: -25, bottom: 35}}
                           className={classes.lineChart}
                >
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        // dataKey="value"
                        ticks={[42,55,69]}
                        type="number"
                        domain={['dataMin', 'dataMax']}
                        tickFormatter={tickFormaterY}
                        tickCount={3}
                        tickSize={8}
                    />
                    <XAxis
                        axisLine={false}
                        tickLine={false}
                        dataKey="date"
                        type="number"
                        domain={['dataMin', 'dataMax']}
                        tickFormatter={tickFormater}
                        tickCount={3}
                        interval="preserveStartEnd"
                        padding={{ left: 33, right: 33 }}
                        tickSize={20}


                    />
                    <Tooltip
                        formatter={tooltipValueFormatter}
                        labelFormatter={tooltipLabelFormatter}
                        labelStyle={{
                            fontSize: 13,
                            color: '#A1A6AE',
                            textAlign: 'center'
                        }}
                        contentStyle={{
                            border: 0,
                            boxShadow: '0px 15px 60px rgba(40, 74, 253, 0.1), 0px 10px 15px rgba(5, 7, 19, 0.03)',
                            borderRadius: 1,
                            width: 250
                        }}
                        itemStyle={{
                            fontSize: 13,
                            color: '#A1A6AE',
                            textAlign: 'center'
                        }}
                        isAnimationActive={false}
                    />
                    <CartesianGrid vertical={false} strokeDasharray="8 9" />
                    <Line
                        strokeWidth="3"
                        type="monotone"
                        dataKey="value"
                        stroke="#4286F5"
                        dot={{r: 4 }} />
                    />
                </LineChart>
            </div>
        </section>
    );

}

export default Chart;