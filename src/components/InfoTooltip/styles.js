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
        transition: 'box-shadow 0.2s ease-out',
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
            backgroundColor: 'transparent',
            boxShadow: `1px 1px 6px  ${theme.general.DefaultActiveColor}`
        }
    },
    tooltipWrap: {
        textAlign: 'center',
    }
})