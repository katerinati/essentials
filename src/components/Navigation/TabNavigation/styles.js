export const styles = theme => ({
    tabNavigation:{
        marginTop: 30,
        backgroundColor: '#fff',
        boxShadow: ' 0px 15px 60px rgba(40, 74, 253, 0.1), 0px 10px 15px rgba(5, 7, 19, 0.03)',
        ['@media (max-width:740px)']: {
            marginLeft: 90,
            overflow: 'visible',
            position: 'relative',
            '&:before': {
                content: '"Swipe to explore"',
                position: 'absolute',
                ...theme.regularText,
                color: '#C3C8CF',
                maxWidth: 60,
                left: -90,
                top: 'calc(50% - 16px)'
            }
        }

    },
    tabNavigationFlex: {
        minHeight: 120,

        justifyContent: 'space-between',
        ['@media (max-width:740px)']: {
            overflowX: 'scroll',
            minHeight: 100,
        },
    },
    indicator: {
        backgroundColor: theme.general.DefaultActiveColor,
        height: 3,
        boxShadow: '0px -1px 10px rgba(66, 134, 245, 0.3)'
    },
    root: {
        color: '#C3C8CF',
        fontSize: 13,
        '&:hover': {
            color: theme.general.DefaultActiveColor,
            opacity: 1,
        },
        '&:focus': {
            color: theme.general.DefaultActiveColor,
        },
    },
    selected: {
        color: theme.general.DefaultActiveColor,
        boxShadow: '0px -1px 10px rgba(66, 134, 245, 0.3)'
    }
})