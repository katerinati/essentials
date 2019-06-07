export const styles = theme => ({
    nextStep: {
        ...theme.FontTypeFour,
        display: 'flex',
        alignItems: 'center',
        color: theme.general.DefaultActiveColor,
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.general.HoverActiveColor
        }
    },
    arrowItem:{
        fontSize: 18
    }
})