import React, { Component } from 'react';
import StarRating from "../StarRating";
import { SaveItem } from "../SaveItem/SaveItem";
import SwipeableViews from 'react-swipeable-views';
import SlideSwitcher from "../SlideSwitcher";
import SlideImage from '../../resources/images/creditCC-slide.png';
import classNames from 'classnames';
import CustomLink from "../CustomLink";
import {EyeIcon} from "../Icons/Eye";
import HSBD from '../../resources/images/hsbc.png';
import TabTitle from "../../components/Title";
import InfoTooltip from "../InfoTooltip";

export class CardSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slide : 0
        }
    }

    handleSlideChange = (_, index) => {
        this.setState({slide: index});
    };

    TestFunc = (index, indexLatest, meta) => {
        this.setState({slide: index});
    };

    renderSlideData = () => {
       const { sliderData, classes } = this.props;

       return sliderData.map( (slide, i) =>
            <div className={classes.slideItem} key={i}>
                <div className={classes.slideImage} ><img src={SlideImage}/></div>
                <div className={classes.slideInfo}>
                    <div className={classes.slideTitle}>
                        <span className={classNames(
                            classes.providerType,
                            classes[String(slide.cardProvider).toLocaleLowerCase()]
                        )}><img src={HSBD} /></span>
                        <span className={classes.cardName}>{slide.slideTitle}</span>
                        <SaveItem className={classes.saveItem}/>
                    </div>
                    <div className={classes.slideReview}><StarRating ratingCount={4} /><span className={classes.reviewInfo}>{slide.reviewCount} Reviews</span></div>
                    <div className={classes.slideDescWrap}>
                        <div className={classes.descItem}>
                            <span className={classNames(classes.descInfo)}>{slide.period.startRange} Period of</span>
                            <span className={classNames(classes.highlightedText, classes.descInfo)}>{slide.period.endRange} month</span>
                            <span className={classNames(classes.descInfo)}>then {slide.period.amount}</span>
                        </div>
                        <div className={classes.descItem}>
                            <span className={classNames(classes.descInfo)}>Transfer fee of</span>
                            <span className={classNames(classes.highlightedText, classes.descInfo)}>{slide.transferFee.cost}</span>
                            <span className={classNames(classes.descInfo)}>{slide.transferFee.vat} of {slide.transferFee.total}</span>
                        </div>
                        <div className={classes.descItem}>
                            <span className={classNames(classes.descInfo)}>Cost to you</span>
                            <span className={classNames(classes.highlightedText, classes.descInfo)}>{slide.costTo.cost} <InfoTooltip className={classes.descTooltip} info={'Cost info'}/></span>
                            <span className={classNames(classes.descInfo)}>Balance repaid in {slide.costTo.balanceRepaid} month</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    render() {

        const { classes } = this.props;
        const { slide } = this.state;

        return(
            <section className={classes.cardSlider}>
                <TabTitle title={'Suggested for your credit '} className={classes.sliderTitle}/>

                <InfoTooltip info={'Simple info'}/>

                <SwipeableViews index={slide} onChangeIndex={this.TestFunc}>
                    { this.renderSlideData()}
                </SwipeableViews>

                <CustomLink color={'animated'} className={classes.withIcon} ><EyeIcon width="20" height="12" viewBox="0 0 20 14" fill="#4286F5"/>View details</CustomLink>

                <SlideSwitcher onSlideChange={this.handleSlideChange} value={slide}/>

                <CustomLink color={'animated'} className={classes.explore}>Explore more offers</CustomLink>
            </section>
        );

    }

}