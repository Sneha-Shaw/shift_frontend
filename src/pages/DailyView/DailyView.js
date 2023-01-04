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
                                                        borderTop: ".5px solid #06283D",
                                                        borderLeft: ".5px solid #06283D",
                                                        borderRight: ".5px solid #06283D",
                                                        padding: "1rem 0",
                                                        width: "100%",
                                                        height: "2rem",
                                                        // border of last child is #000
                                                        borderBottom: index === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
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
                                                        borderTop: ".5px solid #06283D",
                                                        borderLeft: ".5px solid #06283D",
                                                        borderRight: ".5px solid #06283D",
                                                        padding: "1rem 0",
                                                        width: "100%",
                                                        height: "2rem",
                                                        // border of last child is #000
                                                        borderBottom: index === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
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
                                                            borderTop: ".5px solid #06283D",
                                                            borderLeft: ".5px solid #06283D",
                                                            borderRight: ".5px solid #06283D",
                                                            padding: "1rem 0",
                                                            width: "100%",
                                                            height: "2rem",
                                                            // border of last child is #000
                                                            borderBottom: index === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
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
                                                            borderTop: ".5px solid #06283D",
                                                            borderLeft: ".5px solid #06283D",
                                                            borderRight: ".5px solid #06283D",
                                                            padding: "1rem 0",
                                                            width: "100%",
                                                            height: "2rem",
                                                            // border of last child is #000
                                                            borderBottom: index === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
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
                                                            borderTop: ".5px solid #06283D",
                                                            borderLeft: ".5px solid #06283D",
                                                            borderRight: ".5px solid #06283D",
                                                            padding: "1rem 0",
                                                            width: "100%",
                                                            height: "2rem",
                                                            // border of last child is #000
                                                            borderBottom: index === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
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
                                                                    borderTop: ".5px solid #06283D",
                                                                    borderLeft: ".5px solid #06283D",
                                                                    borderRight: ".5px solid #06283D",
                                                                    padding: "1rem 0",
                                                                    width: "100%",
                                                                    height: "2rem",
                                                                    // border of last child is #000
                                                                    borderBottom: index === doctors?.getAllDoctors?.length - 1 ? "2px solid #000" : ".5px solid #06283D"
                                                                }}>
                                                                    {/* if current doctor is alloted at current doctor then print 1 */}
                                                                    {
                                                                        shifts?.data?.map((shift, index) => (
                                                                            <div key={index}>
                                                                                {
                                                                                    shift?.doctors.map((doctorShift, index) => (
                                                                                        <td key={index}>
                                                                                            {
                                                                                                doctorShift === doctor._id && shift?.shiftDate === date.dayYear + '-' + date.dayMonth + '-' + date.dayNumber && shift?.shiftTime === slot.slotTime && (
                                                                                                    <div>
                                                                                                        1
                                                                                                    </div>
                                                                                                )}
                                                                                        </td>
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