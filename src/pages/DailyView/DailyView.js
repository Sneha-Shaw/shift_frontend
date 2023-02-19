import React, { useRef } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { ViewLogic } from './ViewLogic'
import { DownloadTableExcel } from 'react-export-table-to-excel'
import { Button, Modal } from '@mui/material'
// import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import SearchIcon from '@mui/icons-material/Search';

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
        domainOp,
        setDomainOp,
        show3,
        setShow3,
        getShifts,
        generateShiftManually,
        setStartDate,
        startDate,
        endDate,
        setEndDate,
        domain,
        setDomain,
        alldomains,
        handleOpen,
        temp,
        handleAddDoctors,
        handleRemoveDoctors,
        setDoctors,
        editdoctors,
        handleUpdate,
        handleCreate,
        setcreateDomain,
        createDomain,
        setcreateDate,
        createDate,
        setcreateSlot,
        createSlot,
        setcreateId,
        handleDelete,
        handleSearch,
        setName,
        name,
        searchData,
        generateShiftAutomatically
    } = ViewLogic()
    // console.log(editdoctors, "edit");
    // get current month's first date ex: 01-01-2023 and last date ex: 31-01-2023
    const date = new Date()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const dateRange = `${firstDay.getDate()}-${currentMonth + 1}-${currentYear} to ${lastDay.getDate()}-${currentMonth + 1}-${currentYear}`
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
                            filename={`${domainOp}_${dateRange}`}
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
                                        width: "80%"
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
                                        onClick={() => generateShiftAutomatically()}
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
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                margin: "1rem 0"

                            }}>
                                <input
                                    type="date"
                                    placeholder="Enter Start Date"
                                    style={{
                                        width: '30%',
                                        padding: "1rem",
                                        border: "1px solid #ccc",
                                        borderRadius: "0.5rem",
                                        outline: "none"

                                    }}
                                    onChange={(e) => { setStartDate(e.target.value); }}
                                    value={startDate}
                                />
                                <input
                                    type="date"
                                    placeholder="Enter End Date"
                                    style={{
                                        width: '30%',
                                        padding: "1rem",
                                        border: "1px solid #ccc",
                                        borderRadius: "0.5rem",
                                        outline: "none"
                                    }}
                                    onChange={(e) => { setEndDate(e.target.value); }}
                                    value={endDate}
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
                                    onChange={(e) => { setDomain(e.target.value); }}
                                    value={domain}
                                >
                                    <option value="">Choose Domain</option>
                                    {
                                        alldomains && alldomains.getAllDomains.map
                                            ((domain) => (
                                                <option key={domain._id} value={domain?.domainName}>{domain?.domainName}</option>
                                            ))
                                    }
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
                                onClick={generateShiftManually}
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
                                        onChange={(e) => { setcreateDomain(e.target.value); }}
                                        value={createDomain}

                                    >
                                        <option value="">Select Domain</option>
                                        {
                                            alldomains && alldomains.getAllDomains.map
                                                ((domain) => (
                                                    <option key={domain._id} value={domain?.domainName}>{domain?.domainName}</option>
                                                ))
                                        }
                                    </select>
                                </div>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="date">Select Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className={classes.modalBodyItemInput}
                                        onChange={(e) => { setcreateDate(e.target.value); }}
                                        value={createDate}
                                    />
                                </div>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="slot">Select Slot</label>
                                    <select
                                        name="slot"
                                        id="slot"
                                        className={classes.modalBodyItemSelect}
                                        onChange={(e) => {
                                            setcreateSlot(e.target.value);
                                            setcreateId(
                                                slots?.getAllSlots?.filter((slot) => slot.slotTime === e.target.value)[0]._id
                                            )
                                        }}
                                        value={createSlot}
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
                                    <div className={classes.search}>
                                        <input type="text" placeholder="Search Doctors"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            onKeyUp={(e) => e.key === 'Enter' ? handleSearch(e) : null}
                                        />
                                        <div className={classes.searchIcon}>
                                            <SearchIcon fontSize="large" />
                                        </div>
                                    </div>
                                    <div className={classes.doctorList}>
                                        {
                                            searchData ?
                                                searchData && searchData?.searchDoctor?.map((doctor, doctorAddIndex) => (
                                                    <div key={doctorAddIndex}>
                                                        {/* checkbox */}
                                                        <input
                                                            type="checkbox"
                                                            name="doctor"
                                                            id="doctor"
                                                            value={doctor._id}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setDoctors((prev) => [...prev, e.target.value]);
                                                                }
                                                                else {
                                                                    setDoctors((prev) => prev.filter((item) => item !== e.target.value));
                                                                }
                                                            }}
                                                            checked={
                                                                editdoctors.includes(doctor._id)
                                                            }
                                                        />
                                                        <label htmlFor="doctor">{doctor.name}</label>
                                                    </div>
                                                ))
                                                :

                                                doctors && doctors?.getAllDoctors?.map((doctor, doctorAddIndex) => (
                                                    <div key={doctorAddIndex}>
                                                        {/* checkbox */}
                                                        <input
                                                            type="checkbox"
                                                            name="doctor"
                                                            id="doctor"
                                                            value={doctor._id}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setDoctors((prev) => [...prev, e.target.value]);
                                                                }
                                                                else {
                                                                    setDoctors((prev) => prev.filter((item) => item !== e.target.value));
                                                                }
                                                            }}
                                                            checked={
                                                                editdoctors.includes(doctor._id)
                                                            }
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
                                    color="success"

                                    onClick={handleCreate}
                                >
                                    Create
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => setShow(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Modal>
                    <Modal
                        open={show3}
                        onClose={() => setShow3(false)}
                        className={classes.modal}
                    >
                        <div className={classes.modalContent}>
                            <div className={classes.modalHeader}>
                                <h1>Update Shift</h1>
                                <Button
                                    onClick={() => setShow3(false)}
                                >
                                    X
                                </Button>
                            </div>
                            <hr className={classes.hr} />
                            <div className={classes.modalBody}>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="domain"> Domain</label>
                                    <input
                                        type="text"
                                        name="domain"
                                        id="domain"
                                        className={classes.modalBodyItemInput}
                                        value={temp?.domain}
                                        disabled
                                    />
                                </div>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className={classes.modalBodyItemInput}
                                        value={temp?.date}
                                        disabled
                                    />
                                </div>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="slot">Slot</label>
                                    <input
                                        type="text"
                                        name="slot"
                                        id="slot"
                                        className={classes.modalBodyItemInput}
                                        value={temp?.slot}
                                        disabled
                                    />
                                </div>
                                <div className={classes.modalBodyItem}>
                                    <label htmlFor="doctor">Select Doctor:</label>
                                    <div className={classes.search}>
                                        <input type="text" placeholder="Search Doctors"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            onKeyUp={(e) => e.key === 'Enter' ? handleSearch(e) : null}
                                        />
                                        <div className={classes.searchIcon}>
                                            <SearchIcon fontSize="large" />
                                        </div>
                                    </div>
                                    <div className={classes.doctorList}>
                                        {
                                            searchData ?
                                                searchData && searchData?.searchDoctor?.map((doctor, doctorAddIndex) => (
                                                    <div key={doctorAddIndex}>
                                                        {/* checkbox */}
                                                        <input
                                                            type="checkbox"
                                                            name="doctor"
                                                            id="doctor"
                                                            value={doctor._id}
                                                            // check if doctor is already in shift
                                                            checked={temp?.doctors?.includes(doctor._id)}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    handleAddDoctors(
                                                                        doctor._id
                                                                    )
                                                                } else {
                                                                    handleRemoveDoctors(
                                                                        doctor._id
                                                                    )
                                                                }
                                                            }}
                                                        />
                                                        <label htmlFor="doctor">{doctor.name}</label>
                                                    </div>
                                                ))
                                                :
                                                doctors && doctors?.getAllDoctors?.map((doctor, doctorAddIndex) => (
                                                    <div key={doctorAddIndex}>
                                                        {/* checkbox */}
                                                        <input
                                                            type="checkbox"
                                                            name="doctor"
                                                            id="doctor"
                                                            value={doctor._id}
                                                            // check if doctor is already in shift
                                                            checked={temp?.doctors?.includes(doctor._id)}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    handleAddDoctors(
                                                                        doctor._id
                                                                    )
                                                                } else {
                                                                    handleRemoveDoctors(
                                                                        doctor._id
                                                                    )
                                                                }
                                                            }}
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
                                    color="success"
                                    onClick={handleUpdate}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => { setShow3(false); handleDelete(temp.id) }}
                                >
                                    Delete
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
                                    onChange={(e) => {
                                        setDomainOp(e.target.value);
                                        getShifts(e.target.value);
                                        // handleDomain(e.target.value)
                                    }}
                                    value={domainOp}

                                >
                                    <option value="">Select Domain</option>
                                    {
                                        alldomains && alldomains.getAllDomains.map
                                            ((domain) => (
                                                <option key={domain._id} value={domain?.domainName}>{domain?.domainName}</option>
                                            ))
                                    }
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
                                            onChange={(e) => {
                                                setDomainOp(e.target.value);
                                            }}
                                            value={domainOp}

                                        >
                                            <option value="">Select Domain</option>
                                            {
                                                alldomains && alldomains.getAllDomains.map
                                                    ((domain) => (
                                                        <option key={domain._id} value={domain?.domainName}>{domain?.domainName}</option>
                                                    ))
                                            }
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
                                            user && user?.echo &&
                                            <input
                                                type="text"
                                                name="domain"
                                                id="domain"
                                                className={classes.domainSelect}
                                                value="ECHO"
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
                                    shifts && shifts.data &&
                                    calender?.getCalendar?.calendarArray?.map((date, calendarIndex) =>
                                        <tr key={calendarIndex}>
                                            <td style={{
                                                position: "sticky",
                                                left: "0",
                                                background: "white"
                                            }}>
                                                {

                                                    doctors && doctors?.getAllDoctors?.map((doctor, docIndex) => (
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
                                                            borderBottom: docIndex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {date.dayNumber + '-' + date.dayMonth + '-' + date.dayYear}

                                                        </div>
                                                    ))

                                                }
                                            </td>
                                            <td >
                                                {
                                                    doctors && doctors?.getAllDoctors?.map((doctor, docIndex) => (
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
                                                            borderBottom: docIndex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {date.dayName.slice(0, 3)}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td >
                                                {
                                                    doctors && doctors?.getAllDoctors?.map((doctor, docIndex) => (
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
                                                            borderBottom: docIndex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {doctor.name}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    doctors && doctors?.getAllDoctors?.map((doctor, docIndex) => (
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
                                                            borderBottom: docIndex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                        }}>
                                                            {doctor.dutyHoursAllotedPerMonth}
                                                        </div>
                                                    ))

                                                }
                                            </td>
                                            <td>
                                                {
                                                    doctors && doctors?.getAllDoctors?.map((doctor, docIndex) => (
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
                                                            borderBottom: docIndex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
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
                                                                doctors && doctors?.getAllDoctors?.map((doctor, docIndex) => (
                                                                    <div key={docIndex} style={{
                                                                        borderTop: ".5px solid #06283D",
                                                                        borderLeft: ".5px solid #06283D",
                                                                        borderRight: ".5px solid #06283D",
                                                                        width: "100%",
                                                                        height: "4rem",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        // border of last child is #000
                                                                        borderBottom: docIndex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                                    }}>
                                                                        {/*  if current doctor is alloted at current shift then print 1  */}
                                                                        {
                                                                            shifts?.data?.map((shift) => (

                                                                                shift?.doctors.map((doctorShift, doctorIndex) => (
                                                                                    doctorShift === doctor._id &&
                                                                                    (new Date(shift.shiftDate).getFullYear() === date.dayYear) &&
                                                                                    (new Date(shift.shiftDate).getDate() === date.dayNumber) &&
                                                                                    (new Date(shift.shiftDate).getMonth() + 1 === date.dayMonth) &&
                                                                                    shift?.shiftTime === slot.slotTime && (
                                                                                        <div className={classes.shiftBox} key={doctorIndex}
                                                                                            style={{
                                                                                                borderTop: ".5px solid #fff",
                                                                                                borderLeft: ".5px solid #fff",
                                                                                                borderRight: ".5px solid #fff",
                                                                                                width: "100%",
                                                                                                height: "4rem",
                                                                                                display: "flex",
                                                                                                alignItems: "center",
                                                                                                justifyContent: "center",
                                                                                                // border of last child is #000
                                                                                                borderBottom: docIndex === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #fff"
                                                                                            }}

                                                                                            onClick={() => {
                                                                                                handleOpen(
                                                                                                    date.dayNumber + '-' + date.dayMonth + '-' + date.dayYear,
                                                                                                    slot.slotTime,
                                                                                                    // array of shift?.doctors
                                                                                                    shift?.doctors,
                                                                                                    shift._id
                                                                                                )
                                                                                            }}
                                                                                        >
                                                                                            <DoneIcon fontSize="large" />
                                                                                        </div>
                                                                                    )
                                                                                ))
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