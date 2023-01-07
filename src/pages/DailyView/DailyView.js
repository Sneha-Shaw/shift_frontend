import React, { useRef } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { ViewLogic } from './ViewLogic'
import { DownloadTableExcel } from 'react-export-table-to-excel'
import { Button, Modal } from '@mui/material'
// import AddIcon from '@mui/icons-material/Add';

const DailyView = () => {
    const classes = useStyles()
    const {
        managerInfo,
        user,
        calender,
        slots,
        doctors,
        shifts,
        show,
        setShow,
        show2,
        setShow2,
        domain,
        setDomain
        // show3,
        // setShow3
    } = ViewLogic()
    // const domain = "ecg"
    const dateRange = "2023-1-12 to 2023-2-12"
    const tableRef = useRef(null);
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                <div className={classes.grid}>
                    <div className={classes.btnheader}>
                        <DownloadTableExcel
                            // filename ={ecg_dateRange}
                            filename={`${domain}_${dateRange}`}
                            sheet="users"
                            currentTableRef={tableRef.current}>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Export to Excel
                            </Button>
                        </DownloadTableExcel>
                        {
                            managerInfo && (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        width: "70%"
                                    }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => setShow2(true)}
                                    >
                                        Generate Roster manually
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                    >
                                        Generate Roster Automatically
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => setShow(true)}
                                    >
                                        Create Shift
                                    </Button>
                                </div>
                            )
                        }

                    </div>
                    <Modal
                        open={show2}
                        onClose={() => setShow2(false)}
                        className={classes.modal}
                    >
                        <div className={classes.modalContent}>
                            <div className={classes.modalHeader}>
                                <h1>Generate Roster Manually</h1>
                                <Button
                                    onClick={() => setShow2(false)}
                                >
                                    X
                                </Button>
                            </div>
                            <div className={classes.modalBodyItem} style={{
                                width: "70%",
                                display: "flex",
                                justifyContent: "space-between",
                                margin: "1rem 0"

                            }}>
                                <input
                                    type="number"
                                    placeholder="Enter no. of days to generate roster"
                                    style={{
                                        width: '60%',
                                        padding: "1rem",
                                        border: "1px solid #ccc",
                                        borderRadius: "0.5rem",
                                        outline: "none"

                                    }}
                                />
                                {/* choose domain */}
                                <select
                                    style={{
                                        width: '30%',
                                        padding: "1rem",
                                        border: "1px solid #ccc",
                                        borderRadius: "0.5rem",
                                        outline: "none"

                                    }}
                                >
                                    <option value="1">Choose Domain</option>
                                    <option value="2">ECG</option>
                                    <option value="3">ECHO</option>
                                </select>

                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    width: "20%",
                                    background: "#06283D",
                                    fontSize: "1.2rem",
                                    margin: "1rem 0",
                                    '&:hover': {
                                        background: "rgba(6, 40, 61,0.9)"
                                    }
                                }}
                            >
                                Generate
                            </Button>
                        </div>
                    </Modal>
                    <Modal
                        open={show}
                        onClose={() => setShow(false)}
                        className={classes.modal}
                    >
                        <div className={classes.modalContent}>
                            <div className={classes.modalHeader}>
                                <h1>Create Shift</h1>
                                <Button
                                    onClick={() => setShow(false)}
                                >
                                    X
                                </Button>
                            </div>
                            <hr className={classes.hr} />
                            <div className={classes.modalBody}>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="domain">Select Domain</label>
                                    <select
                                        name="domain"
                                        id="domain"
                                        className={classes.modalBodyItemSelect}
                                        onChange={(e) => setDomain(e.target.value)}
                                    >
                                        <option value="">Select Domain</option>
                                        <option value="">ECG</option>
                                        <option value="">ECHO</option>
                                    </select>
                                </div>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="date">Select Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className={classes.modalBodyItemInput}
                                    />
                                </div>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="slot">Select Slot</label>
                                    <select
                                        name="slot"
                                        id="slot"
                                        className={classes.modalBodyItemSelect}
                                    >
                                        <option value="">Select Slot</option>
                                        {
                                            slots?.getAllSlots?.map((slot, slotIndex3) => (
                                                <option value={slot.slotTime} key={slotIndex3}>
                                                    {slot.slotTime}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="doctor">Select Doctor:</label>
                                    <div style={{
                                        height: "20rem",
                                        overflowY: "scroll",
                                    }}>
                                        {
                                            doctors?.getAllDoctors?.map((doctor, doctorAddIndex) => (
                                                <div key={doctorAddIndex}>
                                                    {/* checkbox */}
                                                    <input
                                                        type="checkbox"
                                                        name="doctor"
                                                        id="doctor"
                                                        value={doctor._id}
                                                    // onChange={(e) => handleAdd(e)}
                                                    />
                                                    <label htmlFor="doctor">{doctor.name}</label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <hr className={classes.hr} />
                            <div className={classes.modalFooter}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Create
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setShow(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Modal>
                    {
                        managerInfo ?
                            <div className={classes.domain}>
                                <label
                                    htmlFor="domain"
                                    className={classes.domainLabel}
                                >
                                    Select A Domain to view Roster:
                                </label>
                                <select
                                    name="domain"
                                    id="domain"
                                    className={classes.domainSelect}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="">ECG</option>
                                    <option value="">ECHO</option>
                                </select>
                            </div>
                            :
                            <div className={classes.domain}>
                                <label
                                    htmlFor="domain"
                                    className={classes.domainLabel}
                                >
                                    Select A Domain to view Roster:
                                </label>
                                {
                                    user && user?.ecg && user?.echo ?
                                        <select
                                            name="domain"
                                            id="domain"
                                            className={classes.domainSelect}
                                        // onChange={(e) => handleDomain(e)}
                                        >
                                            <option value="">Select Domain</option>
                                            <option value="ecg">ECG</option>
                                            <option value="echo">ECHO</option>
                                        </select>
                                        :
                                        user && user?.ecg ?
                                            <input
                                                type="text"
                                                name="domain"
                                                id="domain"
                                                className={classes.domainSelect}
                                                value="ECG"
                                                disabled
                                            />
                                            :
                                            user && user?.echo ?
                                                <input
                                                    type="text"
                                                    name="domain"
                                                    id="domain"
                                                    className={classes.domainSelect}
                                                    value="ECHO"
                                                    disabled
                                                />
                                                :
                                                <input
                                                    type="text"
                                                    name="domain"
                                                    id="domain"
                                                    className={classes.domainSelect}
                                                    value="No Domain"
                                                    disabled
                                                />

                                }
                            </div>
                    }
                    <div className={classes.tableContainer}>
                        <table className={classes.table}>
                            <thead>
                                <tr>
                                    <th><div>Date</div></th>
                                    <th>
                                        <div>Day</div>
                                    </th>
                                    <th>
                                        <div>Doctors</div>
                                    </th>
                                    <th>
                                        <div>Total Duty Hours</div>
                                    </th>
                                    <th>
                                        <div>Hours Entitled to</div>
                                    </th>
                                    {
                                        slots?.getAllSlots?.map((slot, slotIndex1) => (
                                            <th className={classes.dateHeader} key={slotIndex1}>
                                                <div>
                                                    {slot.slotTime}
                                                </div>
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    calender?.getCalendar?.calendarArray?.map((date, calendarIndex) =>
                                        <tr key={calendarIndex}>
                                            <td>
                                                {
                                                    //doctor.getAllDoctors length and map the div 
                                                    doctors?.getAllDoctors?.map((doctor, docindex) => (
                                                        <div key={doctor?._id} style={{
                                                            borderTop: ".5px solid #06283D",
                                                            borderLeft: ".5px solid #06283D",
                                                            borderRight: ".5px solid #06283D",
                                                            width: "100%",
                                                            height: "4rem",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            // border of last child is #000
                                                            borderBottom: docindex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {date.dayNumber + '-' + date.dayMonth + '-' + date.dayYear}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    doctors?.getAllDoctors?.map((doctor, docindex) => (
                                                        <div key={doctor._id} style={{
                                                            borderTop: ".5px solid #06283D",
                                                            borderLeft: ".5px solid #06283D",
                                                            borderRight: ".5px solid #06283D",
                                                            width: "100%",
                                                            height: "4rem",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            // border of last child is #000
                                                            borderBottom: docindex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {date.dayName.slice(0, 3)}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    doctors?.getAllDoctors?.map((doctor, docindex) => (
                                                        <div key={doctor._id} style={{
                                                            borderTop: ".5px solid #06283D",
                                                            borderLeft: ".5px solid #06283D",
                                                            borderRight: ".5px solid #06283D",
                                                            width: "100%",
                                                            height: "4rem",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            // border of last child is #000
                                                            borderBottom: docindex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {doctor.name}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    doctors?.getAllDoctors?.map((doctor, docindex) => (
                                                        <div key={doctor._id} style={{
                                                            borderTop: ".5px solid #06283D",
                                                            borderLeft: ".5px solid #06283D",
                                                            borderRight: ".5px solid #06283D",
                                                            width: "100%",
                                                            height: "4rem",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            // border of last child is #000
                                                            borderBottom: docindex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {doctor.dutyHoursAllotedPerMonth}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    doctors?.getAllDoctors?.map((doctor, docindex) => (
                                                        <div key={doctor._id} style={{
                                                            borderTop: ".5px solid #06283D",
                                                            borderLeft: ".5px solid #06283D",
                                                            borderRight: ".5px solid #06283D",
                                                            width: "100%",
                                                            height: "4rem",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            // border of last child is #000
                                                            borderBottom: docindex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {doctor.dutyHoursPerMonth}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            {
                                                slots?.getAllSlots?.map((slot, slotIndex2) => (
                                                    <td className={classes.dateHeader} key={slotIndex2}>
                                                        <div>
                                                            {
                                                                doctors?.getAllDoctors?.map((doctor, doctorIndex6) => (
                                                                    <div key={doctorIndex6} style={{
                                                                        borderTop: ".5px solid #06283D",
                                                                        borderLeft: ".5px solid #06283D",
                                                                        borderRight: ".5px solid #06283D",
                                                                        width: "100%",
                                                                        height: "4rem",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        // border of last child is #000
                                                                        borderBottom: doctorIndex6 === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                                    }}>
                                                                        {/*  if current doctor is alloted at current shift then print 1  */}
                                                                        {
                                                                            shifts?.data?.map((shift, shiftIndex) => (
                                                                                <div key={shiftIndex} style={{
                                                                                    width: "100%",
                                                                                    height: "100%",
                                                                                }}>
                                                                                    {
                                                                                        shift?.doctors.map((doctorShift, doctorIndex7) => (


                                                                                            doctorShift === doctor._id && shift?.shiftDate === date.dayYear + '-' + date.dayMonth + '-' + date.dayNumber && shift?.shiftTime === slot.slotTime && (
                                                                                                <div key={doctorIndex7}
                                                                                                    style={{
                                                                                                        width: "100%",
                                                                                                        height: "100%",
                                                                                                    }}
                                                                                                    onClick={() => {
                                                                                                        console.log('not empty');
                                                                                                    }}
                                                                                                >
                                                                                                    1
                                                                                                </div>
                                                                                            )
                                                                                            // </div>
                                                                                        ))
                                                                                    }
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </td>
                                                ))
                                            }

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyView