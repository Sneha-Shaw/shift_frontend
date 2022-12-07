
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root:{
        display: 'flex',
        width: "100%",
        height: "100vh",
        background: "#f7f7f7",
    },
    main:{
        width: "55%",
        height: "85%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "3rem auto",
        background: "#fff",
        borderRadius: "1rem",
        padding: "2rem",
        // box shadow
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
        '&>h1': {
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",

        },
    },
    form:{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        '&>button':{
            width: "40%",
            height: "3.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            background: "#06283D",
            color: "#fff",
            margin: "1.5rem 0",
            '&:hover':{
                background: "rgba(6, 40, 61,0.9)",
            }
        }
    },
    formItem:{
        width: "90%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
            justifyContent: "space-between",

        // flexDirection: "column",
        '&>div':{
            width: "54%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            '&>input':{
                width: "60%",
            }
        },
        '& label':{
            fontSize: "1.5rem",
            // fontWeight: "bold",
            margin: "1rem 0",
            width: "30%",
            // capitalize
            textTransform: "capitalize",
            lineHeight: "1.6"
        },
        '& input':{
            width: "50%",
            height: "3rem",
            fontSize: "1.5rem",
            padding: "0 1rem",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            // border: "none",
            outline: "none",
            background: "transparent",
        }
    }
}))