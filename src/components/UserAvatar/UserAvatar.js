import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import UserAvatarDefaultImg from '../../resources/images/userpic-area.png';

export class UserAvatar extends Component{

    constructor(props){
        super(props)
    }

    render () {

        const { className } = this.props;

        return (
            <Avatar alt="Remy Sharp" src={UserAvatarDefaultImg} className={className} />
        );
    };
}