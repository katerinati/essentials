export const styles = theme => ({
    primary : {
        color: theme.link.color.primary,
        transition: 'color 0.2s ease',
        textTransform: 'uppercase',
        ...theme.FontTypeFour,
        '&:hover': {
            color: theme.general.HoverActiveColor,
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
        ...theme.FontTypeFour,
        padding: '0 8px',
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.general.HoverActiveColor,
            textDecoration: 'none',
            cursor: 'pointer'
        }
    },
    animated: {
        ...theme.FontTypeFour,
        color: theme.general.DefaultActiveColor,
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.general.HoverActiveColor,
            textDecoration: 'none',
            cursor: 'pointer'
        },
        textDecoration: 'none',
        textTransform: 'uppercase'
    }
});