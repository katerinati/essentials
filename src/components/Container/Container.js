import React from 'react';

export const Container = ({children, classes}) => {
    return <main className={classes.container}>{children}</main>
};