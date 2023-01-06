
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        background: "#f7f7f7",

    },
    main: {
        width: "55%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        padding: "2rem",
        position: "relative",

    },
    modal: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // background: "#47B5FF",
    },
    modalContent: {
        width: "50%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        outline: "none",
        padding: "2rem 1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
        // button


    },
    modalHeader: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        '&>h1': {
            fontSize: "3rem",
            fontWeight: "bold",
            margin: "2rem 0",
            color: "#47B5FF",
        },
        '&>button': {
            position: "absolute",
            right: "0",
            top: "0",
            color: "#47B5FF",
            border: "none",
            fontWeight: "bold",
            fontSize: "2rem",
        }
        // background: "#47B5FF",
    },
    modalBody: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // background: "#47B5FF",
    },
    modalBodyContentItem: {
        width: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "2rem 0",
        '&>h4': {
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "0 1rem",
            color: "#47B5FF",
            width: "20%"
        },
        '&>div': {
            width: "65%",
            '&>input': {
                width: "100%",
                outline: "none",
                border: "none",
                borderBottom: "1px solid #47B5FF",
                fontSize: "1.5rem",
                padding: "0.5rem",
                textAlign: "center"
            }
        },
        '&>input': {
            width: "65%",
            outline: "none",
            border: "none",
            borderBottom: "1px solid #47B5FF",
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "0.5rem",
        },
        '&>select': {
            width: "65%",
            outline: "none",
            border: "none",
            borderBottom: "1px solid #47B5FF",
            fontSize: "1.5rem",
            padding: "0.5rem",
            textAlign: "center",
        },
    },
    modalFooter: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&>button': {
            width: "100%",
            background: "#47B5FF",
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "2rem 0",
            '&:hover': {
                background: "#fff",
                color: "#47B5FF",
                border: "1px solid #47B5FF",
            }
        }
    },
    popupModal:{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "100",
    },
    popup: {
        position: "absolute",
        background: "#fff",
        width: "20%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "100",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
    },
    popupHeader: {
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&>h1': {
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "1rem 0",
            color: "#47B5FF",
        },
        '&>button': {
            // color: "#47B5FF",
            fontWeight: "bold",
            fontSize: "1.5rem",
            width: "3rem",
            height: "3rem",
            border: "none",
            padding:0,
            margin:0,
           
        },
      
    },
    popupBody:{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        '&>div':{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            '&>h4':{
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "1rem 0",
                color: "#47B5FF",
                width: "40%"
            },
            '&>h2':{
                fontSize: "2.5rem",
                fontWeight: "bold",
                margin: "1rem 0",
                color: "#47B5FF",
                width: "100%",
                textAlign: "center"
            },
            '&>p':{
                fontSize: "1.5rem",
                // fontWeight: "bold",
                margin: "1rem 0",
                color: "#47B5FF",
                width: "60%",
                textAlign: "center"
            }
        }
    }

}))
