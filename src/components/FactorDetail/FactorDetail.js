import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ScoreBooster from "../ScoreBooster";
import Button from '@material-ui/core/Button';
import CustomLink from "../CustomLink";
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import SwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';

export class FactorDetail extends Component{

    constructor(props){
        super(props);

        this.state = {
            slide : 0,
            total: 3 // TODO from data length
        }
    }
    // TODO move navigation from Slide
    render() {

        const { score = "+ 46", balance = "£11,343", classes } = this.props;
        const { slide, total } = this.state;

        return (
            <SwipeableViews index={slide} >
                <div className={classes.singleFactorWrap}>
                    <Typography align="left" className={classes.singleFactorText}>Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text. </Typography>
                    <div className={classes.singleFactorDesc}>
                        <div className={classes.factorBooster}>
                            <ScoreBooster score={score}/>
                        </div>
                        <div className={classes.factorTypography}>
                            <Typography align="left" className={classes.singleFactorSubtitle}>Paying down this card earlier could help your score </Typography>
                            <Typography align="left" className={classes.singleFactorInfo}>Make an extra payment soon to lower the card balance that’s reported to Equifax </Typography>
                            <div className={classes.singleFactorReport}>
                                <Typography align="left" variant='h6' className={classes.reportTitle}>Citicards cbna</Typography>
                                <Typography align="left" className={classes.reportBalance}>Reported balance {balance}</Typography>
                            </div>
                        </div>

                    </div>
                    <div className={classes.factorActions}>
                        <div className={classes.factorActionBtn}>
                            <Button className={classes.btn}>CTA</Button>
                            <CustomLink href={"#"} color="custom" className={classes.link}> add to checklist </CustomLink>
                        </div>
                        <div className={classes.factorNav}>
                            <div className={classes.stepNav}>
                                <CustomLink href={"#"} color="custom" disabled={(slide <= 0)} className={classes.link}> <KeyboardArrowLeft/> previous  </CustomLink>
                                <CustomLink href={"#"} color="primary" disabled={(slide >= total)} className={classes.link}> next <KeyboardArrowRight/> </CustomLink>
                            </div>
                            <div className={classes.factorSlideNav}>
                                <span tabIndex="1" className={classNames(classes.activeItem, classes.slideItem)}></span>
                                <span tabIndex="2" className={classes.slideItem}></span>
                                <span tabIndex="3" className={classes.slideItem}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.singleFactorWrap}>
                    <Typography align="left" className={classes.singleFactorText}>Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text. </Typography>
                    <div className={classes.singleFactorDesc}>
                        <div className={classes.factorBooster}>
                            <ScoreBooster score={score}/>
                        </div>
                        <div className={classes.factorTypography}>
                            <Typography align="left" className={classes.singleFactorSubtitle}>Paying down this card earlier could help your score </Typography>
                            <Typography align="left" className={classes.singleFactorInfo}>Make an extra payment soon to lower the card balance that’s reported to Equifax </Typography>
                            <div className={classes.singleFactorReport}>
                                <Typography align="left" variant='h6' className={classes.reportTitle}>Citicards cbna</Typography>
                                <Typography align="left" className={classes.reportBalance}>Reported balance {balance}</Typography>
                            </div>
                        </div>
                    </div>
                    <div className={classes.factorActions}>
                        <div className={classes.factorActionBtn}>
                            <Button className={classes.btn}>CTA</Button>
                            <CustomLink href={"#"} color="custom" className={classes.link}> add to checklist </CustomLink>
                        </div>
                        <div className={classes.factorNav}>
                            <div className={classes.stepNav}>
                                <CustomLink href={"#"} color="custom" className={classes.link}> <KeyboardArrowLeft/> previous  </CustomLink>
                                <CustomLink href={"#"} color="primary" className={classes.link}> next <KeyboardArrowRight/> </CustomLink>
                            </div>
                            <div className={classes.factorSlideNav}>
                                <span tabIndex="1" className={classes.slideItem}></span>
                                <span tabIndex="2" className={classNames(classes.activeItem, classes.slideItem)}></span>
                                <span tabIndex="3" className={classes.slideItem}></span>
                            </div>
                        </div>
                    </div>
                </div>

            </SwipeableViews>
        )
    }
}