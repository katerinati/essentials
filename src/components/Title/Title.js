import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export class Title extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { title, classes } = this.props;

        return (
            <Typography align="center" variant="h6" className={classes.tabTitle} >{title}</Typography>
        )
    }
}