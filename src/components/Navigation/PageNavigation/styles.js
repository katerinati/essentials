export const styles = theme =>({
    pageMenuWrap: {
        ['@media (max-width:460px)']: {
            marginRight: -20
        },
    },
    pageNavigation: {
        minHeight: 75,
        borderBottom: '1px solid #E4E6EE',
        ['@media (max-width:740px)']: {
            // overflowX: 'scroll'
            borderBottom: 0,
            flex: '1 0 auto',
            display: 'flex',
            position: 'relative',
            transform: 'none',
            willChange: 'transform',
            '& > div > div': {
                overflowX: 'scroll'
            }
        },
    },
    indicator: {
        display: 'none'
    },
    root: {
        color: '#C3C8CF',
        padding: '0 12px',
        overflow: 'visible',
        '&:first-child': {
            padding: 0,
            '&$selected': {
                '&:before, &:after': {
                    width: '50%',
                }
            },
        },
        ['@media (max-width:740px)']: {
            borderBottom: '2px solid #E4E6EE',
        },
        minWidth: 'unset',
        '&:hover': {
            color: theme.general.SecondaryTextColor,
            opacity: 1,
        },
        '&:focus': {
            color: theme.general.SecondaryTextColor,
        },
        position: 'relative',
        '&:before': {
            content: '""',
            width: '0',
            position: 'absolute',
            transition: 'width 0.3s ease',
            left: '50%',
            height: 2,
            background: theme.general.DefaultActiveColor,
            bottom: -1,
            boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)',
        },
        '&:after': {
            content: '""',
            width: '0',
            position: 'absolute',
            transition: 'width 0.3s ease',
            right: '50%',
            height: 2,
            background: theme.general.DefaultActiveColor,
            bottom: -1,
            boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)',
        },
        '& > span:last-child': {
            display: 'none'
        },

    },
    // wrapHandle: {
    //   '& > div > div': {
    //       overflow: 'visible'
    //   }
    // },
    tabLabel: {
        '& > span': {
            padding: 0
        },
        fontSize: 13
    },
    selected: {
        '&:before, &:after': {
            width: 'calc(50% - 12px)',
        },
    }
});