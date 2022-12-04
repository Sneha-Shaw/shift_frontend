
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        height: "7rem",
        backgroundColor: "white",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        width: "10rem",
        height: "10rem",
        "& img": {
            width: "100%",
            height: "100%",
        },
    },
    navLinks: {
        display: "flex",
        alignItems: "center",
        "& a": {
            marginLeft: "2rem",
        },
        "& img": {
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
        },
    },
    link: {
        textDecoration: "none",
        color: "black",
        "&:hover": {
            color: "gray",
        },
    },
}));
