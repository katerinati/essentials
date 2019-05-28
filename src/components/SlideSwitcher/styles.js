export const styles = theme => ({
    slideTabWrap: {
        display: 'flex',
        justifyContent: 'center'
    },
    sliderSwitcher: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        marginBottom: 20
    },
    slideTab: {
        minWidth: 76,
        backgroundRepeat: 'no-repeat',
        marginRight: 7,
        boxShadow: '0px 0px 15px rgba(5, 7, 19, 0.02)',
        borderRadius: 2,
        opacity: 0.2,
        transition: 'opacity 0.1s ease-in',
        '&:last-child': {
            marginRight: 0
        }
    },
    selected: {
        opacity: 1
    },
    indicator: {
        backgroundColor: theme.general.DefaultActiveColor,
        height: 3
    }
});