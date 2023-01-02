
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        background: "#f7f7f7",

    },
    main: {
        width: "55%",
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "7.9rem auto",
        '& h1': {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#06283D"
        }

    },
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        '& button': {
            background: "#fff",
            color: "#06283D",
            fontSize: "1.2rem",
            fontWeight: "bold",
            '&:hover': {
                background: "#f7f7f7",
                color: "#06283D",
            }
        }
    },
    back: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        '&>button': {
            background: "#fff",
            color: "#000",
            border: "1px solid #000",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            '&:hover': {
                background: "#000",
                color: "#fff",
            },

        },

    },
    form: {
        width: "90%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
        borderRadius: "1rem",
        padding: "5rem 2rem",
    },
    formGroup: {
        width: "75%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
        '&>label': {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#06383D",
            width: "25%",
        },
        '&>input': {
            width: "65%",
            height: "3rem",
            fontSize: "1.5rem",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
        },
        '&>select': {
            width: "67%",
            height: "3rem",
            fontSize: "1.5rem",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            outline: "none",
            // option styles
            '&>option': {
                fontSize: "1.5rem",
                color: "#06383D"
            }
        },
        '&>div': {
            width: "67%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            '&>input': {
                width: "70%",
                height: "3rem",
                fontSize: "1.5rem",
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
            },
        }
    },
    table: {
        width: "100%",
        marginTop: "2rem",
        borderCollapse: "collapse",
        '&>thead': {
            '&>tr': {
                '&>th': {
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    background: '#06383D',
                    color: "#fff",
                    padding: "1rem",
                    border: ".5px solid #ccc",
                    textAlign: "center",
                },
            },
        },
        '&>tbody': {
            '&>tr': {
                '&>td': {
                    fontSize: "1.5rem",
                    color: "#06383D",
                    padding: "1rem",
                    border: ".5px solid #ccc",
                    textAlign: "center",
                    lineHeight: 2
                },
            },

        },
    },
    button: {
        width: "100%",
        display: "flex",
        justifyContent: "center",

    },
    tableContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
        '&>div>div': {
            justifyContent: "center",
            marginTop: "1rem",
            width: "60%",
            '&>label': {
                width: "20%",
            },
            '&>input': {
                outline: "none"
            }
        }

    },
    tabs: {
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 0",
        alignItems: "center",
        '&>button': {
            width: "45%",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "#06383D",
            '&:hover': {
                background: "#06383D",
            }
        }
    }
}))