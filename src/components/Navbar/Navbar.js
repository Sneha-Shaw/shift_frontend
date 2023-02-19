import React from 'react'
import useStyles from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
    color,
    managerInfo,
    id,
    name,
    setName,
    handleSearch
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
          <input type="text" placeholder="Search Doctors" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' ? handleSearch(e) : null}
          />
          <div className={classes.searchIcon}>
            <SearchIcon fontSize="large" />
          </div>
        </div>
        {/* nav links */}
        <div className={classes.navLinks}>
          {
            userInfo ? (
              <Avatar sx={{
                width: 32,
                height: 32,
                backgroundColor: color,
                cursor: "pointer"
              }}
                onClick={handleClick}>
                {userInfo?.name?.slice(4, 5).toUpperCase()}
              </Avatar>
            ) : (
              <Avatar sx={{
                width: 32,
                height: 32,
                backgroundColor: color,
                cursor: "pointer"
              }}
                onClick={handleClick}>
                {managerInfo?.name?.charAt(0).toUpperCase()}
              </Avatar>
            )
          }

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
              mr: 1
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            {
              userInfo ? (
                <Avatar sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: color,
                }}>
                  {userInfo?.name?.slice(4, 5).toUpperCase()}
                </Avatar>
              ) : (
                <Avatar sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: color,
                }}>
                  {managerInfo?.name?.charAt(0).toUpperCase()}
                </Avatar>
              )
            }
          </ListItemIcon>
          {
            userInfo ? (
              <div>
                <h4>{userInfo?.name}</h4>
                <p>{userInfo?.email}</p>
              </div>
            ) : (
              <div>
                <h4>{managerInfo?.name}</h4>
                <p>{managerInfo?.email}</p>
              </div>
            )
          }
          
        </MenuItem>
        {/* <MenuItem
          onClick={() => navigate(`/notifications`)}
        >
          <ListItemIcon>
            <NotificationsNoneIcon fontSize="large" sx={{ color: "#06283D" }} />
          </ListItemIcon>
          Notifications
        </MenuItem> */}
        <MenuItem
          onClick={() => navigate(`/reset-password/${id}`)}>
          <ListItemIcon>
            <LockResetIcon fontSize="large" sx={{ color: "#06283D" }} />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => navigate(`/settings`)}
        >
          <ListItemIcon>
            <SettingsIcon fontSize="large" sx={{ color: "#06283D" }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="large" sx={{ color: "#06283D" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      {/* menu */}
      <div className={classes.menu}>
        <MenuIcon fontSize="large"  onClick={() => setShow(!show)} />
        <Avatar sx={{
          width: 32,
          height: 32,
          backgroundColor: color,
        }}>
          {userInfo?.name?.slice(4, 5).toUpperCase()}
        </Avatar>
      </div>

      {
        show && <div className={classes.mobilenav}>
          <div className={classes.close} onClick={() => setShow(!show)}>
            <CloseIcon fontSize="large" />
          </div>
          <div className={classes.mobilenavlinks}>
            {/* <div className={classes.mobilenavlink}
              onClick={() => navigate(`/notifications`)}
            >
              <NotificationsNoneIcon fontSize="large" sx={{ color: "#06283D" }} />
              <p>Notifications</p>
            </div> */}
            <div className={classes.mobilenavlink}
              onClick={() => navigate(`/settings`)}
            >
              <SettingsIcon fontSize="large" sx={{ color: "#06283D" }} />
              <p>Settings</p>
            </div>
            <div className={classes.mobilenavlink}
              onClick={() => navigate(`/reset-password/${id}`)}
            >
              <LockResetIcon fontSize="large" sx={{ color: "#06283D" }} />
              <p>Reset Password</p>
            </div>
            <div className={classes.mobilenavlink}
              onClick={handleLogout}
            >
              <LogoutIcon fontSize="large" sx={{ color: "#06283D" }} />
              <p>Logout</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar