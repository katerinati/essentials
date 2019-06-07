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
        ...theme.FontTypeNine,
        color: theme.general.SecondaryTextColor,
        margin: 0
    },
    valueItem: {
        marginLeft: 'auto',
        ...theme.FontTypeThree,
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
        color: theme.general.PrimaryTextColor,
        ...theme.FontTypeFour
    },
    balanceAmount: {
        display: 'block',
        ...theme.FontTypeNine,
        color: theme.general.SecondaryTextColor
    },
    limitTitle: {
        display: 'block',
        marginBottom: 10,
        ...theme.FontTypeFour,
        color: theme.general.PrimaryTextColor,

    },
    limitAmount: {
        display: 'block',
        ...theme.FontTypeNine,
        color: theme.general.SecondaryTextColor
    },
    infoWrap: {
        maxWidth: 120,
        width: '100%'
    }
})