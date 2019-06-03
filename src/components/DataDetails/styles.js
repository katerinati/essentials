export const styles = theme => ({
    dataDetailWrap: {
        margin: '0 45px',
        padding: '0 85px',
        boxShadow: '0px 15px 60px rgba(40, 74, 253, 0.1), 0px 10px 15px rgba(5, 7, 19, 0.02)',
        ['@media (max-width:640px)']: {
            padding: '0 40px'
        },
    },
    detailItem:{
        '&:last-child' : {
            borderBottom: 0
        }
    }
})