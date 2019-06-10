import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ScoreBooster from "../ScoreBooster";
import Button from '@material-ui/core/Button';
import CustomLink from "../CustomLink";
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import SwipeableViews from 'react-swipeable-views';
import ClassNames from 'classnames';

export class FactorDetail extends Component{

    constructor(props){
        super(props);

        this.state = {
            slide : 0,
            total: props.factorDetails.details.length
        }
    }

    renderDots = () => {
        const { factorDetails, classes } = this.props;
        const { slide } = this.state;

        return factorDetails.details.map( (data, i) =>
            <span key={i} className={ClassNames(classes.slideItem,{
                [classes.activeItem]: ( i == slide),
            })}></span>
        )

    };

    handleNext = () => {
        const { slide, total } = this.state;

        if ((slide + 1) < total) {
            return this.setState({slide: slide + 1});
        }
    };
    //
    handleBack = () => {
        const { slide } = this.state;
        if (slide !== 0) {
            return this.setState({slide: slide - 1});
        }
    };

    changeTab = (index, indexLatest, meta) => {
        this.setState({slide: index});
    };

    renderFactorData = () => {
        const { factorDetails, classes } = this.props;

        return factorDetails.details.map( (factorDetail, i) =>
            <div className={classes.singleFactorWrap} key={i}>
                <div className={classes.singleFactorDesc}>
                    <div className={classes.factorBooster}>
                        <ScoreBooster score={factorDetail.points}/>
                    </div>
                    <div className={classes.factorTypography}>
                        <Typography align="left" className={classes.singleFactorSubtitle}>Paying down this card earlier could help your score </Typography>
                        <Typography align="left" className={classes.singleFactorInfo}>Make an extra payment soon to lower the card balance that’s reported to Equifax </Typography>
                        <div className={classes.singleFactorReport}>
                            <Typography align="left" variant='h6' className={classes.reportTitle}>Citicards cbna</Typography>
                            <Typography align="left" className={classes.reportBalance}>Reported balance {factorDetail.reportedBalance}</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.factorActions}>
                    <div className={classes.factorActionBtn}>
                        <Button className={classes.btn}>CTA</Button>
                        <CustomLink href={"#"} color="custom" className={classes.link}> add to checklist </CustomLink>
                    </div>
                </div>
            </div>
        );

    }

    // TODO move navigation from Slide
    render() {

        const { factorDetails, classes } = this.props;
        const { slide, total } = this.state;

        return (
            <div className={classes.factorWrap}>
                <Typography align="left" className={classes.singleFactorText}>{factorDetails.overview}</Typography>

                <SwipeableViews index={slide} onChangeIndex={this.changeTab} enableMouseEvents>
                    { this.renderFactorData(slide) }
                </SwipeableViews>

                <div className={classes.factorNav}>
                    <div className={classes.stepNav}>
                        <CustomLink color="primary"
                                    disabled={(slide <= 0)}
                                    className={ClassNames(
                                        classes.link,
                                        {[classes.isDisabled]: ( slide <= 0)} )}
                                    onClick={this.handleBack}
                        > <KeyboardArrowLeft/> previous  </CustomLink>
                        <CustomLink color="primary"
                                    disabled={(slide >= total)}
                                    className={ClassNames(
                                        classes.link,
                                        {[classes.isDisabled]: ( slide === ( total -1 ) )} )}
                                    onClick={this.handleNext}
                        > next <KeyboardArrowRight/> </CustomLink>
                    </div>
                    <div className={classes.factorSlideNav}>{this.renderDots()}</div>
                </div>
            </div>

        )
    }
}