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
    },
    pieChartWrap: {
        maxWidth: 240,
        display: 'block',
        position: 'relative',
        margin: '0 auto',
        '& > svg': {
            display: 'block',
            margin: '0 auto',
            ['@media (max-width:460px)']: {
                maxHeight: 160
            },
        }
    },
    progressTitle: {
        ...theme.FontTypeSix,
        color: theme.general.SecondaryTextColor,
        position: 'absolute',
        top: 115,
        left: 100,
        ['@media (max-width:460px)']: {
            top: 70
        },
    }

});