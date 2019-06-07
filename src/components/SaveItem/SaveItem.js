import React from 'react';
import { HeartIcon } from '../Icons/Heart'

export const SaveItem = ({className}) => (

    <div className={className}>
        <span> Save </span>
        <HeartIcon width="32"
                   height="32"
                   viewBox="0 0 32 32"
                   fill="#C4C4C4"
        />
    </div>

);