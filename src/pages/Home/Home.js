import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const classes = useStyles()
  const { managerInfo } = useSelector((state) => state.signInManager)
  // get user name
  const user = managerInfo?.name
  const navigate = useNavigate()
  const notifications = [
    {
      id: 1,
      title: "Duty Replacement",
      description: "Dr. jane have been assigned to replace Dr. John Doe on 12/12/2022",
      date: "12/12/2022",
      start: "8:00 AM",
      end: "11:00 AM"
    },
    {
      id: 2,
      title: "Duty Replacement",
      description: "Dr. jane have been assigned to replace Dr. John Doe on 12/12/2022",
      date: "12/12/2022",
      start: "8:00 AM",
      end: "11:00 AM"
    }
  ]
  return (
    <div className={classes.root}>
      <Sidebar />
      {/* Wlcome */}
      <div className={classes.main}>
        <div className={classes.welcome}>
          <h1>Welcome Back, {user}</h1>
          {
            managerInfo && <Button variant="contained" color="primary"
            onClick={() => navigate('/attendance/doctors')}
            >Add New Doctor</Button>
          }
           
        </div>
        {/* notifications */}
        <div className={classes.notifications}>
          <div className={classes.header}>
            <h2>Latest Notifications (2)</h2>
            <p
              onClick={() => navigate('/notifications')}
            >
              See All
            </p>
          </div>
          <div className={classes.notificationsList}>
            {notifications.map((notification) => (
              <div className={classes.notification} key={notification.id}>
                <div className={classes.notificationHeader}>
                  <h3>{notification?.title}</h3>
                  <p>{notification?.date}</p>
                </div>
                <p>{notification.description}</p>
                <p>{notification?.start} - {notification?.end}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home