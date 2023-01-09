import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "93vh",
        display: "flex",
        background: "#f7f7f7",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
         }
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
        '&>h1':{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#000",
            margin: "1rem 0"
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%"
         }

    },
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        '&>h1':{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#000",
            margin: "1rem 0"
        },
        '&>button':{
            background: "#06383d",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "bold",
            '&:hover':{
                background: "#06383d",
                color: "#fff",
            }
        }
    },
    content: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff",
        padding: "2rem 1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
        margin: "1rem 0",
        '&>div':{
            width: "70%",
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            '&>label':{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#000",
                margin: "1rem 0",
                width: "10%",
            },
            '&>input':{
                width: "50%",
                border: "1px solid #06383d",
                borderRadius: "0.5rem",
                outline: "none",
                background: "#f7f7f7",
                padding: "1rem",
                margin:"1rem 0",
            }
        },
        '&>button':{
            width: "50%",
            background: "#06383d",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "bold",
            '&:hover':{
                background: "#06383d",
                color: "#fff",
            }
            
        }
    },
    back: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        '&>button': {
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
            },

        },

    },
    table: {
        width: "70%",
        borderCollapse: "collapse",
        border: ".5px solid #000",
        overflowX: "auto",
        margin: "2rem 0",
        background: "#fff",
        '& thead': {
            width: "100%",
            '& tr': {
                width: "100%",
                '& th': {
                    // width: "100%",
                }
            }
        },
        '& tbody': {
            width: "100%",
            '& tr': {
                width: "100%",
                '& td': {
                    // width: "30%",
                }
            }
        },
        '&>thead>tr>th': {
            background: "#000",
            color: "#fff",
            padding: "1rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
            border: ".5px solid #000",
            [theme.breakpoints.down("sm")]: {
                fontSize: "1rem"
            }
        },
        '&>tbody>tr>td': {
            padding: "1rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
            border: ".5px solid",
            '&>button': {
                width: "40%",
                height: "3rem",
                margin: "0.5rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1rem"
            }
        },

    }
}))