import affordabilityFactorImg from '../../resources/images/affordability.png';

export const styles = theme => ({
    factorStep: {
        backgroundImage: `url(${affordabilityFactorImg})`,
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        ['@media (max-width:560px)']: {
            backgroundSize: '100%'
        },
        '& h6': {
            marginTop: -20
        }
    },
    factorLink: {
        justifyContent: 'center',
        padding: '50px 0 105px 0'
    }
})