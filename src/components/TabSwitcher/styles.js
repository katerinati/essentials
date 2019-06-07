export const styles = theme => ({
    tabSwitcher: {
        boxShadow: 'none',
        marginBottom: 15,
        marginTop: 7,
        backgroundColor: 'transparent'
    },
    tab: {
        minWidth: 130,
        backgroundColor: '#E4E6EE',
        ...theme.FontTypeTwo,
        color: theme.general.PrimaryTextColor,
        '&:first-child': {
            borderRadius: '48px 0px 0px 48px',
            marginRight: 4
        },
        '&:last-child': {
            borderRadius: '0px 48px 48px 0px',
        },

    },
    selected: {
        color: '#fff',
        backgroundColor: theme.general.DefaultActiveColor
    },
    indicator: {
        display: 'none'
    },
    tabWrap: {
        display: 'flex',
        justifyContent: 'center'
    },
    labelWrap: {
        '& > span': {
            padding: '0 16px'
        }
    }
});