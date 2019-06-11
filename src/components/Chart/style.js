export const styles = theme => ({
    LineChart: {
        fontFamily: 'Heebo',
        fontSize: 13,
        '& .recharts-tooltip-cursor': {
            display: 'none!important'
        },
        '& .recharts-dot': {
            fill: '#fff!important',
            stroke: '#4286F5!important',
            strokeWidth: '3!important'
        },
        '& .recharts-text': {
            fill: '#C3C8CF'
        }
    },
    chartWrap: {
        ['@media (max-width:1024px)']: {
            overflowX: 'scroll',
        },
        ['@media (max-width:375px)']: {
            overflowX: 'hidden',
        },
    },
    lineChart: {
        '& > svg': {
            ['@media (max-width:640px)']: {
                maxWidth: '100%',
                width: '100%!important'
            }
        }
    }

});