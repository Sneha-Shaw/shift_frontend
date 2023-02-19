
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "5%",
        display: "flex",
        backgroundColor: "#06283D",
        zIndex: 1000,
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            // height: "9vh",
        },
    },
    list:{
        position: "fixed",
        top: 0,
        listStyle: "none",
        backgroundColor: "#256D85",
        padding: "2rem 0",
        // marginTop: "3rem",
        width: "100%",
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        '&>li':{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.8rem",
            fontWeight: "bold",
            padding: ".5rem 0",
            '&:hover':{
                backgroundColor: "#256D85",
            },
            '& a':{
                textDecoration: "none",
                color: "#fff",
                display: "flex",
                // flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
            }
        },
        [theme.breakpoints.up("sm")]: {
         display: "none"
        },
      
    },
    subListItem:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        // fontSize: "1rem",
        padding: "1rem 0",
        '&:hover':{
            backgroundColor: "#256D85",
        },
        '& a':{
            textDecoration: "none",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            '& svg':{
                fontSize: "1.5rem",
                marginRight: "1rem",
            },
            '& span':{
                fontSize: "1.5rem",
            }
        },
        
    },
    
    icons:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        height: "100%",
        width: "100%",
        // marginTop: "1rem",
      '& h3':{
        display: "block",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
      }
    },

    navLink: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // height: "100%",
        width: "100%",
        textDecoration: "none",
        color: "white",
       
        padding: "1.5rem 0",
     
        '& svg':{
            marginBottom: "0.5rem",
        },
      
    },
    icon: {
        color: "white",
       
    },
    active:{
        backgroundColor: "#256D85",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // height: "100%",
        width: "100%",
        textDecoration: "none",
        color: "white",
       
        padding: "1.5rem 0",
     
        '& svg':{
            marginBottom: "0.5rem",
        },
    }

    
}))