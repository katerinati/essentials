export const styles = theme => ({

    ratingChartRow: {
        display: 'inline-block',
        fontSize: 0,
        textAlign: 'center',
        position: 'relative',
        marginTop: 50,
        maxWidth: 655,
        width: '100%'
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
        fontSize: 13,
        fontWeight: 500,
        textTransform: 'uppercase',
        color: '#474C58',
        display: 'block',
        textAlign: 'center',
        margin: '0 0 10px 0',
        fontFamily: theme.general.HeeboFont
    },
    chartDesc: {
        display: 'block',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#C3C8CF',
        fontFamily: theme.general.HeeboFont

    },
    factorDetails: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    link: {
        ...theme.regularText,
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        transition: 'text-shadow 0.2s ease',
        '&:hover': {
            textShadow: '2px 3px 6px #4286F5',
            textDecoration: 'none'
        }
    },
    ratingChartWrap: {
        padding: '30px 40px',
    },
    wrapper: {
        marginTop: 25,
        backgroundColor: 'rgba(228, 230, 238, 0.2)'
    },
    eqweqweqw: {

    }
});