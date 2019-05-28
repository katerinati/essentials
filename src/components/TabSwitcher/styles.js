export const styles = theme => ({
    tabSwitcher: {
        boxShadow: 'none',
        marginBottom: 40,
        backgroundColor: 'transparent'
    },
    tab: {
        minWidth: 100,
        backgroundColor: '#E4E6EE',
        ...theme.secondaryRegularText,
        '&:first-child': {
            borderRadius: '48px 0px 0px 48px',
            marginRight: 5
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
    }
});