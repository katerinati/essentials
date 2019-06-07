export const styles = theme => ({
    userAccountSetting : {
        display: 'flex',
        alignItems: 'center'
    },
    userAccountGreetings : {
        marginRight : 15,
        textTransform : 'uppercase',
        color: theme.general.GeneralTextColor,
        ...theme.FontTypeThree,
    },
    arrow: {
        fontSize: 18,
        color: theme.general.GeneralTextColor,
        fontWeight: theme.general.RegularFontWeight,
        marginLeft: 5
    }
});