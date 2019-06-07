export const styles = theme => ({
    userAccountSetting : {
        display: 'flex',
        alignItems: 'center'
    },
    userAccountGreetings : {
        marginRight : 15,
        textTransform : 'uppercase',
        color: theme.general.GeneralTextColor,
        textDecoration: 'none',
        ...theme.FontTypeThree,
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.general.HoverActiveColor,
        }
    },
    arrow: {
        fontSize: 18,
        color: theme.general.GeneralTextColor,
        fontWeight: theme.general.RegularFontWeight,
        marginLeft: 5
    }
});