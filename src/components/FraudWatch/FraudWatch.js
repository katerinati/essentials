import React from 'react';
import {FraudIcon} from "../Icons/FraudIcon";

export const FraudWatch = ({classes}) => (
    <div className={classes.fraudCheck}>
        <a href={'#'} className={classes.check}>Fraud watch </a>
        <FraudIcon width="30"
                   height="30"
                   viewBox="0 0 28 28"
                   fill="#4C4C4C"
                   xmlns="http://www.w3.org/2000/svg"
        />
    </div>
);
