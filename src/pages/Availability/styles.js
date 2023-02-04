
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        background: "#f7f7f7",

    },
    main: {
        width: "55%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        padding: "2rem",
        position: "relative",
        height:"90vh"

    },
    form: {
        width: "100%",
        height:"70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        marginTop: "2rem",
    },
    formHeader: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2rem",
        '&>h2': {
            fontSize: "2rem",
            fontWeight: "800",
            color: "#06283D",
        }
    },
    formBody: {
        width: "60%",
        height:"70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    formBodyItem: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
        '&>select': {
            width: "50%",
            // height: "2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "0.5rem",
            outline: "none",
        },
        '&>div': {
            width: "50%",
        },
        '& input': {
            width: "95%",
            // height: "2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "0.5rem",
            outline: "none",
        },
        '&>label': {
            width: "30%",
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "#06283D",
        },
    },
    formFooter: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        '&>button': {
            width: "20%",
            background: "#06283D",
            fontSize: "1.5rem",
            fontWeight: "800",
            '&:hover': {
                background: "#fff",
                color: "#06283D",
                border: "1px solid #06283D",
            }
        }
    },
    calendar: {
        width: "100%",
        height:"70%",
        marginTop:"2rem",
        background: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)"
    },
    calendarHeader: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
        '&>h2': {
            fontSize: "2rem",
            fontWeight: "800",
            color: "#06283D",
        },
        '&>button': {
            width: "20%",
            background: "#06283D",
            fontSize: "1.5rem",
            fontWeight: "800",
            '&:hover': {
                background: "#fff",
                color: "#06283D",
                border: "1px solid #06283D",
            }
        }
    },
    calendarBody: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height:"100%",
        overflow:"auto"
    },
    calendarBodyItemContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    calendarBodyItem: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&>label':{
            width: "fit-content",
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "#06283D",
            marginRight:"1rem"
        },
        '&>select':{
            width: "fit-content",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "0.5rem",
            outline: "none",

        },
        '&>input':{
            width: "fit-content",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "0.5rem",
            outline: "none",

        },
        '&>button':{
            // width: "20%",
            background: "#06283D",
            fontSize: "1.1rem",
            fontWeight: "800",
            '&:hover': {
                background: "#fff",
                color: "#06283D",
                border: "1px solid #06283D",
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
    table: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "2rem",
        '&>table': {
            width: "100%",
            borderCollapse: "collapse",
            '&>thead': {
                '&>tr': {
                    '&>th': {
                        border: "1px solid #ccc",
                        padding: "0.5rem",
                        fontSize: "1.5rem",
                        fontWeight: "800",
                        background: "#06283D",
                        color: "#fff",
                    }
                }
            },
            '&>tbody': {
                '&>tr': {
                    '&>td': {
                        border: "1px solid #ccc",
                        padding: "0.5rem",
                        fontSize: "1.5rem",
                        fontWeight: "800",
                        color: "#06283D",
                        textAlign:"center"
                    }
                }
            }

        }
    },
  

}))
