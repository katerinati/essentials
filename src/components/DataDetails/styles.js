export const styles = theme => ({
    dataDetailWrap: {
        margin: '0 10px',
        padding: '0 85px',
        boxShadow: '0 15px 15px rgba(5, 7, 19, 0.03)',
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