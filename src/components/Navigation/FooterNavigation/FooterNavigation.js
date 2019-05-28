import React, {Component} from 'react';
import CustomLink from "../../CustomLink";

export class FooterNavigation extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {links, classes} = this.props;

        return (
            <nav className={classes.footerNavigation}>
                {links.map((el, i) => (
                    <CustomLink color="custom" href={el.src} key={i}>
                        {el.title}
                    </CustomLink>
                ))}
            </nav>
        );
    }
}