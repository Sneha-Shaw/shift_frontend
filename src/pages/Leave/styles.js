
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",

    },
    main: {
        width: "55%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "3rem auto",
        // background: "#f7f7f7",
        borderRadius: "1rem",
        padding: "2rem",
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
            background: "#f7f7f7",
            color: "#06283D",
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
            background: "#f7f7f7",
            borderRadius: "1rem",
            marginBottom: "1rem",
            border: "1px solid",
            '&>div': {
                display: "flex",
                flexDirection: "column",
                '&>h2': {
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                },
                '&>p': {
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#06283D",
                },
            },
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
        '&>div': {
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            width: "80%",
            justifyContent: "space-between",
            '&>p': {
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#06283D",
                marginLeft: "1rem",
            }
        }
    },
    main__content__form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
        '&>div': {
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem 0",
            // flexDirection: "column",
            '& label': {
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginRight: "0.5rem",
                width: "40%",
                color: "#06283D"
            },
           
            
            '& textarea': {
                width: "97%",
                height: "8rem",
                resize: "none",
                borderRadius: "0.5rem",
                border: "1px solid",
                padding: "0.5rem",
                outline: "none",
               
            },
            '&>button': {
                width: "50%",
                height: "4rem",
                background: "#06283D",
                color: "#fff",
                borderRadius: "0.5rem",
                margin: "2rem auto",
                fontSize: "1.5rem",
                '&:hover':{
                    background: "rgba(6, 40, 61,0.9)",
                    color: "#fff",
                }
            }
        },
    },
    main__form: {
        background: "#f7f7f7",

        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        borderRadius: "1rem",
       
       
    },
    main__content__form__input__div:{
        width: "80%",
        '&>select': {
            width: "104%",
            height: "3rem",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            outline: "none",
            border: "1px solid",

        },
        '&>div':{
            width: "100%",
        }
    }


}))