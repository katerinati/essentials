export const styles = theme =>({
    pageNavigation: {
        minHeight: 75,
        borderBottom: '1px solid #E4E6EE',
        ['@media (max-width:740px)']: {
            overflowX: 'scroll'
        },
    },
    indicator: {
        backgroundColor: theme.general.DefaultActiveColor,
        boxShadow: '0px -1px 10px rgba(66, 134, 245, 0.3)',
        height: 2
    },
    root: {
        color: '#C3C8CF',
        margin: '0 12px',
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
    },
    tabLabel: {
        '& > span': {
            padding: 0
        },
        fontSize: 13
    },
    selected: {
        color: theme.general.TextPrimaryColor
    }
});