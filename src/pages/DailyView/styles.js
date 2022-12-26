
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "#f7f7f7",
    },
    main: {
        width: "70%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f7f7",
        padding: "2rem",
        margin: "2rem",

    },
    grid: {
        width: "100rem",
        height: "100%",
        overflowX: "scroll",
        background: "#f7f7f7",
    },
    date: {
        width: "100%",
        // display: 'flex',
        // transform: "translate(16.5%, 0)",
        // position: "relative",

    },
    dateHeader:{
        fontWeight: "bold",
        padding: "1rem",
        fontSize: "1.5rem",
        border: "1px solid #e0e0e0",
        // width: "20%",
        // height: "2rem",
        background: "#06283D",
        color: "#fff",
        textAlign: "center"
    },
    dateBody:{
        // position: "absolute",
    },
    slot:{
        width: "100%",
        height: "100%",
        // display: 'flex',
        flexDirection: 'column',
    },
    slotHeader:{
        fontWeight: "bold",
        padding: "1rem",
        fontSize: "1.5rem",
        border: "1px solid #e0e0e0",
        width: "100%",
        // height: "2rem",
        background: "#06283D",
        color: "#fff",
        textAlign: "center",
    },
    shift:{
        // display: 'flex',
        padding: "1rem",
        fontSize: "1.2rem",
        border: "1px solid #e0e0e0",
        width: "8rem",
        height: "2rem",
        background: "#fff",
    }

}))