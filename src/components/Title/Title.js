import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

export class Title extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { title, className, classes } = this.props;

        return (
            <Typography align="center" variant="h6" className={classNames(className, classes.tabTitle)} >{title}</Typography>
        )
    }
}