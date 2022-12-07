
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root:{
        display: 'flex',
        width: "100%",
        // height: "100%",
        alignItems: 'center',
        marginBottom: "1rem",
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
            '&:focus':{
                outline: "none",
                border: "1px solid #000",
            }
        }
    }
}))