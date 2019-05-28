export const styles = theme =>({
    pageNavigation: {
        minHeight: 75,
        borderBottom: '1px solid #E4E6EE',
    },
    indicator: {
        backgroundColor: theme.general.DefaultActiveColor,
        height: 2
    },
    root: {
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
    }
});