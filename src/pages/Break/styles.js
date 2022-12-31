
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "#f7f7f7",
        position: "relative",
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
        position: "relative",
        margin: "8rem auto",
        borderRadius: "1rem",
        '& h1': {
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            [theme.breakpoints.down("sm")]: {
                fontSize: "2rem"
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "95%",
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
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
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
            [theme.breakpoints.down("sm")]: {
                width: "35%",
                marginBottom: "1rem"
            }
        }
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        border: "1px solid #000",
        overflowX: "auto",
        margin: "2rem 0",
        background: "#fff",
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
            // odd row
            '&:nth-child(odd)': {
                background: "#f7f7f7"
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1rem"
            }
        },
      
    },
    tableDiv: {
        width: "100%",
    
        
        [theme.breakpoints.down("sm")]: {
           
            overflow: "scroll"
        }
    },
    form: {
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
        [theme.breakpoints.down("sm")]: {
          padding: "4rem 0"
        }
    },
    formItem: {
        width: "60%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.5rem",
        '& label': {
            width: "20%",
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#06383D',
            marginRight: '1rem',
        },
        '& input': {
            width: "70%",
            height: "3rem",
            fontSize: "1.5rem",
            padding: "0 0.5rem ",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            '&:focus': {
                outline: "none",
                border: "1px solid #000",
            }
        },
        '&>button': {
            width: "30%",
            height: "4rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "#06283D",
            margin: "2rem auto 0 auto",
            '&:hover': {
                background: "rgba(6, 40, 61,0.9)"
            }
        },
        '&>div': {
            width: "72%",
            // height: "3rem",
        },
        [theme.breakpoints.down("sm")]: {
          width: "90%",
          '& label': {
            width: "30%",
            fontSize: '1.3rem',
        },
        '& input': {
            width: "60%",
        },
        '&>button': {
            width: "40%",
        }
        }
    },
    formItemTime: {
        marginBottom: "1.5rem",
        width: "65%",
        display: 'flex',
        // height: "100%",
        alignItems: 'center',
        justifyContent: 'space-around',
        '& label':{
            width: "20%",
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#06383D',
            marginRight: '1rem',
        },
        '& input':{
            height: "3rem",
            fontSize: "1.5rem",
            padding: "0 0.5rem ",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            width: "38%",
            '&:focus':{
                outline: "none",
                border: "1px solid #000",
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            '& label': {
              width: "30%",
              fontSize: '1.3rem',
          },
       
          }
    }

}))