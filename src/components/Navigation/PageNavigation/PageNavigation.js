import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FraudWatch from '../../FraudWatch';

// const PageTabs = [
//     {label:"Essentials", url:'essentials'},
//     {label:"Lender report", url:'lender-report'},
//     {label:"Credit report", url:'credit-report'},
//     {label:"Score boosters", url:'score-boosters'}
// ];

const PageTabs = [ 'Essentials', 'Lender report', 'Credit report', 'Score boosters' ];

export class PageNavigation extends Component {

    constructor(props){
        super(props)
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        // const {history , match} = this.props;
        //
        // this.setState({value},()=>{
        //     history.push(PageTabs[value].url)
        // });

        this.setState({value});
    };

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.pageMenuWrap}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    classes={{
                        flexContainer: classes.pageNavigation,
                        indicator: classes.indicator,
                    }}
                    className={classes.wrapHandle}
                >
                    {/*{ PageTabs.map( (tab, i) =>*/}
                        {/*<Tab classes={{*/}
                            {/*selected: classes.selected,*/}
                            {/*wrapper: classes.tabLabel}}*/}
                             {/*className={classes.root}*/}
                             {/*label={tab.label}*/}
                             {/*key={i}*/}
                        {/*/>)*/}
                    {/*}*/}

                    { PageTabs.map( (tab, i) => <Tab classes={{selected: classes.selected, wrapper: classes.tabLabel}} className={classes.root} label={tab} key={i} />) }
                    <FraudWatch />
                </Tabs>
            </div>
        );
    }
}