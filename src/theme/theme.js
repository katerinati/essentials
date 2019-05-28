import {createMuiTheme} from '@material-ui/core/styles';

const HeeboFont = "Heebo";
const TextPrimaryColor = '#474C58';
const TextSecondaryColor = '#A1A6AE';
const SiteBackgroundColor = '#FDFDFF';
const DefaultActiveColor = '#4286F5';
const VeryPoorColor = '#F15038';
const PoorColor = '#F97642';
const FairColor = '#FEB904';
const GoodColor = '#45B376';
const ExcellentColor = '#45B376';

const RegularFontWeight = 500;
const MediumFontWeight = 400;


export const theme = createMuiTheme({

    general: {
        HeeboFont : "Heebo",
        TextPrimaryColor : '#474C58',
        TextSecondaryColor : '#A1A6AE',
        SiteBackgroundColor : '#FDFDFF',
        DefaultActiveColor : '#4286F5',
        VeryPoorColor : '#F15038',
        PoorColor : '#F97642',
        FairColor : '#FEB904',
        GoodColor : '#45B376',
        ExcellentColor : '#45B376',
        RegularFontWeight : 500,
        MediumFontWeight : 400
    },

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
            primary: TextPrimaryColor,
            secondary: TextSecondaryColor
        },
    },

    link: {
        color: {
            primary: DefaultActiveColor,
            secondary: TextPrimaryColor
        }
    },

    tabs: {
        indicator : {
            backgroundColor: DefaultActiveColor
        }
    },

    container: {
        maxWidth: 990,
        margin: '0 auto'
    },

    primaryRegularText: {
        fontWeight: RegularFontWeight,
        fontFamily: HeeboFont,
        color: TextPrimaryColor,
        fontSize: 15,
        lineHeight: 1.3,
    },

    secondaryRegularText: {
        fontWeight: RegularFontWeight,
        fontFamily: HeeboFont,
        color: TextSecondaryColor,
        fontSize: 13,
    },

    regularText : {
        fontSize: 13,
        fontWeight: RegularFontWeight,
        fontFamily: HeeboFont,
    },

    highlightedText: {
        color: TextPrimaryColor,
        fontSize: 18,
        fontFamily: HeeboFont,
        fontWeight: RegularFontWeight,
        lineHeight: 1.3
    }

});
