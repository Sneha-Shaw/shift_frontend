import React, { useState } from 'react'
import useStyles from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import face from '../../assets/face.jpg'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  return (
    <div className={classes.root}>
      {/* logo */}
      <div className={classes.Navmenu}>
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
          <Link to="/notifications" className={classes.link}><NotificationsNoneIcon fontSize="large" /></Link>
          <Link to="/profile" className={classes.link}><img src={face} alt="" /></Link>
        </div>
      </div>

      {/* menu */}
      <div className={classes.menu} onClick={() => setShow(!show)}>
        <MenuIcon fontSize="large" />
      </div>

      {
        show && <div className={classes.mobilenav}>
          <div className={classes.menu} onClick={() => setShow(!show)}>
            <CloseIcon fontSize="large" />
          </div>
          <ul className={classes.list}>
            <li className={classes.subListItem}>
              <Link to="/profile" onClick={() => setShow(!show)}>Profile</Link>
            </li>
            <li className={classes.subListItem}>
              <Link to="/settings" onClick={() => setShow(!show)}>Settings</Link>
            </li>
            <li className={classes.subListItem}>
              <Link to="/notifications" onClick={() => setShow(!show)}>Notifications</Link>
            </li>
            {/* <li className={classes.subListItem}>
              <Link to="/logout">Logout</Link>
            </li> */}
          </ul>
        </div>
      }
    </div>
  )
}

export default Navbar