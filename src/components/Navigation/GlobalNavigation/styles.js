export const styles = theme => ({
    tabNavigation : {
        margin: '0 auto',
        flexGrow: 1,
        maxWidth: '1220px',
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
        boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)',
        backgroundColor: theme.general.DefaultActiveColor,
        height: 3
    },
    mainTabItem: {
        color: '#C3C8CF',
        '&:hover': {
            color: theme.general.TextPrimaryColor,
            opacity: 1,
        },
        '&:focus': {
            color: theme.general.TextPrimaryColor,
        },
    },
    selected: {
        color: theme.general.TextPrimaryColor
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
        ['@media (max-width:600px)']: {
            flex: '0 0 calc( 100% - 55px )',
        }
    },
    siteLogo:{
        flex: '0 0 30%',
        ['@media (max-width:600px)']: {
            flex: '0 0 55px',
        }
    },
    currentPage: {
        ...theme.primaryRegularText
    }
});