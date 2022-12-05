
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root:{
        width: "25%",
        height: "100%",
        backgroundColor: "#256D85",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        // position: "fixed",
        // top: 0,
        // left: 0,
    },
    list:{
        listStyle: "none",
        padding: 0,
        // marginLeft: "5rem",
        marginTop: "3rem",
        width: "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        '&>li':{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.8rem",
            fontWeight: "bold",
            padding: "1rem 0",
            '&:hover':{
                backgroundColor: "#256D85",
            },
            '& a':{
                textDecoration: "none",
                color: "#fff",
            }
        },
    },
    subListItem:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
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
            justifyContent: "center",
            '& svg':{
                fontSize: "1.5rem",
                marginRight: "1rem",
            },
            '& span':{
                fontSize: "1.5rem",
            }
        }
    }
    
}))