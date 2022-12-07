
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "#f7f7f7",
    },
    main:{
        width: "55%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "7.9rem auto",
        background: "#fff",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",

        borderRadius: "1rem",
        padding: "2rem",
        '&>h1':{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",

        },
        '&>div':{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem 0",
            // alignItems: "center",
            '&>textarea':{
                width: "51.5%",
                height: "10rem",
                fontSize: "1.5rem",
                padding: "0.5rem",
                resize: "none",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
                '&:focus':{
                    outline: "none",
                    border: "1px solid #000",
                }
            },
            '&>label':{
                width: "20%",
                fontSize: "1.5rem",
                fontWeight: "bold",
               color: "#06383D"

            },
            
        },
        '&>button': {
            width: "30%",
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
    },
    input:{
        width: "51%",
        height: "3rem",
        fontSize: "1.5rem",
        padding: "0 0.5rem ",
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        '&:focus':{
            outline: "none",
            border: "1px solid #000",
        }
    }
}))