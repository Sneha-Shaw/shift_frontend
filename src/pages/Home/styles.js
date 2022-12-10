
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
         }
    },
    main: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        padding: "2rem 0",
    },
    welcome: {
        width: "60%",
        display: "flex",
        flexDirection: "row",
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
        }
    },
    notifications: {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem 0",
        "&>h2": {
            color: "#06283D",
            fontSize: "2.4rem",
            fontWeight: "bold",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        }
    },
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        "&>p": {
            color: "#06283D",
            fontSize: "1.4rem",
            fontWeight: "bold",
            cursor: "pointer",
        },
    },
    notificationsList: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "&>div": {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#fff",
            padding: ".5rem 1rem",
            borderRadius: "1rem",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            margin: "2rem 0 1rem",
            "&:last-child": {
                marginBottom: 0,
            },
            "&>p": {
                color: "#06283D",
                fontSize: "1.4rem",
                fontWeight: "bold",
                margin: ".5rem",
            },
            "& h3": {
               
                color: "#06283D",
                fontSize: "1.8rem",
                fontWeight: "bold",
                margin: "1rem 0",
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        }
    },
   
}))