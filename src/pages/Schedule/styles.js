import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "94vh",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },

    main: {
        width: "55%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem auto",
        padding: "1rem",
        '& h1': {
            fontSize: "3.5rem",
            fontWeight: "bold",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            margin: "0 auto",
            padding: "1rem 0",
        }
    },
    schedule:{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem auto",
        padding: "1rem",
       
    },
    schedule_Header:{
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "2rem auto",
        padding: "1rem",
        '&>div':{
            width: "40%",
            '&>button':{
                width: "80%",
                fontSize: "1.2rem",
                fontWeight: "bold",
                background: "#06283D",
                '&:hover': {
                    background: "rgba(6, 40, 61,0.9)"
                }
            }
        },
        '& select': {
            width: "50%",
            height: "fit-content",
            padding: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "0.5rem",
            outline: "none",
            backgroundColor: "#f2f2f2",
            [theme.breakpoints.down("sm")]: {
                width: "100%",
            }
        },
        '& label': {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginRight: "1rem",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        }
    },
    schedule_body:{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem auto",
        padding: "1rem",
        '& table': {
            width: "100%",
            height: "fit-content",
            borderCollapse: "collapse",
            '& thead': {
                width: "100%",
                height: "fit-content",
                '& th': {
                    width: "33.33%",
                    height: "fit-content",
                    padding: "1rem",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    border: "1px solid #06283D",
                    background:"#06283D",
                    color:"#fff"
                }
            },
            '& tbody': {
                width: "100%",
                height: "fit-content",
                '& tr': {
                    width: "100%",
                    height: "fit-content",
                    '& td': {
                        width: "33.33%",
                        color:"#06283D",
                        height: "fit-content",
                        padding: "1rem",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        textAlign: "center",
                        border: "1px solid #06283D",
                    }
                }
            }
        },
    }
}))