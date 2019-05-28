import React, { Component } from 'react';
import FullStart from '@material-ui/icons/Star';
import classNames from 'classnames';

export class StarRating extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { ratingCount, classes } = this.props;
        let rating = [];

        for (let i = 0; i < 5; i++) {
            if (i >= ratingCount && i != 0) {
                rating.push(<FullStart className={classNames(classes.ratingStar, classes.ratingStarDefault)} key={i}/>);
            } else {
                rating.push(<FullStart className={classNames(classes.ratingStar, classes.ratingStarActive)} key={i}/>);
            }
        }

        return(
            <div className={classes.ratingWrap}>
                {rating}
            </div>
        )

    }

}