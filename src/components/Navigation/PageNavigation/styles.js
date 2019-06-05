export const styles = theme =>({
    pageNavigation: {
        minHeight: 75,
        borderBottom: '1px solid #E4E6EE',
        ['@media (max-width:740px)']: {
            overflowX: 'scroll'
        },
    },
    indicator: {
        // backgroundColor: theme.general.DefaultActiveColor,
        // boxShadow: '0px -1px 10px rgba(66, 134, 245, 0.3)',
        // height: 2,
        display: 'none'
    },
    root: {
        color: '#C3C8CF',
        margin: '0 12px',
        overflow: 'visible',
        '&:first-child': {
            marginLeft: 0
        },
        minWidth: 'unset',
        '&:hover': {
            color: theme.general.TextPrimaryColor,
            opacity: 1,
        },
        '&:focus': {
            color: theme.general.TextPrimaryColor,
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
            bottom: -2,
            boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)'
        },
        '&:after': {
            content: '""',
            width: '0',
            position: 'absolute',
            transition: 'width 0.3s ease',
            right: '50%',
            height: 2,
            background: theme.general.DefaultActiveColor,
            bottom: -2,
            boxShadow: '0px -1px 5px rgba(66, 134, 245, 0.3)'
        },
        '& > span:last-child': {
            display: 'none'
        }
    },
    wrapHandle: {
      '& > div > div': {
          overflow: 'visible'
      }
    },
    tabLabel: {
        '& > span': {
            padding: 0
        },
        fontSize: 13
    },
    selected: {
        '&:before': {
            width: '50%',
        },
        '&:after': {
            width: '50%',
        }
    },
    qweqwe: {

    }
});