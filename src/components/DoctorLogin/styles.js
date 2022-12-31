
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
        root: {
          
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "40%",
            background: "#DFF6FF",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            color: "#256D85",
            "& h1": {
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
            },
            [theme.breakpoints.down('sm')]:{
                width: "75%",  
            }

            // margin: "auto",
        },
        form: {
            width: '100%', 
            marginTop: theme.spacing(1),
            '& div':{
                fontSize: "1.5rem",
            },
            '&>button':{
                background: "#06283D",
                marginTop: theme.spacing(1),
                fontSize: "1.2rem",
                '&:hover':{
                    background: "rgba(6, 40, 61,0.9)"
                }
            }
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        },
        forgot: {
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            "& p": {
                fontSize: "1.2rem",
                cursor: "pointer",
                marginRight: ".2rem"
            }
        },
        
    
}))