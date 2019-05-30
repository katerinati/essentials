export const styles = theme =>({
    singleFactorWrap:{
        backgroundColor: 'rgba(228, 230, 238, 0.2)',
        padding: '20px 15px',
        marginTop: 25
    },
    singleFactorText:{
        ...theme.secondaryRegularText,
        fontWeight: theme.general.MediumFontWeight,
        paddingBottom: 15,
        borderBottom: '2px solid #E4E6EE'
    },
    singleFactorDesc:{
        margin: '20px 0',
        display: 'flex',
        ['@media (max-width:640px)']: {
            flexWrap: 'wrap'
        }

    },
    factorNav: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 25
    },
    btn: {
        ...theme.buttonMedium,
        ...theme.smallRegularText,
        marginBottom: 20
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    singleFactorSubtitle: {
        ...theme.secondaryRegularTextDark,
        marginBottom: 15
    },
    singleFactorInfo: {
        ...theme.secondaryMediumText,
        marginBottom: 15
    },
    singleFactorReport: {
        paddingLeft: 10,
        borderLeft : '4px solid #E4E6EE'
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
        marginLeft: 30,
        ['@media (max-width:640px)']: {
            marginLeft: 0
        }
    }



})