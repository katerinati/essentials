export const styles = theme => ({
    detailsWrap: {
        textAlign: 'center',
        marginBottom: 28,
        boxShadow: '0px 0px 15px rgba(5, 7, 19, 0.02)',
        borderRadius: 6,
        '&:last-child' : {
            marginBottom: 0
        },
        ['@media (max-width:640px)']: {
            padding: '20px 30px'
        }
    },
    tabWrap: {
        padding: '25px 50px 60px 50px'
    }
})