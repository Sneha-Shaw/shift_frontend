import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import { ApprovalLogic } from './ApprovalLogic'

const Approvals = () => {
    const classes = useStyles()
    const {
        leaves,
        specialRequests,
        approveLeaveHandler,
        denyLeaveHandler,
        approveSpecialRequestHandler,
        denySpecialRequestHandler
    } = ApprovalLogic();

    // tabs
    const [tab, setTab] = useState(0)
    // changetab
    const changeTab = (index) => {
        setTab(index)
    }
    const isMobile = window.innerWidth <= 600;
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
                        // height: '60vh'
                    }}
                >
                    {
                        tab === 0 && (
                            <div className={classes.specialReq}>
                                {
                                    specialRequests && specialRequests.getSpecialRequests.map((item, index) => (
                                        <div className={classes.specialReqItem} key={index}>
                                            <div className={classes.specialReqItemHeader}>
                                                <h3>{item.username}</h3>

                                            </div>
                                            <div className={classes.specialReqItemContent}>
                                                <p><strong>Request: </strong>{item.request}</p>
                                                {
                                                    item.requestStatus === 'awaiting' &&
                                                    <div className={classes.HeaderBtn}>
                                                        <Button variant="contained" className={classes.acceptBtn}
                                                            onClick={() => approveSpecialRequestHandler(item._id)}
                                                        >Accept</Button>
                                                        <Button variant="contained" className={classes.rejectBtn}
                                                            onClick={() => denySpecialRequestHandler(item._id)}
                                                        >Reject</Button>
                                                    </div>
                                                }
                                                {
                                                    item.requestStatus === 'approved' &&
                                                    <div className={classes.HeaderBtn}>
                                                        <Button variant="contained" className={classes.acceptBtn}
                                                            disabled
                                                        >Accepted</Button>
                                                    </div>

                                                }
                                                {
                                                    item.requestStatus === 'declined' &&
                                                    <div className={classes.HeaderBtn}>
                                                        <Button variant="contained" className={classes.rejectBtn}
                                                            disabled
                                                        >Rejected</Button>
                                                    </div>

                                                }

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
                                    leaves && leaves.getAllLeaves.map((item, index) => (
                                        <div className={classes.leaveReqItem} key={index}>
                                            <div className={classes.leaveReqItemHeader}>
                                                <h3>{item.username}</h3>

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
                                                    <h4>Type</h4>
                                                    <p>
                                                        {/* first letter cap */}
                                                        {item.leaveType.charAt(0).toUpperCase() + item.leaveType.slice(1)}
                                                    </p>
                                                </div>
                                                {
                                                    item.leaveStatus === 'awaiting' && !isMobile && (
                                                        <div className={classes.HeaderBtn}>
                                                            <Button variant="contained" className={classes.acceptBtn}
                                                                onClick={() => approveLeaveHandler(item._id)}
                                                            >Accept</Button>
                                                            <Button variant="contained" className={classes.rejectBtn}
                                                                onClick={() => denyLeaveHandler(item._id)}
                                                            >Reject</Button>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    item.leaveStatus === 'approved' &&
                                                    <div className={classes.HeaderBtn}>
                                                        <Button variant="contained" className={classes.acceptBtn}
                                                            disabled
                                                        >Accepted</Button>
                                                    </div>
                                                }
                                                {
                                                    item.leaveStatus === 'declined' &&
                                                    <div className={classes.HeaderBtn}>
                                                        <Button variant="contained" className={classes.rejectBtn}
                                                            disabled
                                                        >Rejected</Button>
                                                    </div>
                                                }

                                            </div>
                                            <div className={classes.leaveReqItemFooter}>
                                                <p><strong>Reason: </strong>{item.leaveReason}</p>
                                            </div>
                                            {
                                                item.leaveStatus === 'awaiting' && isMobile && (
                                                    <div className={classes.HeaderBtn}>
                                                        <Button variant="contained" className={classes.acceptBtn}
                                                            onClick={() => approveLeaveHandler(item._id)}
                                                        >Accept</Button>
                                                        <Button variant="contained" className={classes.rejectBtn}
                                                            onClick={() => denyLeaveHandler(item._id)}
                                                        >Reject</Button>
                                                    </div>
                                                )
                                            }
                                          
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