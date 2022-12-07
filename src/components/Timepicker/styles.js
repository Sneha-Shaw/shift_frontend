
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
        }
    }
}))