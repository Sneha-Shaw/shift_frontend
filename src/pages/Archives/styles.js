import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "#f7f7f7",
        position: "relative",
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
        position: "relative",
        margin: "8rem auto",
        borderRadius: "1rem",
        '& h1': {
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            [theme.breakpoints.down("sm")]: {
                fontSize: "2rem"
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "95%",
        }

    }
}))