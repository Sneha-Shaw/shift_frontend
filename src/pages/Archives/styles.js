
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "95vh",
        display: "flex",
        background: "#f7f7f7",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    main: {
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f7f7",
        padding: "0 2rem",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            // margin: "1rem",
            padding: "0",
        }
    },
    grid: {
        width: "100%",
        height: "75%",
        background: "#f7f7f7",
        '& button': {
            background: "#06283D",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#fff",
            '&:hover': {
                background: "#06283D",
                color: "#fff",
            }
        }
    },
    selectContainer:{
        width: "100%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    select: {
       
        '&>label': {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#06283D",
            marginRight: "1rem",
        },
        '&>select': {
            // width: "10%",
            fontSize: "1.5rem",
            color: "#06283D",
            border: ".5px solid #06283D",
            borderRadius: ".5rem",
            padding: ".5rem",
            outline: "none"
        }


    },
    tableContainer: {
        width: "100%",
        height: "100%",
        overflowX: "auto",
    },
    table: {
        width: "100%",
        height: "100%",
        borderCollapse: "collapse",
        border: ".5px solid #06283D",
        '&>thead': {
            position:"sticky",
            top:"-.2rem",
            zIndex:100,
            '&>tr': {

                '&>th': {
                    fontWeight: "bold",
                    padding: "1rem",
                    fontSize: "1.5rem",
            background: "#06283D",

                    // borderRight: ".5px solid #06283D",
                    // width: "8rem",
                    // height: "2rem",
                    color: "#fff",
                    textAlign: "center",
                    '&>div': {
                        width: "10rem",
                    }
                }
            }
        },
        '&>tbody': {
            width: "100%",
            '&>tr': {
                width: "100%",

                '&>td': {
                    // padding: "1rem",
                    fontSize: "1.5rem",
                    // border: ".5px solid #062 83D",
                    width: "8rem",
                    height: "fit-content",
                    textAlign: "center",

                }
            }
        }
    }
}))