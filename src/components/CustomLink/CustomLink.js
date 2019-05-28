import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import classNames from 'classnames';

export class CustomLink extends Component{

    constructor(props){
        super(props)
    }

    render () {

        const {color = 'primary', children, classes, className, ...rest} = this.props;

        return(
            <Link
                className={classNames(className, {
                    [classes.primary]: color === 'primary',
                    [classes.secondary]: color === 'secondary',
                    [classes.custom]: color === 'custom',
                    [classes.animated]: color === 'animated'
                })}
                {...rest}
            >
                {children}
            </Link>
        );

    }
}