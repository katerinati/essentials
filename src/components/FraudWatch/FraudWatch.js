import React from 'react';
import fraudImage from '../../resources/images/fraud.png';

export const FraudWatch = ({classes}) => (
    <div className={classes.fraudCheck}>
        <a href={'#'} className={classes.check}>Fraud watch </a>
        <img src={fraudImage}/>
    </div>
);
