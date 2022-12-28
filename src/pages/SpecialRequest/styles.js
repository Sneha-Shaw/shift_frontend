
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "95vh",
        display: "flex",
        background: "#f7f7f7",
    },
    main: {
        width: "55%",
        // height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "8rem auto",
        borderRadius: "1rem",
        padding: "2rem",
        position: "relative",
        '&>h1': {
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",

        },
        '&>p': {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
        },
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
    main__header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '&>h1': {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#06283D"
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
    main__content: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
        '&>div': {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            background: "#fff",
            boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",

            borderRadius: "1rem",
            marginBottom: "1rem",
            border: "1px solid rgba(0,0,0,0.2)",
            '& button': {
                boxShadow: "none",
                '&:hover': {
                    boxShadow: "none",
                    cursor: "text"
                }
            }

        }
    },
    main__content__item__left: {
        display: "flex",
        flexDirection: "column",
        '&>p':{
            fontSize: "1.5rem",
        }
       
    },
    form: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "1rem",
        padding: "2rem",
        marginTop: "2rem",
        '&>h1': {
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#06283D",
            marginBottom: "2rem",
        },
        '& div': {
            width: "80%",
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            '&>label': {
                width: "15%",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#06283D",
                marginBottom: "1rem",

            },
            '&>textarea': {
                width: "70%",
                height: "10rem",
                padding: "1rem",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#06283D",
                border: "1px solid rgba(0,0,0,0.2)",
                borderRadius: "1rem",
                marginBottom: "1rem",
                resize: "none",
                '&:focus': {
                    outline: "none",
                    border: "1px solid #06283D",
                }
            },

        },
        '& button': {
            width: "50%",
            height: "4rem",
            background: "#06283D",
            color: "#fff",
            borderRadius: "0.5rem",
            margin: "2rem auto",
            fontSize: "1.5rem",
            '&:hover': {
                background: "rgba(6, 40, 61,0.9)",
                color: "#fff",
            }
        }

    }

}))