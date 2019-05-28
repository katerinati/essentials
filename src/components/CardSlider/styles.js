export const styles = theme => ({
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
    slideDescription: {

    },
    slideItem: {
        display: 'flex',
        justifyContent: 'stretch',
        paddingBottom: 25
    },
    slideImage: {
        marginRight: 25,
        flex: 1
    },
    slideInfo: {
        padding: '8px 0 25px 0',
        flex: 2
    },
    slideTitle: {
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    withIcon: {
        margin: '25px 0',
        display: 'block',
        textAlign: 'center'
    },
    cardName: {
        marginRight: 'auto'
    },
    slideReview: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30
    },
    reviewInfo: {
        marginLeft: 10,
        ...theme.regularText,
        color: theme.general.DefaultActiveColor
    },
    saveItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.secondaryRegularText
    },
    descItem: {
        padding: '0 55px 0 25px',
        borderRight: '2px solid #E4E6EE',
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
        display: 'block',
        marginBottom: 5,
        '&:last-child': {
            marginBottom: 0
        },
        ...theme.secondaryRegularText
    },
    highlightedText: {
        ...theme.highlightedText
    },
    explore: {
        display: 'block',
        textAlign: 'center',
        marginBottom: 45
    }
})