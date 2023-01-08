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
        width: "80%",
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
}))