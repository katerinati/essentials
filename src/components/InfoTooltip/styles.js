export const styles = theme => ({
    tooltipAction: {
        fontSize: 12,
        lineHeight: 1,
        color: theme.general.DefaultActiveColor,
        width: 20,
        height: 20,
        padding: 0,
        fontWeight: 500,
        backgroundColor: 'transparent',
        border: `2px solid ${theme.general.DefaultActiveColor}`,
        minWidth: 'unset',
        borderRadius: '50%',
        textTransform: 'lowercase',
        transition: 'box-shadow 0.2s ease-out',
        '&:hover': {
            backgroundColor: 'transparent',
            boxShadow: `1px 1px 6px  ${theme.general.DefaultActiveColor}`
        }
    },
    tooltipWrap: {
        textAlign: 'center',
    }
})