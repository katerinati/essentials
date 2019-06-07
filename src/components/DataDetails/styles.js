export const styles = theme => ({
    dataDetailWrap: {
        padding: '0 85px',
        boxShadow: '0px 0px 15px rgba(5, 7, 19, 0.02)',
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            boxShadow: '0px 15px 60px rgba(40, 74, 253, 0.1), 0px 10px 15px rgba(5, 7, 19, 0.03)',
            display: 'block',
            height: 105,
            left: '5.05%',
            width: '89.89%',
            zIndex: -1
        },
        ['@media (max-width:640px)']: {
            padding: '0 40px'
        },
    },
    tabWrap: {
        padding: '25px 50px 60px 50px',
        ['@media (max-width:1024px)']: {
            padding: '25px 0 60px 0',
        }
    },
    detailItem:{
        '&:last-child' : {
            borderBottom: 0
        }
    }
})