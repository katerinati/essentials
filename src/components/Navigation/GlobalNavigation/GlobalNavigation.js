import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Logo from "../../Logo";
import AccountNavigation from "../../AccountNavigation";
import MobileMenu from "../../MobileMenu";
import {withRouter} from 'react-router-dom';

import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'

const GlobalNavigation = ({classes , history}) => {

    const links = {
        0:'/',
        1:'/offers',
        2:'/checklist'
    };

    const [open, setOpen] = useState(false);

    const mobile = useMediaQuery('(max-width:600px)');

    const handleChange = useCallback((event, value) => {
        setOpen(value);
        history.push(links[value]);
    }, [setOpen]);

    return (
        <Paper className={classes.tabNavigation}>
            <div className={classes.siteLogo}>
                <Logo
                    width="38"
                    height="40"
                    viewBox="0 0 38 40"
                />
            </div>


            { mobile ?
                (<div className={classes.mobileMenuWrap}>
                    <span className={classes.currentPage}>Home</span>
                    <MobileMenu />
                </div>)
            :
                (<div className={classes.desktopNav}>
                    <Tabs
                        value={open}
                        onChange={handleChange}
                        centered
                        classes={{
                            flexContainer : classes.menuWrap,
                            indicator: classes.indicator,
                        }}
                    >
                        <Tab label="Home" classes={{selected: classes.selected}} className={classes.mainTabItem} />
                        <Tab label="Offers" classes={{selected: classes.selected}} className={classes.mainTabItem} />
                        <Tab label="Checklist" classes={{selected: classes.selected}} className={classes.mainTabItem} />
                    </Tabs>
                    <AccountNavigation />
                </div>)
            }

        </Paper>
    )
}

GlobalNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(GlobalNavigation);