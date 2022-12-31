import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { LeaveLogic } from './LeaveLogic';

const Leave = () => {
    const classes = useStyles()
    // array of leave duration start date end date type of leave and leave declined or approved

    const {
        leaves,
        show,
        setShow,
        options,
        defaultOption,
        setLeaveType,
        leaveReason,
        setLeaveReason,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        addLeave
    } = LeaveLogic()
    return (
        <div className={classes.root}

        >
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}
                style={{
                    height: show ?
                        '70vh' :
                        (leaves?.length > 4 ? 'fit-content' :
                        '72vh')
                }}>
                {
                    (show) && (
                        <div className={classes.back}>
                            <Button
                                onClick={() => setShow(!show)}
                            >
                                Back
                            </Button>
                        </div>
                    )
                }
                {
                    show ? (
                        <div className={classes.main__form}>
                            <div className={classes.header}>

                                <h1 style={{ color: "#06283D" }}>Apply for Leave</h1>
                            </div>
                            {/* <div className={classes.main__content}> */}
                            <div className={classes.main__content__form}>
                                {/* from: day,date,month time input am pm dropdown */}
                                <div className={classes.main__content__form__input}>
                                    <label >From:</label>

                                    <div className={classes.main__content__form__input__div}>
                                        <input type="date"
                                            style={{ width: "96%" }}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            value={startDate} />

                                    </div>

                                </div>

                                {/* to: day,date,month time input am pm dropdown */}
                                <div className={classes.main__content__form__input}>
                                    <label >To:</label>

                                    <div className={classes.main__content__form__input__div}>
                                        <input type="date" style={{ width: "96%" }} onChange={(e) => setEndDate(e.target.value)} value={endDate} />

                                    </div>

                                </div>

                                <div className={classes.main__content__form__input}>
                                    <label htmlFor="type">Type of Leave:</label>
                                    <div className={classes.main__content__form__input__div}>

                                        <Dropdown options={options} value={defaultOption} placeholder="Select an option"
                                            onChange={(e) => setLeaveType(e.value)}
                                        />
                                    </div>
                                </div>
                                <div className={classes.main__content__form__input}>
                                    <label htmlFor="reason">Reason:</label>
                                    <div className={classes.main__content__form__input__div}>

                                        <textarea name="reason" id="reason" cols="30" rows="10"
                                            onChange={(e) => setLeaveReason(e.target.value)}
                                            value={leaveReason}
                                        />
                                    </div>
                                </div>
                                <div className={classes.main__content__form__input}>
                                    <Button variant="contained" color="primary" onClick={addLeave}>Apply</Button>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>

                    )
                        :

                        <>
                            <div className={classes.main__header}>
                                <h1>Leaves</h1>
                                <div className={classes.main__header__buttons}>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        className={classes.main__header__buttons__add}
                                        onClick={() => setShow(true)}
                                    >
                                        Request Leave
                                    </Button>
                                </div>
                            </div>
                            <div className={classes.main__content}>
                                {
                                    leaves?.length !== 0
                                        ?
                                        (
                                            leaves?.map((item, index) => (
                                                <div className={classes.main__content__item} key={index}>
                                                    <div className={classes.main__content__item__left}>
                                                        <div>
                                                            <h2>
                                                                {/* subtract first position from end date and start date */}
                                                                {item.endDate.split("/")[0] - item.startDate.split("/")[0]} Days
                                                                Application</h2>
                                                            <p
                                                                style={{
                                                                    color: item.leaveType === "casual" ? "#F0AB00" : "#4BACE8",
                                                                    border: item.leaveType === "casual" ? "1px solid #F0AB00" : "1px solid #4BACE8",
                                                                    padding: "0.3rem",
                                                                    borderRadius: ".5rem",
                                                                }}
                                                            >{item.leaveType}</p>
                                                        </div>
                                                        <p>{item.startDate} - {item.endDate}</p>
                                                        {/* leavereason */}
                                                        <br />
                                                        <p>Reason: {item.leaveReason}</p>
                                                    </div>
                                                    <div className={classes.main__content__item__right}>
                                                        <Button variant="contained"
                                                            sx={{
                                                                background: item.leaveStatus === "awaiting" ? "#FCEFCF" : item.leaveStatus === "approved" ? "#D4FFE7" : "#FEEFED",
                                                                color: item.leaveStatus === "awaiting" ? "#F0AB00" : item.leaveStatus === "approved" ? "#00B74A" : "#FF0000",
                                                                '&:hover': {
                                                                    background: item.leaveStatus === "awaiting" ? "#FCEFCF" : item.leaveStatus === "approved" ? "#D4FFE7" : "#FEEFED",
                                                                    color: item.leaveStatus === "awaiting" ? "#F0AB00" : item.leaveStatus === "approved" ? "#00B74A" : "#FF0000",
                                                                }
                                                            }}
                                                        >{item.leaveStatus}</Button>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                        :
                                        (
                                            <div className={classes.main__content__item}>
                                                <div style={{
                                                    textAlign: "center",
                                                    width: "100%"
                                                }}>
                                                    <h2>No leaves applied yet</h2>
                                                </div>

                                            </div>
                                        )

                                }

                            </div>
                        </>

                }

            </div >

        </div >
    )
}

export default Leave