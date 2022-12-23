import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'

const DailyView = () => {
    const classes = useStyles()
    
    const doctorInfo = null
    const managerInfo = "hi"


    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>

            </div>
        </div>
    )
}

export default DailyView