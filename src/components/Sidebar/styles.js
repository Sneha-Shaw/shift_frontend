
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "5%",
        height: "",
        backgroundColor: "#06283D",
        zIndex: 100,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "5%",
        },
    },
    icons:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        height: "100%",
        width: "100%",
        // marginTop: "1rem",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "row",
        },
    },

    navLink: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // height: "100%",
        width: "100%",
        textDecoration: "none",
        color: "white",
        // marginTop: "1rem",
        padding: "1.5rem 0",
        // "&:hover": {
        //     background: "#256D85",
        // },
        '& svg':{
            marginBottom: "0.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "row",
        },
    },
    icon: {
        color: "white",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },


    
}))