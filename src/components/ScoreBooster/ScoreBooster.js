import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Lightning } from '../Icons/Lightning'


export class ScoreBooster extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const {score, classes} = this.props;

        return(
            <div className={classes.booster}>
                <Lightning  width="18"
                            height="26"
                            viewBox="0 0 18 26"
                            fill="#A1A6AE"
                            className={classes.boosterImg} />
                <Typography align="left" variant='h6' className={classes.boosterTitle}>Score Booster </Typography>
                <Typography align="left" variant='subtitle1' className={classes.boosterScore}>{score} Points to total score</Typography>
            </div>
        )
    }

}