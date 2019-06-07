export const styles = theme => ({

    ratingChartRow: {
        display: 'inline-block',
        fontSize: 0,
        textAlign: 'center',
        position: 'relative',
        marginTop: 50,
        maxWidth: 655,
        width: '100%',
        ['@media (max-width:460px)']: {
            maxWidth: 300
        }
    },
    chartElement: {
        width: 'calc( 20% - 4px )',
        height: 8,
        borderRadius: 12,
        display:' inline-block',
        margin: '0 2px'
    },
    chartElementVeryPoor: {
        backgroundColor: theme.general.VeryPoorColor
    },
    chartElementPoor: {
        backgroundColor: theme.general.PoorColor
    },
    chartElementFair: {
        backgroundColor: theme.general.FairColor
    },
    chartElementGood: {
        backgroundColor: theme.general.GoodColor
    },
    chartElementExcellent: {
        backgroundColor: theme.general.ExcellentColor
    },
    chartTitle: {
        ...theme.FontTypeTwo,
        color: theme.general.SecondaryTextColor,
        textTransform: 'uppercase',
        display: 'block',
        textAlign: 'center',
        margin: '0 0 10px 0',
    },
    chartDesc: {
        display: 'block',
        textAlign: 'center',
        ...theme.FontTypeSeven,
        color: theme.general.GeneralTextColor,
        textTransform: 'uppercase'

    },
    factorDetails: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    link: {
        ...theme.FontTypeTwo,
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.general.HoverActiveColor,
            textDecoration: 'none'
        }
    },
    ratingChartWrap: {
        padding: '30px 40px',
        ['@media (max-width:1024px)']: {
            padding: '18px 22px',
        }
    },
    wrapper: {
        marginTop: 25,
        backgroundColor: 'rgba(228, 230, 238, 0.2)'
    },
});