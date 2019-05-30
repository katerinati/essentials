export const styles = theme => ({
    primary : {
        color: theme.link.color.primary,
        transition: 'text-shadow 0.2s ease',
        textTransform: 'uppercase',
        ...theme.regularText,
        '&:hover': {
            textShadow: '2px 3px 6px #4286F5',
            textDecoration: 'none',
            cursor: 'pointer'
        },
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
        ...theme.regularText,
        padding: '0 8px',
        transition: 'text-shadow 0.2s ease',
        '&:hover': {
            textShadow: '2px 3px 6px #A1A6AE',
            textDecoration: 'none',
            cursor: 'pointer'
        }
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