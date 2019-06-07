export const styles = theme => ({
    booster:{
        paddingLeft: 45,
        position: 'relative',
        marginBottom: 30,
        ['@media (max-width:460px)']: {
            marginBottom: 18
        }
    },
    boosterTitle: {
        ...theme.FontTypeFive,
        color: theme.general.SecondaryTextColor,
        textTransform: 'uppercase',
        marginBottom: 2
    },
    boosterImg: {
        position: 'absolute',
        left: 15,
        top: 0
    },
    boosterScore: {
        ...theme.FontTypeFive,
        color: '#45B376',
        textTransform: 'uppercase'
    }

})