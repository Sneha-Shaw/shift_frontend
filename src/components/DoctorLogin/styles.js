
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
        root: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "25%",
            margin: "auto",
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.primary.main
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
    
}))