import React from 'react'
import useStyles from './styles'
import { NavLink, Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SubSidebar = () => {
    const classes = useStyles()
    const managerInfo = "hi"


    return (
        <div className={classes.root}>
         
            {
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
                                        })} className={classes.navLink}>
                                        <ArrowForwardIosIcon />
                                        <span className={classes.listItemText}>Breaks</span>
                                    </NavLink>
                                </li>
                                <li className={classes.subListItem}>
                                    <NavLink to='/attendance/doctors'
                                        style={({ isActive }) => ({
                                            color: isActive ? '#47B5FF' : 'none',
                                        })} className={classes.navLink}>
                                        <ArrowForwardIosIcon />
                                        <span className={classes.listItemText}>Doctors</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={classes.listItem}>
                            <Link to="" className={classes.navLink}>
                                <span className={classes.listItemText}>Views</span>
                            </Link>
                            <ul className={classes.subList}>
                                <li className={classes.subListItem}>
                                    <NavLink to='/attendance/view/daily'
                                        style={({ isActive }) => ({
                                            color: isActive ? '#47B5FF' : 'none',
                                        })} className={classes.navLink}>
                                        <ArrowForwardIosIcon />
                                        <span className={classes.listItemText}>Daily View</span>
                                    </NavLink>
                                </li>
                                <li className={classes.subListItem}>
                                    <NavLink to='/attendance/view/weekly'
                                        style={({ isActive }) => ({
                                            color: isActive ? '#47B5FF' : 'none',
                                        })} className={classes.navLink}>
                                        <ArrowForwardIosIcon />
                                        <span className={classes.listItemText}>Weekly View</span>
                                    </NavLink>
                                </li>
                                <li className={classes.subListItem}>
                                    <NavLink to='/attendance/view/monthly'
                                        style={({ isActive }) => ({
                                            color: isActive ? '#47B5FF' : 'none',
                                        })} className={classes.navLink}>
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
                                })} className={classes.navLink}>
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
                                    <NavLink to='/self-service/requests/leave'
                                        style={({ isActive }) => ({
                                            color: isActive ? '#47B5FF' : 'none',
                                        })} className={classes.navLink}>
                                        {/* icon */}
                                        <ArrowForwardIosIcon />
                                        <span className={classes.listItemText}>Leave</span>
                                    </NavLink>
                                </li>
                                <li className={classes.subListItem}>
                                    <NavLink to='/self-service/requests/shift'
                                        style={({ isActive }) => ({
                                            color: isActive ? '#47B5FF' : 'none',
                                        })} className={classes.navLink}>
                                        <ArrowForwardIosIcon />
                                        <span className={classes.listItemText}>Shift Replacement</span>
                                    </NavLink>
                                </li>
                                <li className={classes.subListItem}>
                                    <NavLink to='/self-service/requests/special'
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
                            <Link to="" className={classes.navLink}>
                                <span className={classes.listItemText}>Views</span>
                            </Link>
                            <ul className={classes.subList}>
                                <li className={classes.subListItem}>
                                    <NavLink to='/self-service/view/daily'
                                        style={({ isActive }) => ({
                                            color: isActive ? '#47B5FF' : 'none',
                                        })} className={classes.navLink}>
                                        <ArrowForwardIosIcon />
                                        <span className={classes.listItemText}>Daily View</span>
                                    </NavLink>
                                </li>
                                <li className={classes.subListItem}>
                                    <NavLink to='/self-service/view/weekly'
                                        style={({ isActive }) => ({
                                            color: isActive ? '#47B5FF' : 'none',
                                        })} className={classes.navLink}>
                                        <ArrowForwardIosIcon />
                                        <span className={classes.listItemText}>Weekly View</span>
                                    </NavLink>
                                </li>
                                <li className={classes.subListItem}>
                                    <NavLink to='/self-service/view/monthly'
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
            }

        </div>
    )
}

export default SubSidebar