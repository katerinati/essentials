export const styles = theme => ({
    booster:{
        paddingLeft: 45,
        position: 'relative',
        marginBottom: 30
    },
    boosterTitle: {
        ...theme.secondaryRegularTextDark,
        textTransform: 'uppercase',
        marginBottom: 2
    },
    boosterImg: {
        position: 'absolute',
        left: 15,
        top: 0
    },
    boosterScore: {
        ...theme.secondaryRegularText,
        color: '#45B376',
        textTransform: 'uppercase'
    }

})