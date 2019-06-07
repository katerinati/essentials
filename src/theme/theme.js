import {createMuiTheme} from '@material-ui/core/styles';

const HeeboFont = "Heebo";

const GeneralTextColor = '#C3C8CF';
const PrimaryTextColor = '#A1A6AE';
const SecondaryTextColor = '#474C58';

const SiteBackgroundColor = '#FDFDFF';

const DefaultActiveColor = '#4286F5';
const HoverActiveColor = '#76A7F7';
const SvgFocusColor = '#A3CEF1';

const VeryPoorColor = '#F15038';
const PoorColor = '#F97642';
const FairColor = '#FEB904';
const GoodColor = '#45B376';
const ExcellentColor = '#45B376';

const RegularFontWeight = 500;
const NormalFontWeight = 400;


export const theme = createMuiTheme({

    /*************************
     * 0.     CONSTANTS      *
     *************************/

    general: {
        HeeboFont : HeeboFont,
        SvgFocusColor: SvgFocusColor,
        GeneralTextColor: GeneralTextColor,
        SecondaryTextColor : SecondaryTextColor,
        HoverActiveColor: HoverActiveColor,
        PrimaryTextColor : PrimaryTextColor,
        SiteBackgroundColor : SiteBackgroundColor,
        DefaultActiveColor : DefaultActiveColor,
        VeryPoorColor : VeryPoorColor,
        PoorColor : PoorColor,
        FairColor : FairColor,
        GoodColor : GoodColor,
        ExcellentColor : ExcellentColor,
        RegularFontWeight : RegularFontWeight,
        NormalFontWeight : NormalFontWeight
    },

    /*************************
    * 1.     TYPOGRAPHY      *
    *************************/


    typography: {
        useNextVariants: true,
        fontFamily: HeeboFont,
        fontSize: 13,
        lineHeight: 16,
        fontWeight: RegularFontWeight
    },

    palette: {
        background: {
            default: SiteBackgroundColor
        },
        text: {
            primary: GeneralTextColor,
            secondary: PrimaryTextColor
        },
    },

    FontTypeOne: {
        fontSize: 13,
        fontWeight: NormalFontWeight,
        lineHeight: '16px',
        fontFamily: HeeboFont
    },
    FontTypeTwo: {
        fontSize: 13,
        fontWeight: RegularFontWeight,
        lineHeight: '16px',
        fontFamily: HeeboFont
    },
    FontTypeThree: {
        fontSize: 13,
        fontWeight: RegularFontWeight,
        lineHeight: '15px',
        fontFamily: HeeboFont
    },
    FontTypeFour: {
        fontSize: 13,
        fontWeight: RegularFontWeight,
        lineHeight: '18px',
        fontFamily: HeeboFont
    },
    FontTypeFive: {
        fontSize: 13,
        fontWeight: RegularFontWeight,
        lineHeight: '20px',
        fontFamily: HeeboFont
    },
    FontTypeSix: {
        fontSize: 18,
        fontWeight: RegularFontWeight,
        lineHeight: '24px',
        fontFamily: HeeboFont
    },
    FontTypeSeven: {
        fontSize: 18,
        fontWeight: RegularFontWeight,
        lineHeight: '24px',
        fontFamily: HeeboFont,
        letterSpacing: '0.1em'
    },
    FontTypeEight: {
        fontSize: 15,
        fontWeight: NormalFontWeight,
        lineHeight: '20px',
        fontFamily: HeeboFont,
    },
    FontTypeNine: {
        fontSize: 15,
        fontWeight: RegularFontWeight,
        lineHeight: '20px',
        fontFamily: HeeboFont,
    },

    link: {
        color: {
            primary: DefaultActiveColor,
            secondary: SecondaryTextColor
        }
    },

    /*************************
     * 2.      HELPERS       *
     *************************/

    container: {
        maxWidth: 1030,
        margin: '0 auto',
        padding: '0 20px'
    },

    buttonMedium: {
        backgroundColor: DefaultActiveColor,
        boxShadow: '0px 10px 15px rgba(66, 134, 245, 0.25)',
        borderRadius: 48,
        padding: '13px 10px',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        maxWidth: 160,
        width: '100%',
        transition: 'opacity 0.2s ease-out',
        '&:hover':{
            backgroundColor: DefaultActiveColor,
            opacity: 0.8
        },
        ['@media (max-width:460px)']: {
            maxWidth: 200,
            fontSize: 11
        }

    }

});
