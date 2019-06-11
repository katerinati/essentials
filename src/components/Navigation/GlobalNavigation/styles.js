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
            padding: '10px 20px'
        }
    },
    menuWrap : {
        minHeight : 80
    },
    indicator: {
        display: 'none'
    },
    mainTabItem: {
        color: theme.general.GeneralTextColor,
        minWidth: 150,
        ...theme.FontTypeFive,
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
            boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)'
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
            boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)'
        },
        '&:hover': {
            color: theme.general.SecondaryTextColor,
            opacity: 1,
        },
        '&:focus': {
            color: theme.general.SecondaryTextColor,
        },
        '& > span:last-child': {
            display: 'none'
        },
        ['@media (max-width:680px)']: {
            minWidth: 90
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
        ...theme.FontTypeTwo,
        color: theme.general.SecondaryTextColor
    }
});