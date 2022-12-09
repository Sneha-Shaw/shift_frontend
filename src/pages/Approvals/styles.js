
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        // height: "100vh",
        display: "flex",
        background: "#f7f7f7",
    },
    main: {
        width: "55%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "8rem auto",
        borderRadius: "1rem",

    },
    tabs: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '&>div': {
            width: "50%",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "1.5rem",
            fontWeight: "bold",
            border: "1px solid",
            borderRadius: "1rem",
            '&:hover': {
                background: "#000",
                color: "#fff",
            }
        },

    },
    activeTab: {
        background: "#000",
        color: "#fff",
    },
    content: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        // margin: "2rem auto",
       
        padding: "2rem",
        '& h3': {
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "1rem 0",
        },
        '& p': {
            fontSize: "1.5rem",
            fontWeight: "500",
            margin: "1rem 0",
            width: "80%"
        },
        '& button': {
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
        },
        '&>div':{
            width: "100%",
           '&>div':{
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
            padding: "1rem 1.5rem",
            marginBottom: "1.5rem",
            '&>div':{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "initial",
            }
           },
           

        }
    },
    HeaderBtn: {
        display: "flex",
        width: "20%",
        justifyContent: "inherit",
        alignItems: "center",
        marginLeft: "1rem",
        //   nth child
        '&>button:nth-child(1)': {
            background: "green",
            color: "#fff",
            border: "1px solid green",
            borderRadius: "0.5rem",
        },
        '&>button:nth-child(2)': {
            background: "red",
            color: "#fff",
            border: "1px solid red",
            borderRadius: "0.5rem",
        }
    },
    specialReqItemContent:{
        width: "100%",
        display: "flex"
    },
    leaveReqItemContentItem:{
        width: "15%",
        
    }


    }))