import React from 'react'
import useStyles from './styles'
import { NavLink, Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SubSidebar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/*  availabilty, Requests>leave,shift replacment,special request  */}
            {/* list */}
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    <NavLink to='/self-service/availability'
                        style={({ isActive }) => ({
                            color: isActive ? '#47B5FF' : 'none',
                        })} className={classes.navLink}>
                        <span className={classes.listItemText}>Availability</span>
                    </NavLink>
                </li>
                <li className={classes.listItem}>
                    <Link to="" className={classes.navLink}>
                        <span className={classes.listItemText}>Requests</span>
                    </Link>
                    {/* sub list */}
                    <ul className={classes.subList}>
                        <li className={classes.subListItem}>
                            <NavLink to='/self-service/requests/l'
                                style={({ isActive }) => ({
                                    color: isActive ? '#47B5FF' : 'none',
                                })} className={classes.navLink}>
                                {/* icon */}
                                <ArrowForwardIosIcon />
                                <span className={classes.listItemText}>Leave</span>
                            </NavLink>
                        </li>
                        <li className={classes.subListItem}>
                            <NavLink to='/self-service/requests/sh'
                                style={({ isActive }) => ({
                                    color: isActive ? '#47B5FF' : 'none',
                                })} className={classes.navLink}>
                                <ArrowForwardIosIcon />
                                <span className={classes.listItemText}>Shift replacment</span>
                            </NavLink>
                        </li>
                        <li className={classes.subListItem}>
                            <NavLink to='/self-service/requests/sp'
                                style={({ isActive }) => ({
                                    color: isActive ? '#47B5FF' : 'none',
                                })} className={classes.navLink}>
                                <ArrowForwardIosIcon />
                                <span className={classes.listItemText}>Special Requests</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className={classes.listItem}>
                    <Link to="/self-service/schedule" className={classes.navLink}>
                        <span className={classes.listItemText}>Schedule</span>
                    </Link>
                    <ul className={classes.subList}>
                        <li className={classes.subListItem}>
                            <NavLink to='/self-service/schedule'
                                style={({ isActive }) => ({
                                    color: isActive ? '#47B5FF' : 'none',
                                })} className={classes.navLink}>
                                <ArrowForwardIosIcon />
                                <span className={classes.listItemText}>Daily View</span>
                            </NavLink>
                        </li>
                        <li className={classes.subListItem}>
                            <NavLink to='/self-service/schedule'
                                style={({ isActive }) => ({
                                    color: isActive ? '#47B5FF' : 'none',
                                })} className={classes.navLink}>
                                <ArrowForwardIosIcon />
                                <span className={classes.listItemText}>Weekly View</span>
                            </NavLink>
                        </li>
                        <li className={classes.subListItem}>
                            <NavLink to='/self-service/schedule'
                                style={({ isActive }) => ({
                                    color: isActive ? '#47B5FF' : 'none',
                                })} className={classes.navLink}>
                                <ArrowForwardIosIcon />
                                <span className={classes.listItemText}>Monthly View</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SubSidebar