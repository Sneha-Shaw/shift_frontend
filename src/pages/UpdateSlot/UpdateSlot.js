import React from 'react'
import useStyles from './styles'
import { UpdateSlotLogic } from './UpdateSlotLogic'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const UpdateSlot = () => {
    const classes = useStyles()
    const {
        show,
        setShow,
        slots,
        days,
        slotOptions,
        slot,
        setSlot,
        day,
        setDay,
        setDoctorsNeeded,
        setSeniorNeeded,
        doctorsNeeded,
        seniorNeeded,
        submitHandler,
    } = UpdateSlotLogic()
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                {
                    (show) && (
                        <div className={classes.back}>
                            <Button
                                // variant="contained"
                                //    if addshow is true then setaddshow false else if updateshow is true then setupdateshow false
                                onClick={() => setShow(!show)}
                            >
                                Back
                            </Button>
                        </div>
                    )
                }
                {
                    show ?
                        <div className={classes.form}>
                            <div className={classes.formHeader}>
                                <h1>Update Slot</h1>
                            </div>
                            <div className={classes.formBody}>
                                <div className={classes.formBodyItem}>
                                    <label>Select Day:</label>
                                    <div>
                                        <Dropdown
                                            options={days}
                                            placeholder="Select an option"
                                            onChange={(e) => {
                                                setDay(e.value)
                                            }}
                                            value={day}
                                        />
                                    </div>
                                </div>
                                <div className={classes.formBodyItem}>
                                    <label>Select Slot:</label>
                                    <div>
                                        <Dropdown
                                            options={slotOptions}
                                            placeholder="Select an option"
                                            onChange={(e) => {
                                                setSlot(e.value)
                                            }}
                                            value={slot}
                                        />
                                    </div>
                                </div>
                                <div className={classes.formBodyItem}>
                                    <label>Doctors Needed:</label>
                                    <input type="number"
                                        onChange={(e) => {
                                            setDoctorsNeeded(e.target.value);
                                        }}
                                        value={doctorsNeeded}
                                    />
                                </div>
                                <div className={classes.formBodyItem}>
                                    <label>Seniors Needed:</label>
                                    <input type="number"
                                        onChange={(e) => {
                                            setSeniorNeeded(e.target.value)
                                        }}
                                        value={seniorNeeded}
                                    />
                                </div>
                            </div>
                            <Button
                                variant="contained"
                                className={classes.formButton}
                                onClick={submitHandler}
                            >
                                Update
                            </Button>

                        </div>
                        :
                        <div className={slots}>
                            <Button
                                variant="contained"
                                className={classes.formButton}
                                onClick={() => setShow(!show)}
                            >
                                Update Slot
                            </Button>
                        </div>
                }
            </div>
        </div >
    )
}

export default UpdateSlot