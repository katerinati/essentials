export const styles = theme => ({
    userAccountSetting : {
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },
    accountNav: {
        display: 'flex',
        alignItems: 'center',
        textTransform : 'uppercase',
        color: theme.general.GeneralTextColor,
        textDecoration: 'none',
        ...theme.FontTypeThree,
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.general.HoverActiveColor,
        }
    },
    userMenu: {
        position: 'absolute',
        top: 90,
        right: 0,
        zIndex: 3,
        maxWidth: 160,
        boxShadow: 'none'
    },
    userMenuLink: {
        ...theme.FontTypeNine,
        color: theme.general.SecondaryTextColor,
        padding: '27px 24px',
        opacity: 1,
        display: 'block',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        transition: 'background-color 0.2s ease',
        '&:hover' : {
            backgroundColor: `rgba(118,167,247, 0.03)`,
            cursor: 'pointer'
        }
    },
    logOut: {
        color: theme.general.VeryPoorColor
    },
    userAvatar: {
      marginLeft: 15
    },
    arrow: {
        fontSize: 18,
        color: theme.general.GeneralTextColor,
        fontWeight: theme.general.RegularFontWeight,
        marginLeft: 5
    }
});