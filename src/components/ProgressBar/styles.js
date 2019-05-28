export const styles = theme => ({
    itemProgress: {
        backgroundColor: '#E4E6EE',
        borderRadius: 20,
        height: 8,
        position: 'relative',
        marginBottom: 20

    },
    itemBarVeryPoor: {
        backgroundColor: theme.general.VeryPoorColor,
    },
    itemBarPoor: {
        backgroundColor: theme.general.PoorColor,
    },
    itemBarFair: {
        backgroundColor: theme.general.FairColor,
    },
    itemBarGood: {
        backgroundColor: theme.general.GoodColor,
    },
    itemBarExcellent: {
        backgroundColor: theme.general.ExcellentColor,
    },
    progressBarState: {
        borderRadius: 20,
        height: 8,
        position: 'absolute',
        left: 0
    }
});