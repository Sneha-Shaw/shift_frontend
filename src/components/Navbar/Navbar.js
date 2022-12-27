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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles()
  const { userInfo } = useSelector((state) => state.signInUser)
  const { managerInfo } = useSelector((state) => state.signInManager)

  const [show, setShow] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id) => {
    navigate(`/reset-password/${id}`)
    setAnchorEl(null);
  };
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
          <Link to="" className={classes.link} onClick={handleClick}><SettingsIcon fontSize="large" /></Link>
          <Link to="/notifications" className={classes.link}><NotificationsNoneIcon fontSize="large" /></Link>
          <Link to="" className={classes.link}><img src={face} alt="" /></Link>
        </div>
      </div>

      {/* menu */}
      <div className={classes.menu} onClick={() => setShow(!show)}>
        <MenuIcon fontSize="large" />
        <Link to="/profile" className={classes.link}><img src={face} alt="" /></Link>

      </div>
      {
        userInfo && (
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { handleClose(userInfo._id) }}>Reset Password</MenuItem>
          </Menu>
        )
      }
      {
        managerInfo && (
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { handleClose(managerInfo._id) }}>Reset Password</MenuItem>
          </Menu>
        )
      }

      {
        show && <div className={classes.mobilenav}>
          <div className={classes.close} onClick={() => setShow(!show)}>
            <CloseIcon fontSize="large" />
          </div>
          <ul className={classes.list}>
            <li className={classes.subListItem}>
              <Link to="/settings" onClick={() => setShow(!show)}>Settings</Link>
            </li>
            <li className={classes.subListItem}>
              <Link to="/notifications" onClick={() => setShow(!show)}>Notifications</Link>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

export default Navbar