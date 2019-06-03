export const styles = theme => ({
    cardChartInfo: {
        color: theme.general.TextPrimaryColor,
        fontSize: 18,
        lineHeight: '24px',
        marginBottom: 10,
        fontWeight: 500

    },
    cardChartDesc: {
        color: theme.general.TextSecondaryColor,
    },
    pieDesc: {
        maxWidth: 290,
        display: 'block',
        margin: '35px auto 0'
    },
    PieChart: {
        marginTop: 30,
        '& > svg': {
            display: 'block',
            margin: '0 auto'
        }

    }

});