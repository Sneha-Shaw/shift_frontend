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
                                <th className={classes.dateHeader}>
                                    <div>
                                        Slot
                                    </div>
                                </th>
                                {
                                    slots?.getAllSlots?.map((slot, index) => (
                                        <th className={classes.dateHeader} key={index}>
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
                                calender?.getCalendar?.calendarArray?.map((date, clindex) => (
                                    <tr key={clindex}>
                                        <td className={classes.dateBody}>
                                            {/* slice first 3 letters in dayname */}
                                            {date.dayName.slice(0, 3)},
                                            {' ' + month}
                                            {' ' + date.dayNumber}
                                        </td>
                                       
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