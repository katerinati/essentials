import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import CustomLink from "../CustomLink";
import FooterNavigation from "../Navigation/FooterNavigation";
import footerLogo from "../../resources/images/bottomLogo.png";

export class Footer extends Component{

    constructor(props){
        super(props)
    }

    render () {

        const {classes} = this.props;
        const dudUrl = 'javascript:;';


        const links = [
            { src: "/", title: 'About Us'},
            { src: "/", title: 'Blog'},
            { src: "/", title: 'Terms & Conditions'},
            { src: "/", title: 'Privacy policy'},
            { src: "/", title: 'Faq'},
            { src: "/", title: 'Contact us'}
        ];


        return (
            <footer className={classes.footer}>
                <section className={classNames(classes.footerWrapp, classes.container)}>
                    <Typography color='textSecondary'>
                        Credibble Limited is registered in England and Wales with company number 09511750. Contact us at: Plexal, 14 East Bay Lane, The Press Centre,
                        Here East, Queen Elizabeth Olympic Park, Stratford, London E15 2GW. Credibble Limited is authorised and regulated by the Financial Conduct Authority under firm registration number (FRN) 713043.
                        Authorisation can be checked on the Financial Services Register at <CustomLink href={dudUrl} color="secondary" underline="always" > www.fca.org.uk </CustomLink>. Credibble Limited is registered with the Information Commissioners Office under registration reference ICOZA149590.
                        VAT registration number 236554009. Credibble Limited is a fully authorised Credit Information Services provider and Credit Broker. We use cookies to give you the best experience.
                        By using our website you agree to our use of cookies in accordance with our <CustomLink href={dudUrl} color="secondary" underline="always" className={classes.link}> cookie policy. </CustomLink>
                    </Typography>
                    <div className={classes.bottomNavigation}>
                        <img src={footerLogo} />
                        <FooterNavigation links={links} />
                    </div>
                </section>
            </footer>
        );
    }
}
