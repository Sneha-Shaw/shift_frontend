
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        // background: "#f7f7f7",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& h1": {
            color: "#06283D",
            fontSize: "2.5rem",
            fontWeight: "bold",
            margin: "2rem",
        }
    },
    notifications: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "&>div": {
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#fff",
            padding: ".5rem 1rem",
            borderRadius: "2rem",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            marginBottom: "1rem",
            [theme.breakpoints.down("sm")]: {
                width: "85%",
            },
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
       
    },
    notificationHeader:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto"

    }

}))