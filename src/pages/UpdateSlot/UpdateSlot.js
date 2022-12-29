import React from 'react'
import useStyles from './styles'
import { UpdateSlotLogic } from './UpdateSlotLogic'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'

const UpdateSlot = () => {
    const classes = useStyles()
    const { } = UpdateSlotLogic()
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}></div>
        </div>
    )
}

export default UpdateSlot