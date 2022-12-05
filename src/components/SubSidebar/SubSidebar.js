import React from 'react'
import useStyles from './styles'
import { NavLink } from 'react-router-dom'

const SubSidebar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/*  availabilty, Requests>leave,shift replacment,special request  */}
            <NavLink to='/availabilty' style={({ isActive }) => ({
                color: isActive ? '#47B5FF' : '#fff',
            })} className={classes.navLink}>
                Availabilty
            </NavLink>
        </div>
    )
}

export default SubSidebar