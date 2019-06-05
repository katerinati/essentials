export const styles = theme => ({
    dataDetailWrap: {
        margin: '0 45px',
        padding: '0 85px',
        boxShadow: '0px 0px 15px rgba(5, 7, 19, 0.02)',
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            boxShadow: '0px 15px 60px rgba(40, 74, 253, 0.1), 0px 10px 15px rgba(5, 7, 19, 0.03)',
            display: 'block',
            height: 58,
            left: '12%',
            width: '74%',
            zIndex: -1
        },
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