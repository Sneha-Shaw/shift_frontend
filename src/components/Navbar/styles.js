
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        height: "5.5rem",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    menu: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            position: "absolute",
            top: "2rem",
            left: "1rem"
        }
    },
    Navmenu: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0 2rem",
        height: "100%",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }

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
    search: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25rem',
        height: '50%',
        // backgroundColor:'#F2F2F2',
        border: "1.5px solid #06283D",
        borderRadius: '1rem',
        padding: ".5rem 1rem",
        '& input': {
            width: '90%',
            height: '100%',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            paddingLeft: '1rem',
            fontSize: '1.2rem',
            '&::placeholder': {
                color: '#BDBDBD',
                fontSize: '1.2rem'
            }
        },
    },
    searchIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: "pointer",
        marginLeft: '1rem',
        '& svg': {
            color: "#06283D",
            fontSize: '2.2rem'
        }
    },
    navLinks: {
        display: "flex",
        alignItems: "center",
        "& a": {
            margin: "0 2rem",
            color: "#06283D",
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
        '& svg': {
            fontSize: "2.5rem"
        }
    },
    mobilenav: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            // padding: "0 2rem",
            // height: "100%",
            position: "absolute",
            top: "0",
            left: 0,
            zIndex: 10000,
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            '&>ul': {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "2rem",
                height: "100%",
                '& li': {
                    listStyle: "none",
                    margin: "2rem 0",
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    '& a': {
                        textDecoration: "none",
                        color: "#06283D",
                        cursor: "pointer",
                        fontSize: "2rem",
                        '&:hover': {
                            color: "#d9d9d9"
                        },
                    }
                }
            }
        }
    }
}));
