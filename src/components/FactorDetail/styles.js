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
        borderBottom: '2px solid #E4E6EE',
        ['@media (max-width:460px)']: {
            fontSize: 13,
            paddingBottom: 15
        }
    },
    singleFactorDesc:{
        marginTop: 36,
        display: 'flex',
        flexWrap: 'wrap',
        ['@media (max-width:460px)']: {
            paddingLeft: 15,
            marginTop: 18,
        }
    },
    factorNav: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxWidth: 500,
        margin: '10px auto 0',
        padding: '0 15px 32px 15px',
        ['@media (max-width:460px)']: {
            marginTop: 25,
            justifyContent: 'center',
        }
    },
    factorActionBtn: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        ['@media (max-width:460px)']: {
            flexDirection: 'column',
        }
    },
    btn: {
        ...theme.buttonMedium,
        fontSize: 13,
        ['@media (max-width:460px)']: {
            marginBottom: 18,
            maxWidth: 200,
            fontSize: 11
        }
    },
    link: {
        ...theme.FontTypeFour,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10,

    },
    isDisabled:{
        cursor: 'no-drop',
        color: theme.general.PrimaryTextColor,
        '&:hover': {
            color: theme.general.PrimaryTextColor,
            cursor: 'no-drop',
        }
    },
    singleFactorSubtitle: {
        ...theme.FontTypeNine,
        color: theme.general.SecondaryTextColor,
        marginBottom: 22,
        ['@media (max-width:460px)']: {
            marginBottom: 17,
            ...theme.FontTypeTwo
        }
    },
    singleFactorInfo: {
        ...theme.FontTypeEight,
        color: theme.general.PrimaryTextColor,
        marginBottom: 28,
        ['@media (max-width:460px)']: {
            marginBottom: 14,
            ...theme.FontTypeOne
        }
    },
    singleFactorReport: {
        paddingLeft: 10,
        borderLeft : '4px solid #E4E6EE',
        marginBottom: 38,
        ['@media (max-width:460px)']: {
            marginBottom: 22,
        }
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
        ['@media (max-width:460px)']: {
            display: 'none'
        }
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