export const styles = theme => ({
    container : theme.container,
    footer : {
        backgroundColor : '#FDFDFF'
    },
    footerWrap : {
        padding: '45px 20px',
        borderTop : '2px solid #E4E6EE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'justify'
    },
    bottomNavigation: {
        marginTop: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
            '& nav': {
                flexWrap: 'wrap',
                textAlign: 'center',
                width: '100%'
            },
            '& a': {
                flex: '0 0 50%',
                padding: '5px 10px'
            }
        }

    },
    footerLogo: {
        ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        }
    },
});