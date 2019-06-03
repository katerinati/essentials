export const styles = theme => ({
    container : theme.container,
    footer : {
        backgroundColor : '#FDFDFF',
        padding: '0 20px'
    },
    footerWrap : {
        padding: '22px 0',
        borderTop : '2px solid #E4E6EE',
        display: 'flex',
        alignItems: 'stretch',
        textAlign: 'left',
        ['@media (max-width:680px)']: {
            flexDirection: 'column'
        }
    },
    footerInfo: {
        flex: '0 0 50%',
        maxWidth: 480,
        marginLeft: 'auto',
        lineHeight: 1.2,
        ['@media (max-width:680px)']: {
            order: 1,
            flex: '0 0 100%',
        }
    },
    bottomNavigation: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: '0 0 33%',
        '& a': {
            padding: 0,
            display: 'block',
            width: '50%',
            float: 'left'
        },
        '& img': {
            marginTop: 'auto'
        },
        ['@media (max-width:1024px)']: {
            flex: '0 0 50%',
        },
        ['@media (max-width:680px)']: {
            order: 2,
            flex: '0 0 100%',
            marginTop: 30,
            '& nav': {
                flexWrap: 'wrap',
                width: '100%',
                display: 'flex',
                textAlign: 'left'
            },
            '& a:nth-child(odd)': {
                flex: '0 0 35%',
                marginRight: 40
            },
            '& a:nth-child(even)': {
                flex: '0 0 calc(65% - 40px)',
            }
        },
        ['@media (max-width:460px)']: {
            '& a:nth-child(odd)': {
                flex: '0 0 50%',
            },
            '& a:nth-child(even)': {
                flex: '0 0 calc(50% - 40px)',
            }
        }

    },
    footerLogo: {
        ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        }
    },
});