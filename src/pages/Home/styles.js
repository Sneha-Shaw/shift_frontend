
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        // height: "100vh",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    main: {
        width: "100%",
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        padding: "2rem 0",
    },
    welcome: {
        width: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&>h1": {
            color: "#06283D",
            fontSize: "2.4rem",
            fontWeight: "bold",
        },
        "&>button": {
            background: "#06283D",
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: "bold",
            padding: ".5rem 1rem",
            // borderRadius: "2rem",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            "&:hover": {
                background: "#06283D",
                color: "#fff",
            },
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            flexDirection: "column"
        }
    },
    overview: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "2rem",
        "&>div": {
            width: "20%",
            height: "8rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            padding: "1rem",
            background: "#fff",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            borderRadius: "1rem",
            '&>span': {
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#06283D",
                marginBottom: "1rem"
            },
            '&>p': {
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#06283D",
            },
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            "&>div": {
                width: "100%",
                height: "fit-content",
                marginTop: "1rem",
            }
        }
    },
    recent: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",

    },
    card: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "#fff",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
        borderRadius: "1rem",
        '&>div': {
            width: "90%",
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            '&>h3': {
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#06283D",
            },
            '&>button': {
                // background: "#06283D",
                color: "#06283D",
                fontSize: "1.4rem",
                fontWeight: "bold",
                // padding: ".5rem 1rem",
                // borderRadius: "2rem",
                // boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                // "&:hover": {
                //     background: "#06283D",
                //     color: "#fff",
                // },
            }
        }
    },
    cardBody: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto"
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        border: ".5px solid #000",
        overflowX: "auto",
        margin: "2rem 0",
        background: "#fff",
        '& thead': {
            width: "100%",
            '& tr': {
                width: "100%",
                '& th': {
                    // width: "100%",
                }
            }
        },
        '& tbody': {
            width: "100%",
            '& tr': {
                width: "100%",
                '& td': {
                    // width: "30%",
                }
            }
        },
        '&>thead>tr>th': {
            background: "#000",
            color: "#fff",
            padding: "1rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
            border: ".5px solid #000",
            [theme.breakpoints.down("sm")]: {
                fontSize: "1rem"
            }
        },
        '&>tbody>tr>td': {
            padding: "1rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
            border: ".5px solid",
            '&>button': {
                width: "100%",
                height: "3rem",
                marginBottom: "0.5rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1rem"
            }
        },

    },
    title:{
        textAlign:"center"
    }
}))