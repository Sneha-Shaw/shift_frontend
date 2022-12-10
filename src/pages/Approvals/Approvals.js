import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'

const Approvals = () => {
    const classes = useStyles()
    // special requests array
    const specialReq = [
        {
            name: 'Dr. John Doe',
            request: 'He is given a break from 4 PM to 5 PM for Yoga during the month of November'
        },
        {
            name: 'Dr. Jane Doe',
            request: 'She is given a break from 4 PM to 5 PM for Yoga during the month of November'
        }
    ]
    // leave requests array
    const leaveReq = [
        {
            name: 'Dr. John Doe',
            startDate: "Mon, 5th Dec",
            endDate: "Mon, 5th Dec",
            duration: "1 Day",
            type: "Casual",
            status: "awaiting"
        },
        {
            name: 'Dr. Jane Doe',
            startDate: "Mon, 5th Dec",
            endDate: "Mon, 5th Dec",
            duration: "1 Day",
            type: "Casual",
            status: "awaiting"
        }
    ]
    // tabs
    const [tab, setTab] = useState(0)
    // changetab
    const changeTab = (index) => {
        setTab(index)
    }

    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                {/* <div className={classes.header}> */}
                <div className={classes.tabs}>
                    <div className={tab === 0 ? classes.activeTab : classes.tab} onClick={() => changeTab(0)}>
                        Special Requests
                    </div>
                    <div className={tab === 1 ? classes.activeTab : classes.tab} onClick={() => changeTab(1)}>
                        Leave Requests
                    </div>
                </div>
                {/* </div> */}
                <div className={classes.content}
                style={{
                    height: '60vh'
                }}
                >
                    {
                        tab === 0 && (
                            <div className={classes.specialReq}>
                                {
                                    specialReq.map((item, index) => (
                                        <div className={classes.specialReqItem} key={index}>
                                            <div className={classes.specialReqItemHeader}>
                                                <h3>{item.name}</h3>

                                            </div>
                                            <div className={classes.specialReqItemContent}>
                                                <p><strong>Request: </strong>{item.request}</p>
                                                <div className={classes.HeaderBtn}>
                                                    <Button  variant="contained" className={classes.acceptBtn}>Accept</Button>
                                                    <Button  variant="contained" className={classes.rejectBtn}>Reject</Button>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                    {
                        tab === 1 && (
                            <div className={classes.leaveReq}>
                                {
                                    leaveReq.map((item, index) => (
                                        <div className={classes.leaveReqItem} key={index}>
                                            <div className={classes.leaveReqItemHeader}>
                                                <h3>{item.name}</h3>
                                              
                                            </div>
                                            <div className={classes.leaveReqItemContent}>
                                                <div className={classes.leaveReqItemContentItem}>
                                                    <h4>Start Date</h4>
                                                    <p>{item.startDate}</p>
                                                </div>
                                                <div className={classes.leaveReqItemContentItem}>
                                                    <h4>End Date</h4>
                                                    <p>{item.endDate}</p>
                                                </div>
                                                <div className={classes.leaveReqItemContentItem}>
                                                    <h4>Duration</h4>
                                                    <p>{item.duration}</p>
                                                </div>
                                                <div className={classes.leaveReqItemContentItem}>
                                                    <h4>Type</h4>
                                                    <p>{item.type}</p>
                                                </div>
                                                <div className={classes.leaveReqItemContentItem}>
                                                    <h4>Status</h4>
                                                    <p>{item.status}</p>
                                                </div>
                                                <div className={classes.HeaderBtn}>
                                                    <Button variant="contained" className={classes.acceptBtn}>Accept</Button>
                                                    <Button variant="contained" className={classes.rejectBtn}>Reject</Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        // </div >
    )
}


export default Approvals