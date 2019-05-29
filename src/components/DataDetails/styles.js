export const styles = theme => ({
    dataDetailWrap: {
        padding: '0 85px',
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