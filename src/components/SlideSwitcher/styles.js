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
        minWidth: 41,
        backgroundRepeat: 'no-repeat',
        marginRight: 15,
        // boxShadow: '0px 0px 15px rgba(5, 7, 19, 0.02)',
        borderRadius: 2,
        // opacity: 0.2,
        // transition: 'opacity 0.1s ease-in',
        '&:last-child': {
            marginRight: 0
        },
        ['@media (max-width:600px)']: {
            opacity: 1,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#C3C8CF',
            minWidth: 'unset',
            minHeight: 'unset',
            backgroundImage: 'none!important',
            marginRight: 6
        }
    },
    selected: {
        opacity: 1,
        ['@media (max-width:600px)']: {
            backgroundColor: theme.general.DefaultActiveColor,
        }
    },
    indicator: {
        backgroundColor: theme.general.DefaultActiveColor,
        height: 4,
        width: 12,
        ['@media (max-width:600px)']: {
            display: 'none'
        }
    },
    sliderSwitcherWrap: {
        ['@media (max-width:600px)']: {
            position: 'absolute',
            top: 'calc(50% + 20px)',
            left: 'calc( 50% - 16px )'
        },
        ['@media (max-width:460px)']: {
            top: 'calc(50% - 20px)',
        }
    }
});