export const styles = theme =>({
    singleFactorWrap:{
        padding: '32px 15px',
        maxWidth: 500,
        display: 'block',
        margin: '0 auto'
    },
    singleFactorText:{
        ...theme.FontTypeEight,
        color: theme.general.PrimaryTextColor,
        paddingBottom: 25,
        borderBottom: '2px solid #E4E6EE'
    },
    singleFactorDesc:{
        marginTop: 36,
        display: 'flex',
        flexWrap: 'wrap'
    },
    factorNav: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40,
        width: '100%'
    },
    factorActionBtn: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    btn: {
        ...theme.buttonMedium,
        fontSize: 13
    },
    link: {
        ...theme.FontTypeFour,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10
    },
    singleFactorSubtitle: {
        ...theme.FontTypeNine,
        color: theme.general.SecondaryTextColor,
        marginBottom: 22
    },
    singleFactorInfo: {
        ...theme.FontTypeEight,
        color: theme.general.PrimaryTextColor,
        marginBottom: 28
    },
    singleFactorReport: {
        paddingLeft: 10,
        borderLeft : '4px solid #E4E6EE',
        marginBottom: 38
    },
    reportBalance: {
        ...theme.FontTypeFour,
        color: theme.general.PrimaryTextColor
    },
    reportTitle: {
        ...theme.FontTypeFour,
        color: theme.general.SecondaryTextColor,
        textTransform: 'uppercase',
        marginBottom: 2
    },
    factorBooster: {

    },
    factorTypography: {
        ['@media (max-width:640px)']: {
            marginLeft: 0
        }
    },
    factorActions: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    stepNav: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
        '& a:first-child': {
            paddingLeft: 0
        }
    },
    factorSlideNav: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
        marginLeft: 'auto',
    },
    slideItem: {
        width: 8,
        height: 8,
        backgroundColor: '#C3C8CF',
        marginRight: 12,
        borderRadius: '50%',
        display: 'inline-block',
        '&:last-child': {
            marginRight: 0
        },
    },
    activeItem: {
        backgroundColor: theme.general.DefaultActiveColor
    }



})