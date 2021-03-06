export const styles = theme => ({
    tabNavigation:{
        marginTop: 30,
        backgroundColor: '#fff',
        boxShadow: '0px 0px 15px rgba(5, 7, 19, 0.02), 0px 15px 60px rgba(40, 74, 253, 0.1), 0px 10px 15px rgba(5, 7, 19, 0.03)',
        ['@media (max-width:740px)']: {
            marginLeft: 90,
            overflow: 'visible',
            position: 'relative',
            marginRight: -20,

            '&:before': {
                content: '"Swipe to explore"',
                position: 'absolute',
                ...theme.FontTypeTwo,
                color: '#C3C8CF',
                maxWidth: 60,
                left: -90,
                top: 'calc(50% - 16px)'
            },
            '& > div > div': {
                overflowX: 'scroll'
            }
        }

    },
    tabNavigationFlex: {
        minHeight: 120,

        justifyContent: 'space-between',
        ['@media (max-width:740px)']: {
            position:' relative',
            display:' flex',
            flex:' 1 0 auto',
            transform:' none',
            willChange:' transform',
            minHeight: 100,
        },
    },

    indicator: {
        display: 'none'
    },
    root: {
        color: theme.general.GeneralTextColor,
        ...theme.FontTypeTwo,
        boxShadow: 'none',
        transition: 'box-shadow 0.3s ease-in-out',
        minWidth: 160,
        '&:hover': {
            color: theme.general.DefaultActiveColor,
            opacity: 1,
        },
        '&:focus': {
            color: theme.general.DefaultActiveColor,
        },
        position: 'relative',
        '&:before': {
            content: '""',
            width: '0',
            position: 'absolute',
            transition: 'width 0.3s ease',
            left: '50%',
            height: 3,
            background: theme.general.DefaultActiveColor,
            boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)',
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
            boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)'
        },
        '& > span:last-child': {
            display: 'none'
        },
    },
    selected: {
        // color: theme.general.DefaultActiveColor,
        boxShadow: '-15px 0px 20px rgba(49, 80, 243, 0.05), -5px 0px 10px rgba(5, 7, 19, 0.03), 15px 0px 20px rgba(49, 80, 243, 0.05), 5px 0px 10px rgba(5, 7, 19, 0.03)',
        '&:before': {
            width: '50%',
        },
        '&:after': {
            width: '50%',
        }
    }
})