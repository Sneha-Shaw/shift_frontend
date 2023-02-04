import React from 'react'
import useStyles from './styles'
import { UpdateSlotLogic } from './UpdateSlotLogic'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const UpdateSlot = () => {
    const classes = useStyles()
    const {
        show,
        setShow,
        slots,
        slotOptions,
        slot,
        setSlot,
        date,
        setDate,
        setDoctorsNeeded,
        setSeniorNeeded,
        doctorsNeeded,
        seniorNeeded,
        submitHandler,
        searchslot,
        setSearchslot
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
                                    <label>Select Date:</label>
                                    <div>
                                        <input
                                            type="number"
                                            onChange={(e) => {
                                                setDate(e.target.value)
                                            }}
                                            value={date}
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
                        <div className={classes.slotTable}>

                            <div className={classes.tableHeader}>
                                <h1>Slots</h1>
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    className={classes.main__header__buttons__add}
                                    onClick={() => setShow(true)}
                                >
                                    Update Slots
                                </Button>
                            </div>
                            <div className={classes.tableBody}>
                                <div className={classes.slotSelect}>
                                    <label>Select Slot:</label>
                                    <div>
                                        <Dropdown
                                            options={slotOptions}
                                            placeholder="Select an option"
                                            onChange={(e) => {
                                                setSearchslot(e.value)
                                            }}
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Doctors Needed</th>
                                            <th>Seniors Needed</th>
                                            <th>Update</th>
                                        </tr>
                                    </thead>

                                    {/* map allotment of slot */}
                                    {
                                        slots && slots.getAllSlots.map((slot, index) => (
                                            <tbody key={index}>
                                                {/* check if current slot is same as searchslot then map allotment */}
                                                {(slot?.slotTime === searchslot) ?
                                                    slot?.Allotment?.map((allotment, index) => (
                                                        <tr key={index}>
                                                            <td>{allotment.date}</td>
                                                            <td>{allotment.DoctorsNeeded}</td>
                                                            <td>{allotment.SeniorNeeded}</td>
                                                            <td>
                                                                <Button
                                                                    variant="contained"
                                                                    onClick={() => {
                                                                        setShow(!show)
                                                                        setDate(allotment.date)
                                                                        setSlot(slot.slotTime)
                                                                        setDoctorsNeeded(allotment.DoctorsNeeded)
                                                                        setSeniorNeeded(allotment.SeniorNeeded)
                                                                    }}
                                                                >
                                                                    Update
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    : null
                                                }

                                            </tbody>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                }
            </div>
        </div >
    )
}

export default UpdateSlot