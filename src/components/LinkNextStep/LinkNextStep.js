import React, { Component } from 'react';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ClassNames from 'classnames';

export class LinkNextStep extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { link, title, className, classes } = this.props;

        return(
            <a href={link} className={ClassNames(classes.nextStep, className)}>{title} <KeyboardArrowRight className={classes.arrowItem}/></a>
        )

    }

}