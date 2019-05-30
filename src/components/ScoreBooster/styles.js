export const styles = theme => ({
    booster:{
        paddingLeft: 50,
        position: 'relative',
        marginBottom: 20
    },
    boosterTitle: {
        ...theme.secondaryRegularTextDark,
        textTransform: 'uppercase'
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