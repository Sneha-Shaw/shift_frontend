
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
        root: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "25%",
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

            // margin: "auto",
        },
        form: {
            width: '100%', 
            marginTop: theme.spacing(1),
            '&>button':{
                background: "#06283D",
                marginTop: theme.spacing(1),
                '&:hover':{
                    background: "rgba(6, 40, 61,0.9)"
                }
            }
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
    
}))