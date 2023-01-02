import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "#f7f7f7",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
         }
    },
    main: {
        width: "55%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "8rem auto",
        borderRadius: "1rem",
        padding: "2rem",
        position: "relative",
        '&>h1': {
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",

        }
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        border: ".5px solid #000",
        overflowX: "auto",
        margin: "2rem 0",
        background: "#fff",
        
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

    }
}))