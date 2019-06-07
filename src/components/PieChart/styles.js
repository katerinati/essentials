export const styles = theme => ({
    cardChartInfo: {
        color: theme.general.SecondaryTextColor,
        ...theme.FontTypeSix,
        marginBottom: 10

    },
    cardChartDesc: {
        color: theme.general.PrimaryTextColor,
        ...theme.FontTypeOne
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