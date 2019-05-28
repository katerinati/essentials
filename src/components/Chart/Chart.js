import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import moment from "moment";
import ChartTitle from "../../components/Title";


const MockData = [
    {"date":1558706082841,"value":59},
    {"date":1558706202841,"value":60},
    {"date":1558706322841,"value":54},
    {"date":1558706442841,"value":62},
    {"date":1558706562841,"value":52},
    {"date":1558706682841,"value":50},
    {"date":1558706802841,"value":69},
    {"date":1558706922841,"value":67},
    {"date":1558707042841,"value":56},
    {"date":1558707162841,"value":51},
    {"date":1558707282841,"value":53},
    {"date":1558707402841,"value":60},
    {"date":1558707522841,"value":56}
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

export class Chart extends Component {

    constructor(props){
        super(props);
    }

    render () {

        const {chartTitle, classes} = this.props;

        return (
            <div className={classes.creditCardChart}>
                <ChartTitle title={chartTitle}/>
                <div className={classes.chartWrap}>

                        <LineChart width={990} height={225} data={MockData}
                                   margin={{top: 65, right: 30, left: -25, bottom: 30}}
                                   className={classes.lineChart}
                        >
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                dataKey="value"
                                type="number"
                                domain={['dataMin', 'dataMax']}
                                tickFormatter={tickFormaterY}
                            />
                            <XAxis
                                axisLine={false}
                                tickLine={false}
                                dataKey="date"
                                type="number"
                                domain={['dataMin', 'dataMax']}
                                tickFormatter={tickFormater}
                            />
                            <Tooltip
                                formatter={tooltipValueFormatter}
                                labelFormatter={tooltipLabelFormatter}
                            />
                            <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                            <Line
                                strokeWidth="4"
                                type="monotone"
                                dataKey="value"
                                stroke="#4286F5"
                                dot={{r: 5 }} />
                            />
                        </LineChart>
                </div>

            </div>
        );
    }
}
