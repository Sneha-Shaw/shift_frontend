import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'

const Schedule = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <Sidebar />
        <div className={classes.main}>
            <h1>Schedule</h1>
            
        </div>
    </div>
  )
}

export default Schedule