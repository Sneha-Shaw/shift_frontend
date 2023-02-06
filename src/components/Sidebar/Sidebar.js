import React, { useState } from 'react'
import useStyles from './styles'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ArchiveIcon from '@mui/icons-material/Archive';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { NavLink, Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const classes = useStyles()
    const [showSubList, setShowSubList] = useState(false)
    const { managerInfo } = useSelector(state => state.signInManager)
    // const { userInfo } = useSelector(state => state.signInUser)

    const toggleSubList = () => {
        setShowSubList(!showSubList)
    }

    const location = useLocation();
    const path = location.pathname;
    const pathArr = path.split('/');
    const firstPath = pathArr[1];

    // check if window is laptop or mobile
    const isMobile = window.innerWidth <= 600;
    return (
        <div className={classes.root}>
            {/* home and self service icons */}

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
                        <NavLink
                            to={isMobile ? firstPath === 'attendance' ? '#' : '/attendance' : '/attendance'}
                            className={
                                // if mobile then check if path contains attendance then active else not
                                isMobile ? firstPath === 'attendance' ? classes.active : classes.navLink : classes.navLink
                            }
                            style={({ isActive }) => ({
                                background: isMobile ? '' : isActive ? '#256D85' : 'none',
                            })}
                            onClick={toggleSubList}>
                            <EventAvailableIcon fontSize="large" />
                            <h3>
                                Attendance
                            </h3>
                        </NavLink>

                    )
                        :
                        <NavLink
                            to={isMobile ? firstPath === 'self-service' ? '/self-service' : '#' : '/self-service'}
                            className={
                                firstPath === 'self-service' ? classes.active : classes.navLink
                            }
                            onClick={() => setShowSubList(!showSubList)}>
                            <PersonIcon fontSize="large" />
                            <h3>
                                Self Service
                            </h3>
                        </NavLink>
                }
              {
                    managerInfo ? (
                        <NavLink
                        to='/archives'
                        style={({ isActive }) => ({
                            background: isActive ? '#256D85' : 'none',
                        })} className={classes.navLink}>
                        <ArchiveIcon fontSize="large" />
                        <h3>
                            Archives
                        </h3>
                    </NavLink>
                    ) : null
              }

            </div>
            {
                showSubList && (

                    managerInfo ?
                        <ul className={classes.list}>

                            <li className={classes.listItem}>
                                <Link to="" className={classes.navLink}>
                                    <span className={classes.listItemText}>Shift Schedule</span>
                                </Link>
                                {/* sub list */}
                                <ul className={classes.subList}>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/attendance/breaks'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Breaks</span>
                                        </NavLink>
                                    </li>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/attendance/doctors'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Doctors</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className={classes.listItem}>
                                <Link to="" className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <span className={classes.listItemText}>Views</span>
                                </Link>
                                <ul className={classes.subList}>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/attendance/view/daily'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Daily View</span>
                                        </NavLink>
                                    </li>


                                </ul>

                            </li>
                            <li className={classes.listItem}>
                                <NavLink to='/attendance/approvals'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#47B5FF' : 'none',
                                    })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <span className={classes.listItemText}>My Approvals</span>
                                </NavLink>
                            </li>
                            <li className={classes.listItem}>
                                <NavLink to='/attendance/slots'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#47B5FF' : 'none',
                                    })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <span className={classes.listItemText}>Update Slots</span>
                                </NavLink>
                            </li>
                            <li className={classes.listItem}>
                                <NavLink
                                    to={
                                        managerInfo ?
                                            "/attendance/availability"
                                            :
                                            "/self-service/availability"
                                    }
                                    style={({ isActive }) => ({
                                        color: isActive ? '#47B5FF' : 'none',
                                    })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <span className={classes.listItemText}>Update Availability</span>
                                </NavLink>
                            </li>
                            <li className={classes.listItem}>
                                <NavLink to='/self-service/requests/shift'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#47B5FF' : 'none',
                                    })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                   
                                    <span className={classes.listItemText}>Shift Replacement</span>
                                </NavLink>
                            </li>
                            <li className={classes.listItem}>
                                <NavLink to='/attendance/shift-replace-requests'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#47B5FF' : 'none',
                                    })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <span className={classes.listItemText}>Shift Replacement Requests</span>
                                </NavLink>
                            </li>
                        </ul>
                        :
                        <ul className={classes.list}>
                            <li className={classes.listItem}>
                                <NavLink to='/self-service/availability'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#47B5FF' : 'none',
                                    })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <span className={classes.listItemText}>Availability</span>
                                </NavLink>
                            </li>
                            <li className={classes.listItem}>
                                <Link to="" className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <span className={classes.listItemText}>Requests</span>
                                </Link>
                                {/* sub list */}
                                <ul className={classes.subList}>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/self-service/requests/leave'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            {/* icon */}
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Leave</span>
                                        </NavLink>
                                    </li>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/self-service/requests/shift'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Shift Replacement</span>
                                        </NavLink>
                                    </li>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/self-service/requests/special'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Special Requests</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className={classes.listItem}>
                                <NavLink to='/self-service/schedule'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#47B5FF' : 'none',
                                    })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <ArrowForwardIosIcon />
                                    <span className={classes.listItemText}>My Schedule</span>
                                </NavLink>
                               
                            </li>
                        </ul>

                )
            }
        </div>
    )
}

export default Sidebar