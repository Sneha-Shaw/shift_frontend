import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'

const Break = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
        </div>
    )
}

export default Break