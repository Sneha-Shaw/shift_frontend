
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "#f7f7f7",
        position: "relative"
    },
    main:{
        width: "55%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "8rem auto",

        borderRadius: "1rem",
        // padding: "2rem",
        '& h1':{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",

        }

    },
    header:{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '&>button':{
            background: "#fff",
            color: "#000",  
            border: "1px solid #000",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            '&:hover':{
                background: "#000",
                color: "#fff",
            }
        }
    },
    table:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem auto",
        background: "#fff",
        // boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
    },
    tableHeader:{
        width: "100%",
        display: "flex",
        background: "#000",
        color: "#fff",
        // padding: ".5rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
       
    },
    tableHeaderItem:{
        width: "25%",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },
    tableRow:{
        width: "100%",
        display: "flex",
        background: "#fff",
        color: "#000",
        fontSize: "1.3rem",
        '&:nth-child(odd)':{
            background: "#f7f7f7",
        }

    },
    tableRowItem:{
        width: "25%",
        padding: "1rem",
        border: "1px solid #000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&:nth-child(4)':{
            // width: "25%",
            // display: "flex",
            justifyContent: "space-between",
        }
    },
    form:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem auto",
        padding: "4rem 2rem",
        background: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
    },
    formItem:{
        width: "60%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.5rem",
        '& label':{
            width: "20%",
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#06383D',
            marginRight: '1rem',
        },
        '& input':{
            width: "70%",
            height: "3rem",
            fontSize: "1.5rem",
            padding: "0 0.5rem ",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            '&:focus':{
                outline: "none",
                border: "1px solid #000",
            }
        },
        '&>button':{
            width: "30%",
            height: "4rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "#06283D",
            margin: "2rem auto 0 auto" ,
            '&:hover':{
                background: "rgba(6, 40, 61,0.9)"
            }
        },
        '&>div':{
            width: "72%",
            // height: "3rem",
        }
    },
    formItemTime:{
        marginBottom: "1.5rem",
        width: "71%",
    }

}))