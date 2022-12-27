
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
        '& h1':{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#06283D"
        }

    },
    header:{
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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
        borderRadius: "1rem",
        padding: "2rem",
    },
    time: {
        width: "100%",
        display: "flex",
        flexDirection: "column",


    },
    formItemTime: {
        marginBottom: "1.5rem",
        width: "100%",
        display: 'flex',
        // height: "100%",
        alignItems: 'center',
        justifyContent: 'space-around',
        '& label': {
            width: "20%",
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#06383D',
            marginRight: '1rem',
        },
        '& input': {
            height: "3rem",
            fontSize: "1.5rem",
            padding: "0 0.5rem ",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            width: "38%",
            '&:focus': {
                outline: "none",
                border: "1px solid #000",
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            '& label': {
                width: "30%",
                fontSize: '1.3rem',
            },

        }
    },
    formControlLabel: {
        fontSize: "1.6rem !important",
        margin: "1rem 0 !important",
    },
    Addtime: {
        position: "absolute",
        left: "0",
        top: ".5rem",
        border: "1px solid #06383D",
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        '&>svg': {
            fontSize: "1.8rem",
            color: "#06383D",
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
                    border: "1px solid #ccc",
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
                    border: "1px solid #ccc",
                    textAlign: "center",
                },
            },

        },
    },
    button: {
        width: "100%",
        display: "flex",
        justifyContent: "center",

    }

}))