export const styles = theme => ({
    detailItem: {
        padding: '30px 0',
        borderBottom: '2px solid #E4E6EE'
    },
    itemTitle: {
        marginBottom: 25,
        display: 'flex',
        alignItems: 'center'
    },
    itemIcon: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(118,167,247, 0.15)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: 10
    },
    cardName: {
        ...theme.primaryRegularText,
        margin: 0
    },
    valueItem: {
        marginLeft: 'auto',
        ...theme.regularText,
    },
    itemValueVeryPoor: {
        color: theme.general.VeryPoorColor,
    },
    itemValuePoor: {
        color: theme.general.PoorColor,
    },
    itemValueFair: {
        color: theme.general.FairColor,
    },
    itemValueGood: {
        color: theme.general.GoodColor,
    },
    itemValueExcellent: {
        color: theme.general.ExcellentColor,
    },
    detailItemDesc:{
        display: 'flex',
        marginBottom: 20
    },
    balanceTitle: {
        display: 'block',
        marginBottom: 10,
        ...theme.secondaryRegularText
    },
    balanceAmount: {
        display: 'block',
        ...theme.primaryRegularText
    },
    limitTitle: {
        display: 'block',
        marginBottom: 10,
        ...theme.secondaryRegularText

    },
    limitAmount: {
        display: 'block',
        ...theme.primaryRegularText
    },
    infoWrap: {
        maxWidth: 120,
        width: '100%'
    }
})