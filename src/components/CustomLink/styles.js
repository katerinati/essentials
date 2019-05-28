export const styles = theme => ({
    primary : {
        color: theme.link.color.primary
    },
    secondary : {
        color: theme.link.color.secondary,
        '&:hover': {
            textDecoration: 'none'
        }
    },
    custom : {
        color: '#A1A6AE',
        textTransform: 'uppercase',
        fontSize: 13,
        fontFamily: theme.typography.fontFamily,
        padding: '0 8px',
        fontWeight: 500
    },
    animated: {
        ...theme.regularText,
        color: theme.general.DefaultActiveColor,
        transition: 'text-shadow 0.2s ease',
        '&:hover': {
            textShadow: '2px 3px 6px #4286F5',
            textDecoration: 'none',
            cursor: 'pointer'
        },
        textDecoration: 'none',
        textTransform: 'uppercase'
    }
});