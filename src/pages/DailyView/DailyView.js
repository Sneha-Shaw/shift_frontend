import React from 'react'
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
   


    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                <div className={classes.grid}>
                    {/* dates in column header and slots in row header */}
                    <div className={classes.date}>
                        {
                            calender?.getCalendar?.calendarArray?.map((date, index) => (
                                <div>
                                    <div className={classes.dateHeader} key={index}>
                                        {date.dayName.slice(0, 3)}, {' ' + month} {date.dayNumber}
                                    </div>
                                    <div className={classes.dateBody}>
                                        {
                                            shifts.map((shift, index) => (
                                                <div className={classes.shift} key={index}>
                                                    {
                                                        shift.shiftDay === date.dayName && parseInt(shift.shiftStartDate[0]) === date.dayNumber ?
                                                            <div className={classes.shiftInfo}>
                                                                <div className={classes.shiftInfoName}>
                                                                    {shift.shiftName}
                                                                </div>
                                                                <div className={classes.shiftInfoTime}>
                                                                    {shift.shiftStartTime} - {shift.shiftEndTime}
                                                                </div>
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={classes.slot}>
                        {
                            slots?.getAllSlots.map((slot, index) => (
                                <div>
                                    <div className={classes.slotHeader} key={index}>
                                        {slot.slotTime}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* {
                    calender?.getCalendar?.calendarArray?.map((date, index) => (
                        <div className={classes.date} key={index}>
                            <div className={classes.dateHeader}>
                                <div className={classes.dateHeaderDay}>
                                    {date.dayName}
                                </div>
                                <div className={classes.dateHeaderDate}>
                                    {date.dayNumber}
                                </div>
                            </div>
                            <div className={classes.dateBody}>
                                {
                                    shifts.map((shift, index) => (
                                        <div className={classes.shift} key={index}>
                                            {
                                                shift.shiftDay === date.dayName && parseInt(shift.shiftStartDate[0]) === date.dayNumber ?
                                                    <div className={classes.shiftInfo}>
                                                        <div className={classes.shiftInfoName}>
                                                            {shift.shiftName}
                                                        </div>
                                                        <div className={classes.shiftInfoTime}>
                                                            {shift.shiftStartTime} - {shift.shiftEndTime}
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    ))
                } */}
            </div>
        </div>
    )
}

export default DailyView