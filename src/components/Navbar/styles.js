
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        height: "5.5rem",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        width: "10rem",
        height: "10rem",
        "& img": {
            width: "100%",
            height: "100%",
            cursor: "pointer"
        },
    },
    search:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'25rem',
        height:'50%',
        // backgroundColor:'#F2F2F2',
        border: "1.5px solid #256D85",
        borderRadius:'1rem',
        padding: ".5rem 1rem",
        '& input':{
            width:'90%',
            height:'100%',
            border:'none',
            outline:'none',
            backgroundColor:'transparent',
            paddingLeft:'1rem',
            fontSize:'1.2rem',
            '&::placeholder':{
                color:'#BDBDBD',
                fontSize:'1.2rem'
            }
        },
    },
    searchIcon:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor: "pointer",
        marginLeft:'1rem',
        '& svg':{
            color: "#256D85",
            fontSize:'2.2rem'
        }
    },
    navLinks: {
        display: "flex",
        alignItems: "center",
        "& a": {
            margin: "0 2rem",
            color: "#256D85",
            cursor: "pointer",
        },
        "& img": {
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
        },
    },
    link: {
        textDecoration: "none",
      '& svg':{
        fontSize: "2.5rem"
      }
    },
}));
