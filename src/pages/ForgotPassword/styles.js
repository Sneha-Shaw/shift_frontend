import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#256D85"
    },
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        width: "30%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.5)",
        borderRadius: "1rem",
        padding: "3rem 2rem",
        '&>h1': {
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: "#06383D"
        },
        '&>p':{
            fontSize: "1.3rem",
            color: "#06383D",
            marginBottom: "3rem"
        },
        '&>button': {
            width: "60%",
            background: "#06383D",
            fontSize: "1.3rem",
            // hover
            '&:hover': {
                background: "#06383D",
            }
        },
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        }
    },
    formBody: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        marginBottom: "2rem"

    },
    input: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& label': {
            width: "10%",
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#06383D',
            marginRight: '1rem',
        },
        '& input': {
            width: "75%",
            // height: "3rem",
            fontSize: '1.5rem',
            padding: "1rem",
            border: "1px solid #06383D",
            borderRadius: "1rem",
            outline: "none",
            '&:focus': {
                border: "1px solid #06383D",
            }
        },

        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            '& label': {
                width: "100%",
                textAlign: "center"
            }
        }
    },


}))