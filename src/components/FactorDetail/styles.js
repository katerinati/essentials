export const styles = theme =>({
    singleFactorWrap:{
        padding: '32px 15px',
        maxWidth: 500,
        display: 'block',
        margin: '0 auto'
    },
    singleFactorText:{
        fontSize: 15,
        lineHeight: '20px',
        fontWeight: theme.general.MediumFontWeight,
        paddingBottom: 25,
        borderBottom: '2px solid #E4E6EE',
        color: theme.general.TextSecondaryColor
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
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10
    },
    singleFactorSubtitle: {
        ...theme.secondaryRegularTextDark,
        fontSize: 15,
        marginBottom: 22
    },
    singleFactorInfo: {
        ...theme.secondaryMediumText,
        fontSize: 15,
        marginBottom: 28
    },
    singleFactorReport: {
        paddingLeft: 10,
        borderLeft : '4px solid #E4E6EE',
        marginBottom: 38
    },
    reportBalance: {
        ...theme.secondaryRegularText
    },
    reportTitle: {
        ...theme.secondaryRegularTextDark,
        textTransform: 'uppercase',
        marginBottom: 5
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