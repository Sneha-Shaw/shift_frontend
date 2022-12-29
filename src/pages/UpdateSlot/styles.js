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
    }
}))