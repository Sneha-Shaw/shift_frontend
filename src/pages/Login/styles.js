
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
      },
      root:{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          height:'100vh',
          width:'100vw',
        //   backgroundColor:'#256D85'
      },
      container:{
            display:'flex',
            // flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            height:'100vh',
            width:'100vw',
            // backgroundColor:'#256D85',
            [theme.breakpoints.down('sm')]:{
                flexDirection:'column',
                height:'100vh',
            }
      },
      first:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            height:'100vh',
            width:'50vw',
            backgroundColor:'#256D85',
            color: "#DFF6FF",
            [theme.breakpoints.down('sm')]:{
                width:'100vw',

            }
           
      },
      form:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // height:'100vh',
        width:'100%',
        '&>h1':{
            fontSize:'2rem',
            fontWeight:'bold',
            marginBottom:'1rem'
        },
        '&>button':{
            width:'10rem',
            height:'3rem',
            backgroundColor:'#DFF6FF',
            color:'#256D85',
            fontSize:'1rem',
            fontWeight:'bold',
            '&:hover':{
                backgroundColor:'#DFF6FF',
                color:'#256D85',
            }
        }
      },
        second:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            height:'100vh',
            width:'50vw',
            backgroundColor:'#DFF6FF',
            color: "#256D85",
            [theme.breakpoints.down('sm')]:{
                width:'100vw',

            }
        },
    
}))