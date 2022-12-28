import React, { useEffect, useState } from 'react'
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
import { Avatar } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavbarLogic } from './NavbarLogic';

const Navbar = () => {
  const classes = useStyles()
 
const {
  handleLogout,
  show,
  setShow,
  anchorEl,
  open,
  handleClick,
  handleClose,
  userInfo,
  navigate,
  color
} = NavbarLogic()
  
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

          <Avatar sx={{
            width: 32,
            height: 32,
            backgroundColor: color,
          }}
            onClick={handleClick}>
            {userInfo?.name?.slice(4, 5).toUpperCase()}
          </Avatar>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              
            // hover color
            '&:hover': {
              bgcolor: 'red',
            }
            }}
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <Avatar sx={{
              width: 32,
              height: 32,
              backgroundColor: color,
            }}>
              {userInfo?.name?.slice(4, 5).toUpperCase()}
            </Avatar>
          </ListItemIcon>
          {userInfo?.name}
        </MenuItem>
        <MenuItem
          onClick={() => navigate(`/notifications`)}
        >
          <ListItemIcon>
            <NotificationsNoneIcon fontSize="large" sx={{color: "#06283D"}} />
          </ListItemIcon>
          Notifications
        </MenuItem>
        <MenuItem
          onClick={() => navigate(`/reset-password/${userInfo._id}`)}
        >
          <ListItemIcon>
            <LockResetIcon fontSize="large" sx={{color: "#06283D"}} />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => navigate(`/settings`)}
        >
          <ListItemIcon>
            <SettingsIcon fontSize="large" sx={{color: "#06283D"}}  />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="large" sx={{color: "#06283D"}}  />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      {/* menu */}
      <div className={classes.menu} onClick={() => setShow(!show)}>
        <MenuIcon fontSize="large" />
        <Link to="/profile" className={classes.link}><img src={face} alt="" /></Link>

      </div>

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