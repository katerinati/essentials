export const styles = theme => ({
    cardSlider: {
      borderTop: '2px solid #E3E9F1',
      position: 'relative',
    },
    sliderTitle:{
        margin: '25px 0 10px'
    },
    hsbc: {
        backgroundColor: '#DB0011'

    },
    providerType: {
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 15
    },
    descTooltip: {
        display: 'inline-block',
        marginLeft: 5
    },
    slideItem: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'stretch',
        paddingBottom: 15,
        ['@media (max-width:760px)']: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    slideImage: {
        marginRight: 15,
        flex: 1,
        ['@media (max-width:760px)']: {
            marginRight: 0,
            marginBottom: 40
        },
        '& img':{
            ['@media (max-width:460px)']: {
                maxWidth: '100%'
            },
        }
    },
    slideInfo: {
        padding: '8px 0 25px 0',
        flex: 2
    },
    slideTitle: {
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ['@media (max-width:460px)']: {
            justifyContent: 'center',
        },
    },
    withIcon: {
        margin: '0 0 25px',
        display: 'block',
        textAlign: 'center'
    },
    cardName: {
        marginRight: 'auto',
        ...theme.highlightedText,
        ['@media (max-width:460px)']: {
            marginRight: 'unset'
        },
    },
    slideReview: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30,
        ['@media (max-width:460px)']: {
            justifyContent: 'center',
        },
    },
    reviewInfo: {
        marginLeft: 10,
        ...theme.regularText,
        color: theme.general.DefaultActiveColor,
    },
    saveItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.secondaryRegularText,
        ['@media (max-width:460px)']: {
            display: 'none'
        },
    },
    descItem: {
        padding: '0 65px 0 25px',
        borderRight: '2px solid #E4E6EE',
        ['@media (max-width:900px)']: {
            padding: '0 10px'
        },
        ['@media (max-width:460px)']: {
            width: '33.333%'
        },
        '&:first-child': {
            paddingLeft: 0
        },
        '&:last-child': {
            paddingRight: 0,
            borderRight: 0
        }
    },
    slideDescWrap: {
        display: 'flex',
        justifyContent: 'stretch',
    },
    descInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 5,
        '&:last-child': {
            marginBottom: 0
        },
        ...theme.secondaryRegularText
    },
    highlightedText: {
        ...theme.highlightedText,
        ['@media (max-width:760px)']: {
            fontSize: 13
        },
    },
    explore: {
        display: 'block',
        textAlign: 'center',
        marginBottom: 40,
        ['@media (max-width:600px)']: {
            marginBottom: 30,
            color: '#C3C8CF'
        }
    }
})