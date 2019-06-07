export const styles = theme => ({
    tooltipAction: {
        fontSize: 0,
        width: 20,
        height: 20,
        padding: 0,
        fontWeight: 500,
        backgroundColor: 'transparent',
        border: `2px solid ${theme.general.DefaultActiveColor}`,
        minWidth: 'unset',
        borderRadius: '50%',
        textTransform: 'lowercase',
        transition: 'opacity 0.2s ease-out',
        opacity: 1,
        '& span:first-child': {
            width: 2,
            height: 7,
            background: '#4286F5',
            position: 'relative',
            marginTop: 3,
            '&:after': {
                content: '""',
                width: 2,
                height: 2,
                background: '#4286F5',
                position: 'absolute',
                top: -3

            }
        },

        '&:hover': {
            opacity: 0.8
        }
    },
    tooltipWrap: {
        textAlign: 'center',
    }
})