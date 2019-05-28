export const styles = theme => ({
    fraudCheck: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center'

    },
    check: {
        ...theme.regularText,
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: '#C3C8CF',
        marginRight: 10,
        transition: 'text-shadow 0.2s ease',
        '&:hover': {
            textShadow: '2px 3px 6px #C3C8CF'
        }
    }

})