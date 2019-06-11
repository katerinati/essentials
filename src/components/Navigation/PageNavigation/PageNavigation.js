import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FraudWatch from '../../FraudWatch';

const PageTabs = [
    {label:"Essentials", url:'essentials'},
    {label:"Lender report", url:'lender-report'},
    {label:"Credit report", url:'credit-report'},
    {label:"Score boosters", url:'score-boosters'}
];

export class PageNavigation extends Component {

    constructor(props){
        super(props)
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        const {history , match} = this.props;
        this.setState({value},()=>{
            history.push(PageTabs[value].url)
        });
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
                    { PageTabs.map( (tab, i) =>
                        <Tab classes={{
                            selected: classes.selected,
                            wrapper: classes.tabLabel}}
                             className={classes.root}
                             label={tab.label}
                             key={i}
                        />)
                    }
                    <FraudWatch />
                </Tabs>
            </div>
        );
    }
}