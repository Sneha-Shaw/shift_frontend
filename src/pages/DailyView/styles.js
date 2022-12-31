
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "#f7f7f7",
    },
    main: {
        width: "70%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f7f7",
        padding: "2rem",
        margin: "2rem",

    },
    grid: {
        width: "100%",
        height: "90%",
        overflowX: "scroll",
        background: "#f7f7f7",
    },
    table: {
        width: "100%",
        height: "100%",
        borderCollapse: "collapse",
        '&>thead': {
            width: "100%",
            '&>tr': {
                width: "100%",
                '&>th': {
                    fontWeight: "bold",
                    padding: "1rem",
                    fontSize: "1.5rem",
                    border: ".5px solid #e0e0e0",
                    // width: "8rem",
                    // height: "2rem",
                    background: "#06283D",
                    color: "#fff",
                    textAlign: "center",
                    '&>div':{
                        width: "10rem",
                    }
                }
            }
        },
        '&>tbody': {
            width: "100%",
            '&>tr': {
                width: "100%",
            //    td nth nth child 1
                '&>td:nth-child(1)': {
                    padding: "1rem",
                    fontSize: "1.5rem",
                    border: ".5px solid #e0e0e0",
                    width: "8rem",
                    height: "2rem",
                    background: "#06283D",
                    color: "#fff",
                    textAlign: "center"
                },
                '&>td': {
                    padding: "1rem",
                    fontSize: "1.5rem",
                    border: "1px solid #e0e0e0",
                    width: "8rem",
                    height: "2rem",
                    textAlign: "center"
                }
            }
        }
    },
  

}))