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
        ['@media (max-width:460px)']: {
            marginTop: 15,
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
                maxWidth: 205
            },
        }
    },
    slideInfo: {
        padding: '8px 0 25px 0',
        flex: 2,
        ['@media (max-width:460px)']: {
            width: '100%'
        },
    },
    slideTitle: {
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ['@media (max-width:460px)']: {
            justifyContent: 'center',
            marginBottom: 20
        },
    },
    withIcon: {
        margin: '0 0 25px',
        display: 'block',
        textAlign: 'center',
        ...theme.FontTypeTwo,
        '& svg': {
            marginRight: 10
        }
    },
    cardName: {
        marginRight: 'auto',
        ...theme.FontTypeNine,
        color: theme.general.SecondaryTextColor,
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
            flexDirection: 'column'
        },
    },
    reviewInfo: {
        marginLeft: 10,
        ...theme.FontTypeTwo,
        color: theme.general.DefaultActiveColor,
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.general.HoverActiveColor,
            cursor: 'pointer'
        },
        ['@media (max-width:460px)']: {
            margin: '5px 0 0'
        },
    },
    saveItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.FontTypeTwo,
        color: theme.general.PrimaryTextColor,
        transition: 'color 0.2s ease',
        '&:hover, &:focus, &:active' : {
            color: 'transparent',
            cursor: 'pointer'
        },
        '& svg': {
            transition: 'all 0.2s ease',
            marginLeft: 5,
            backgroundColor: 'transparent',
            borderRadius: '50%'
        },
        '&:focus svg, &:active svg, &:hover svg': {
            fill: theme.general.DefaultActiveColor,
            backgroundColor: theme.general.SvgFocusColor
        },
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
            width: '33.333%',
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
        ...theme.FontTypeTwo,
        color: theme.general.PrimaryTextColor
    },
    highlightedText: {
        ...theme.FontTypeSix,
        color: theme.general.SecondaryTextColor,
        ['@media (max-width:760px)']: {
            fontSize: 13
        },
    },
    explore: {
        display: 'block',
        textAlign: 'center',
        marginBottom: 40,
        ...theme.FontTypeTwo,
        ['@media (max-width:600px)']: {
            marginBottom: 30,
            color: theme.general.GeneralTextColor
        }
    }
})