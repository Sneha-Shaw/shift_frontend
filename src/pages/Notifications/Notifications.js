import React from 'react'
import useStyles from './styles'

const Notifications = () => {
    const classes = useStyles()
    // notifictions array
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
            title: "Duty Swap",
            description: "Dr. jane have been assigned to replace Dr. John Doe on 12/12/2022",
            date: "12/12/2022",
            start: "8:00 AM",
            end: "11:00 AM"
        }
    ]
    return (
        <div className={classes.root}>
            <h1>Notifications</h1>
            <div className={classes.notifications}>
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
    )
}

export default Notifications