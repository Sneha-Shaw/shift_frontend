
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
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        background: "#f7f7f7",
        padding: "0 2rem",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            // margin: "1rem",
            padding: "0",
        }
    },
    grid: {
        width: "100%",
        height: "100%",
        background: "#f7f7f7",
        '& button': {
            background: "#06283D",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#fff",
            '&:hover': {
                background: "#06283D",
                color: "#fff",
            }
        }
    },
    btnheader: {
        width: "100%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    domain: {
        width: "100%",
        height: "10%",
        '&>label': {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#06283D",
            marginRight: "1rem",
        },
        '&>select': {
            // width: "10%",
            fontSize: "1.5rem",
            color: "#06283D",
            border: ".5px solid #06283D",
            borderRadius: ".5rem",
            padding: ".5rem",
            outline: "none"
        }


    },
    tableContainer: {
        width: "100%",
        height: "70%",
        overflowX: "scroll",
    },
    table: {
        width: "100%",
        height: "100%",
        borderCollapse: "collapse",
        border: ".5px solid #06283D",
        '&>thead': {
            position: "sticky",
            top: "-.2rem",
            zIndex: 100,
            '&>tr': {

                '&>th': {
                    fontWeight: "bold",
                    padding: "1rem",
                    fontSize: "1.5rem",
                    background: "#06283D",
                    color: "#fff",
                    textAlign: "center",
                    '&>div': {
                        width: "20rem",
                    }
                }
            }
        },
        '&>tbody': {
            width: "100%",
            '&>tr': {
                width: "100%",

                '&>td': {
                    // padding: "1rem",
                    fontSize: "1.5rem",
                    // border: ".5px solid #062 83D",
                    // width: "20rem",
                    height: "fit-content",
                    textAlign: "center",

                }
            }
        }
    },
    modal: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        left: "0",
        background: "rgba(0,0,0,0.5)",
        zIndex: "1000",

    },
    modalContent: {
        width: "50%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f7f7",
        borderRadius: ".5rem",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
        padding: "2rem",


    },
    modalHeader: {
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        '&>h1': {
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#06283D",
        },
        '&>button': {
            outline: "none",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#06283D",
        }
    },
    hr: {
        width: "100%",
        height: ".5px",
        background: "#06283D",
        margin: "1rem 0"

    },
    modalBody: {
        width: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        '&>div': {
            width: "100%",
            // height: "100%",
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "space-between",
            margin: "1.4rem",
            '&>label': {
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#06283D",
                marginRight: "1rem",
            },
            '&>input': {
                width: "60%",
                fontSize: "1.5rem",
                color: "#06283D",
                border: ".5px solid #06283D",
                borderRadius: ".5rem",
                padding: ".5rem",
                outline: "none"
            },
            '&>select': {
                width: "61%",
                fontSize: "1.5rem",
                color: "#06283D",
                border: ".5px solid #06283D",
                borderRadius: ".5rem",
                padding: ".5rem",
                outline: "none"
            },
            '&>div': {
                width: "60%",
                display: "flex",
                // flexDirection: "column",
                '&>div': {
                    width: "100%",
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "flex-start",
                    margin: "1rem 0",
                    '&>input': {
                        width: "2rem",
                        height: "2rem",
                        marginRight: "1rem",
                        outline: "none",
                        border: ".5px solid #06283D",
                    },
                    '&>label': {
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        color: "#06283D",
                    }
                }
            }

        }
    },
    doctorList: {
        width: "100%",
        height: "20rem",
        flexDirection: "column",
        overflow: 'scroll'
    },
    modalFooter: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&>button': {
            // background: "#06283D",
            color: "#fff",
            fontSize: "1.2rem",
            outline: "none",
            margin: "0 2rem",
            '&:hover': {
                background: "#06283D",
                color: "#fff",
            }
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor:'#F2F2F2',
        border: "1.5px solid #06283D",
        borderRadius: '1rem',
        // padding: ".5rem 1rem",
        '& input': {
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            marginLeft: '1rem',
            fontSize: '1.2rem',

        },
    },
    searchIcon: {
        width: "10% !important",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: "pointer",
        marginLeft: '1rem',
        '& svg': {
            color: "#06283D",
            fontSize: '2.2rem',
            width: "100%"
        }
    },
    shiftBox: {
        background: "#06283D",
        color: "#fff",
        fontSize: "1.2rem",
        outline: "none",
        cursor: "pointer",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}))