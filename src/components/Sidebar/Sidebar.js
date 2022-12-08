import React from 'react'
import useStyles from './styles'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const classes = useStyles()
    const managerInfo = "hi"

    return (
        <div className={classes.root}>
            {/* home and self seervice icons */}

            <div className={classes.icons}>
                <NavLink to='/'
                    style={({ isActive }) => ({
                        background: isActive ? '#256D85' : 'none',
                    })} className={classes.navLink}>
                    <HomeIcon className={classes.icon} fontSize='large' />
                    <h3>
                        Home
                    </h3>
                </NavLink>
                {
                    managerInfo ? (
                        // <div>
                        <NavLink to='/attendance'
                            style={({ isActive }) => ({
                                background: isActive ? '#256D85' : 'none',
                            })} className={classes.navLink}>
                            <EventAvailableIcon fontSize="large" />
                            <h3>
                                Attendance
                            </h3>
                        </NavLink>
                       
                    )
                        :
                        <NavLink to='/self-service'
                            style={({ isActive }) => ({
                                background: isActive ? '#256D85' : 'none',
                            })} className={classes.navLink}>
                            <PersonIcon fontSize="large" />
                            <h3>
                                Self Service
                            </h3>
                        </NavLink>
                }

            </div>
        </div>
    )
}

export default Sidebar