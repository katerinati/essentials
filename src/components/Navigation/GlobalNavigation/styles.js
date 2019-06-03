export const styles = theme => ({
    tabNavigation : {
        margin: '0 auto',
        flexGrow: 1,
        maxWidth: '1280px',
        display: 'flex',
        boxShadow: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        ['@media (max-width:600px)']: {
            padding: 20
        }
    },
    menuWrap : {
        minHeight : 80
    },
    indicator: {
        display: 'none'
    },
    mainTabItem: {
        color: '#C3C8CF',
        minWidth: 150,
        ...theme.regularText,
        position: 'relative',
        '&:before': {
            content: '""',
            width: '0',
            position: 'absolute',
            transition: 'width 0.3s ease',
            left: '50%',
            height: 3,
            background: theme.general.DefaultActiveColor,
            bottom: 0,
        },
        '&:after': {
            content: '""',
            width: '0',
            position: 'absolute',
            transition: 'width 0.3s ease',
            right: '50%',
            height: 3,
            background: theme.general.DefaultActiveColor,
            bottom: 0,
        },
        '&:hover': {
            color: theme.general.TextPrimaryColor,
            opacity: 1,
        },
        '&:focus': {
            color: theme.general.TextPrimaryColor,
        },
        '& > span:last-child': {
            display: 'none'
        }
    },
    selected: {
        '&:before': {
            width: '50%',
        },
        '&:after': {
            width: '50%',
        }
    },
    mobileMenuWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'inherit',
        width: 'calc( 100% - 55px )'
    },
    desktopNav:{
        flex: '0 0 70%',
        display: 'flex',
        justifyContent: 'inherit',
        paddingLeft: 20,
        ['@media (max-width:980px)']: {
            flex: '0 0 calc( 100% - 55px )',
        }
    },
    siteLogo:{
        flex: '0 0 30%',
        ['@media (max-width:980px)']: {
            flex: '0 0 55px',
        }
    },
    currentPage: {
        ...theme.primaryRegularText
    }
});