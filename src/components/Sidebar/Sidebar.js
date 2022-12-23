import React, { useState,useEffect } from 'react'
import useStyles from './styles'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import { logoutManager } from '../../redux/actions/managerAction';

const Sidebar = () => {
    const classes = useStyles()
    const [showSubList, setShowSubList] = useState(false)
    const { managerInfo }  = useSelector(state => state.signInManager)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logoutManager())
        navigate('/login')
    }

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
                {/* logout */}
                <NavLink to='' className={classes.navLink}
                    onClick={logoutHandler}
                >
                    <LogoutIcon fontSize="large" />
                    <h3>
                        Logout
                    </h3>
                </NavLink>

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
                                    <li className={classes.subListItem}>
                                        <NavLink to='/attendance/view/weekly'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Weekly View</span>
                                        </NavLink>
                                    </li>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/attendance/view/monthly'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Monthly View</span>
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
                                <Link to="" className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                    <span className={classes.listItemText}>Views</span>
                                </Link>
                                <ul className={classes.subList}>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/self-service/view/daily'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Daily View</span>
                                        </NavLink>
                                    </li>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/self-service/view/weekly'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Weekly View</span>
                                        </NavLink>
                                    </li>
                                    <li className={classes.subListItem}>
                                        <NavLink to='/self-service/view/monthly'
                                            style={({ isActive }) => ({
                                                color: isActive ? '#47B5FF' : 'none',
                                            })} className={classes.navLink} onClick={() => setShowSubList(!showSubList)}>
                                            <ArrowForwardIosIcon />
                                            <span className={classes.listItemText}>Monthly View</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                )
            }
        </div>
    )
}

export default Sidebar