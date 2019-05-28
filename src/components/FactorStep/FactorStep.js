import React , { Component } from 'react';
import TabTitle from "../../components/Title";
import LinkNextStep from "../LinkNextStep";

export class FactorStep extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { classes } = this.props;

        return(
            <div className={classes.factorStep}>
                <TabTitle title={'Next factor '}/>
                <LinkNextStep link={'#'} title={'Affordability'} className={classes.factorLink}/>
            </div>
        )

    }

}