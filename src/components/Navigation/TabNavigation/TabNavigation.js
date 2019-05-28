import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabsNav = [ 'Credit cards', 'Affordability', 'Payment history', 'Credit activity', 'Bad credit', 'Stability' ];

export class TabNavigation extends Component {

    constructor(props){
        super(props)
    }
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };


    render() {

        const { classes } = this.props;

        return(
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    classes={{
                        indicator: classes.indicator,
                        flexContainer: classes.tabNavigationFlex,
                    }}
                    className={classes.tabNavigation}
                >
                    { TabsNav.map( (tab, i) => <Tab classes={{selected: classes.selected}} className={classes.root} label={tab} key={i} />) }
                </Tabs>
        )

    }

}