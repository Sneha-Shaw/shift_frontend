import React, { useRef } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { ViewLogic } from './ViewLogic'
import { DownloadTableExcel } from 'react-export-table-to-excel'
import { Button } from '@mui/material'

const DailyView = () => {
    const classes = useStyles()
    const {
        // managerInfo,
        calender,
        slots,
        doctors,
        shifts
    } = ViewLogic()

    const tableRef = useRef(null);
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                <div className={classes.grid}>
                    <DownloadTableExcel
                        filename="users table"
                        sheet="users"
                        currentTableRef={tableRef.current}>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Export to Excel
                        </Button>
                    </DownloadTableExcel>
                    <table className={classes.table} ref={tableRef}>
                        <thead>
                            <tr>
                                <th className={classes.dateHeader}>
                                    <div>
                                        Date
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        Day
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        Doctors
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        Total Duty Hours
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        Hours Entitled to
                                    </div>
                                </th>
                                {
                                    slots?.getAllSlots?.map((slot, index) => (
                                        <th className={classes.dateHeader} key={index}>
                                            <div>
                                                {/* {slot.slotTime.slice(0, 8)} */}
                                                {slot.slotTime}
                                            </div>
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                calender?.getCalendar?.calendarArray?.map((date, index) => (
                                    <tr key={index}>
                                        <td className={classes.dateBody}>
                                            {
                                                doctors?.getAllDoctors?.map((doctor, index) => (
                                                    <div key={index} style={{
                                                        border: ".5px solid #06283D",
                                                        padding: "1rem 0",
                                                        width: "100%",
                                                        height: "2rem",
                                                    }}>
                                                        {date.dayNumber + '-' + date.dayMonth + '-' + date.dayYear}
                                                    </div>
                                                ))
                                            }
                                        </td>
                                        <td>
                                            {
                                                doctors?.getAllDoctors?.map((doctor, index) => (
                                                    <div key={index} style={{
                                                        border: ".5px solid #06283D",
                                                        padding: "1rem 0",
                                                        width: "100%",
                                                        height: "2rem",
                                                    }}>
                                                        {date.dayName.slice(0, 3)}
                                                    </div>
                                                ))
                                            }
                                        </td>
                                        <td>
                                            <div>
                                                {
                                                    doctors?.getAllDoctors?.map((doctor, index) => (
                                                        <div key={index} style={{
                                                            border: ".5px solid #06283D",
                                                            padding: "1rem 0",
                                                            width: "100%",
                                                            height: "2rem",
                                                        }}>
                                                            {doctor.name}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {
                                                    doctors?.getAllDoctors?.map((doctor, index) => (
                                                        <div key={index} style={{
                                                            border: ".5px solid #06283D",
                                                            padding: "1rem 0",
                                                            width: "100%",
                                                            height: "2rem",
                                                        }}>
                                                            {doctor.dutyHoursAllotedPerMonth}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {
                                                    doctors?.getAllDoctors?.map((doctor, index) => (
                                                        <div key={index} style={{
                                                            border: ".5px solid #06283D",
                                                            padding: "1rem 0",
                                                            width: "100%",
                                                            height: "2rem",
                                                        }}>
                                                            {doctor.dutyHoursPerMonth}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </td>
                                        {
                                            slots?.getAllSlots?.map((slot, index) => (
                                                <td className={classes.dateHeader} key={index}>
                                                    <div>
                                                        {
                                                            doctors?.getAllDoctors?.map((doctor, index) => (
                                                                <div key={index} style={{
                                                                    border: ".5px solid #06283D",
                                                                    padding: "1rem 0",
                                                                    width: "100%",
                                                                    height: "2rem",
                                                                }}>
                                                                    {/* if current doctor is alloted at current doctor then print 1 */}
                                                                    {
                                                                        shifts?.data?.map((shift, index) => (
                                                                            <div key={index}>
                                                                                {
                                                                                    shift?.doctors.map((doctorShift, index) => (
                                                                                        <div key={index}>
                                                                                            {
                                                                                                doctorShift === doctor._id && shift?.shiftStartDate === date.dayNumber + '/' + date.dayMonth + '/' + date.dayYear && shift?.slotTime === slot.slotTime && (
                                                                                                    <div>
                                                                                                        1
                                                                                                    </div>
                                                                                                )}
                                                                                        </div>
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
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DailyView