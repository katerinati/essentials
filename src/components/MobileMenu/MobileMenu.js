import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountNavigation from "../AccountNavigation";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export class MobileMenu extends Component {

    constructor(props){
        super(props);

        this.state = {
            open: false
        };

    }

    toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({open: open});
    };

    render() {

        const {classes} = this.props;

        return(
            <div>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>

                <Drawer anchor="right" open={this.state.open} onClose={this.toggleDrawer(false)} >
                    <div
                        className={classes.mobileMenu}
                        role="presentation"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        <List>
                            {['Home', 'Offers', 'Checklist'].map((text) => (
                                <ListItem button key={text}>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={<AccountNavigation />}/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>

        )

    }

}