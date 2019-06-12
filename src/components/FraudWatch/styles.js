export const styles = theme => ({
    fraudCheck: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',

        '& svg': {
            transition: 'all 0.2s ease',
            marginLeft: 5,
            backgroundColor: '#E4E6EE',
            borderRadius: '50%'
        },
        '&:focus svg, &:active svg, &:hover svg': {
            fill: theme.general.DefaultActiveColor,
            backgroundColor: theme.general.SvgFocusColor
        },
        '&:hover a': {
            color: theme.general.SecondaryTextColor,
        },
        ['@media (max-width:740px)']: {
            borderBottom: '1px solid #E4E6EE',
        }
    },
    check: {
        ...theme.FontTypeTwo,
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: theme.general.GeneralTextColor,
        marginRight: 10,
        transition: 'color 0.2s ease',
    }

})