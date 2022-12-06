
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
            fontSize: "2rem",
            fontWeight: "bold",
        },
        '& button': {
            background: "#f7f7f7",
            color: "#000",
            '&:hover': {
                background: "#f7f7f7",
                color: "#000",
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
                    color: "#000",
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
                color: "#000",
                marginLeft: "1rem",
            }
        }
    }

}))