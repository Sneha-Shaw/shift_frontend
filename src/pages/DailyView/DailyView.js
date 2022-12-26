import React, { useEffect } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { ViewLogic } from './ViewLogic'

const DailyView = () => {
    const classes = useStyles()
    const {
        // managerInfo,
        calender,
        month,
        slots,
        shifts
    } = ViewLogic()
    const doctorInfo = null
    // shift array

// useEffect(() => {
    

    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                <div className={classes.grid}>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th className={classes.dateHeader}>Date</th>
                                {
                                    slots?.getAllSlots?.map((slot,index) => (
                                        <th className={classes.dateHeader} key={index}>{slot.slotTime}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                calender?.getCalendar?.calendarArray?.map((date, clindex) => (
                                    <tr key={clindex}>
                                        <td className={classes.dateBody}>{date.dayNumber}</td>
                                        {

                                            slots?.getAllSlots?.map((slot,slindex) => (
                                                <td className={classes.dateBody} key={slindex}>
                                                    {
                                                        shifts.map((shift,shindex) => (
                                                            <div key={shindex}>
                                                                {
                                                                    // check day and slot
                                                                    shift.shiftDay === date.dayName?
                                                                        <div>
                                                                                {shift.shiftStartTime}-{shift.shiftEndTime}
                                                                        </div>
                                                                        :
                                                                        null
                                                                }

                                                            </div>
                                                        ))
                                                    }
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