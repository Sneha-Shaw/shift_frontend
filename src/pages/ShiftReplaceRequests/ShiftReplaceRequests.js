import React from 'react'
import useStyles from './styles'
import { ShiftReplaceRequestsLogic } from './ShiftReplaceRequestsLogic'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'

const ShiftReplaceRequests = () => {
    const classes = useStyles()
    const {requests } = ShiftReplaceRequestsLogic()
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                <h1>Shift Replace Requests</h1>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Shift Date</th>
                            <th>Shift Time</th>
                            <th>Doctor Name</th>
                            <th>Replacement</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            requests?.getShiftReplaceRequests?.map((request,index) => (
                                <tr key={index}>
                                    <td>{request.date}</td>
                                    <td>{request.start}-{request.end}</td>
                                    <td>{request.name}</td>
                                    <td>{request.replacement}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ShiftReplaceRequests