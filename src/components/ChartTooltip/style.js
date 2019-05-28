export const styles = theme => ({
    chartNotification: {
        backgroundColor: theme.general.DefaultActiveColor,
        color: '#ffffff',
        fontSize: 13,
        fontWeight: theme.general.RegularFontWeight,
        padding: '7px 0',
        position: 'relative',
        width: 82,
    },
    chartTooltip: {
        position: 'absolute',
        bottom: 16
    },
    circle: {
        width: 12,
        height: 12,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 'calc(50% - 6px)',
        bottom: '-18px',
        border: '4px solid',
        borderColor: theme.general.DefaultActiveColor,
        borderRadius: '50%'
    },
    trunk: {
        width: 2,
        height: 6,
        backgroundColor: theme.general.DefaultActiveColor,
        position: 'absolute',
        left: 'calc(50% - 1px)',
        bottom: '-6px'
    }

});