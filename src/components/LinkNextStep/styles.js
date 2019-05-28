export const styles = theme => ({
    nextStep: {
        ...theme.regularText,
        display: 'flex',
        alignItems: 'center',
        color: theme.general.DefaultActiveColor,
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'text-shadow 0.2s ease',
        '&:hover': {
            textShadow: '2px 3px 6px #4286F5'
        }
    },
    arrowItem:{
        fontSize: 18
    }
})