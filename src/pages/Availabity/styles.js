
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root:{
        width: "100%",
        display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        background: "#f7f7f7",
        
    },
    main:{
        width: "55%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        margin: "7.9rem auto",
        background: "#fff",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",

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
    time:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        
       
    },
    formItemTime: {
        marginBottom: "1.5rem",
        width: "100%",
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
    },
    formControlLabel:{
        fontSize: "1.6rem !important",
        margin: "1rem 0 !important",
    },
    Addtime:{
        position: "absolute",
        left: "0",
        top: ".5rem",
        border: "1px solid #06383D",
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        '&>svg':{
            fontSize: "1.8rem",
            color: "#06383D",
        }
    }

}))