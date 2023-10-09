import { createUseStyles } from 'react-jss'
export const RehearsalStyle = createUseStyles({



    card: {
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s',
        width: '85%',
        margin: '10px',
        padding: '20px',
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: "column",
        gap: 30,
        fontSize: "1.3rem",
        borderLeft: "5px solid red"
        // '&:hover': {
        //     transform: 'scale(1.05)',
        // },
    },
    actionsCard: {
        width: "100%",
        display: "flex",
        justifyContent: "end"
    },
    content: {
        display: "flex",
        gap: 30
    },
    itemContent: {
        display: "flex",
        flexDirection: "column",
        gap: 10
    },
    itemContentHeader: {
        display: "flex",
        justifyContent: "start",
        gap: 10,
        alignItems: "center", 
        textTransform:"uppercase"
    }, 
    assisted: {
        color: "green"
    }, 
    notAssisted: {
        color: "red"
    }, data : {
        textAlign:"center"
    }
})