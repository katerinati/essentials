export const styles = theme => ({
    fraudCheck: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center'

    },
    check: {
        ...theme.FontTypeTwo,
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: theme.general.GeneralTextColor,
        marginRight: 10,
        transition: 'text-shadow 0.2s ease',
        '&:hover': {
            textShadow: '2px 3px 6px #C3C8CF'
        }
    }

})