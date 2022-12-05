
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root:{
        width: "100%",
        height: "100vh",
        display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        
    },
    main:{
        width: "55%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "3rem auto",
        background: "#f7f7f7",
        borderRadius: "1rem",
        padding: "2rem",
        '&>h1':{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",

        }
    },
    form:{
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },

}))