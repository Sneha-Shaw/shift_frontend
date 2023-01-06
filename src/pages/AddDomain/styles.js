import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        // height: "100vh",
        display: "flex",
        background: "#f7f7f7",
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
        // justifyContent: "center",
        margin: "8rem auto",
        borderRadius: "1rem",
        [theme.breakpoints.down("sm")]: {
            width: "90%"
         }

    },
}))