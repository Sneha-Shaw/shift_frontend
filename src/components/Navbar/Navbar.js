import React from 'react'
import useStyles from './styles'
import logo from '../../assets/logo.png'
import Link from '@mui/material/Link'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import face from '../../assets/face.jpg'
import SearchIcon from '@mui/icons-material/Search';

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
      {/* search */}
      <div className={classes.search}>
        <input type="text" placeholder="Search Doctors" />
        <div className={classes.searchIcon}>
          <SearchIcon fontSize="large" />
        </div>
      </div>
      {/* nav links */}
      <div className={classes.navLinks}>
        <Link to="/settings" className={classes.link}><SettingsIcon fontSize="large" /></Link>
        <Link to="/notifications" className={classes.link}><NotificationsNoneIcon fontSize="large"/></Link>
        <Link to="/profile" className={classes.link}><img src={face} alt="" /></Link>
      </div>

    </div>
  )
}

export default Navbar