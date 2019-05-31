export const styles = theme => ({
    detailsWrap: {
        padding: '30px 40px',
        textAlign: 'center',
        marginBottom: 20,
        boxShadow: '0 15px 15px rgba(5, 7, 19, 0.03)',
        borderRadius: 6,
        '&:last-child' : {
            marginBottom: 0
        },
        ['@media (max-width:640px)']: {
            padding: '20px 30px'
        }
    },
    tabWrap: {
        padding: '25px 10px'
    }
})