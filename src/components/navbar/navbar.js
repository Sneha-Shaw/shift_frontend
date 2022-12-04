import React from 'react'
import useStyles from './styles'
import logo from '../../assets/logo.png'
import Link from '@mui/material/Link'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import face from '../../assets/face.jpg'

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* logo */}
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      {/* nav links */}
      <div className={classes.navLinks}>
        <Link to="/settings" className={classes.link}><SettingsIcon/></Link>
        <Link to="/notifications" className={classes.link}><NotificationsNoneIcon/></Link>
        <Link to="/profile" className={classes.link}><img src={face} alt="" /></Link>
      </div>

    </div>
  )
}

export default Navbar