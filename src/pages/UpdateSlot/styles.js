import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "94vh",
        display: "flex",
        background: "#f7f7f7",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    main: {
        width: "55%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",

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
            }
        }
    },
    form: {
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
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
        }
    },
    formHeader: {
        width: "100%",
        // height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&>h1': {
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
        },
    },
    formBody: {
        width: "100%",
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        '&>div': {
            width: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1.5rem 0",
            '& label': {
                width: "35%",
                fontSize: "1.5rem",
            },
            '&>div': {
                width: "60%",
            },
            '& input': {
                width: "57%",
                // height: "2rem",
                fontSize: "1.5rem",
                padding: ".5rem",
                border: "1px solid rgba(0,0,0,0.3)",
                borderRadius: "0.2rem",
                '&:focus': {
                    outline: "none",
                    border: "1px solid rgba(0,0,0,0.3)",

                }
            }

        }
    },
    slotTable: {
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
    },
    tableHeader: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "2rem",

        '&>h1': {
            fontSize: "3rem",
            fontWeight: "bold",
        },
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
    tableBody: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY:"scroll",

        '&>table': {
            width: "100%",
            borderCollapse: "collapse",
            '&>thead': {
                '&>tr': {
                    '&>th': {
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        padding: "1rem",
                        border: ".5px solid rgba(0,0,0,0.3)",
                        textAlign: "center",
                        position:"sticky",
                        top:0,
                        background:"#fff",
                        zIndex:1
                    }
                }
            },
            '&>tbody': {
                '&>tr': {
                    '&>td': {
                        fontSize: "1.5rem",
                        padding: "1rem",
                        border: ".5px solid rgba(0,0,0,0.3)",
                        textAlign: "center",
                    }
                }
            }
        }
    },
    slotSelect: {
        width: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "2rem",
        '&>div': {
            width: "70%"
        },
        '&>label': {
            width: "20%",
            fontSize: "1.5rem"
        }
    }

}))