import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },

    container: {
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
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2rem",
    },
    tabButtons: {
        width: "40%",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "2rem",
        '&>button': {
            width: "48%",
            height: "3.5rem",
            background: "#fff",
            color: "#06283D",
            fontSize: "1.2rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
            '&:hover': {
                background: "rgba(6, 40, 61,0.9)",
                color: "#fff",
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            margin: "0 auto",
            padding: "1rem 0",
        }
    },
    form: {
        width: "55%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        '&>button': {
            width: "40%",
            height: "3.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            background: "#06283D",
            color: "#fff",
            margin: "1.5rem 0",
            '&:hover': {
                background: "rgba(6, 40, 61,0.9)",
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            '& input': {
                width: "90%"
            },
            '& textarea': {
                width: "90%"
            },
            '&>button': {
                width: "50%",
            }
        }
    },
    formGroup: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginBottom: "2rem",
        '&>input': {
            width: "100%",
            height: "3.5rem",
            borderRadius: "1rem",
            border: "1px solid",
            outline: "none",
            padding: "0 1rem",
            fontSize: "1.5rem",
            marginBottom: "1rem",
        },
        '&>textarea': {
            width: "100%",
            height: "8rem",
            borderRadius: "1rem",
            border: "1px solid",
            outline: "none",
            padding: "1rem",
            fontSize: "1.5rem",
            marginBottom: "1rem",
            resize: "none"
        },
        '&>label': {
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginBottom: "1rem",
        },


    },
    formGroupImage: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "2rem",
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        }
    },
    formGroupCheck: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: "1rem",
        '&>label': {
            fontSize: "1.8rem",
            fontWeight: "bold"
        },
    },
    formGroupPass: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
        '&>label': {
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginBottom: "1rem",
        },
        '&>div': {
            width: "60%",
            border: "1px solid",
            borderRadius: "1rem",
            padding: ".5rem 1rem ",
            background: "#fff",
            display: "flex",
            margin: "auto",
            '&>input': {
                width: "100%",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#06383D",
                background: "transparent",
                border: "none",
                outline: "none"
            },
            '&>div>svg': {
                color: "#06383D",
                fontSize: "2.2rem",
                cursor: "pointer"
            },
            [theme.breakpoints.down('sm')]: {
                width: "90%",
            }
        }
    }


}))