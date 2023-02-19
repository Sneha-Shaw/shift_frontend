import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import useStyles from './styles'
import { ArchiveLogic } from './ArchiveLogic'
import { Button } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import { locale } from 'moment/moment'

const Archives = () => {
  const classes = useStyles()
  const {
    calender,
    slots,
    shifts,
    doctors,
    // domainOp,
    setDomainOp,
    getShifts,
    alldomains,
    setMonth,
    months,
    // year,
    setYear,
    years
  } = ArchiveLogic()

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.main}>
        <div className={classes.grid}>
          <div className={classes.selectContainer}>
            <div className={classes.select}>
              <label
                htmlFor="year"
                className={classes.yearLabel}
              >
                Select year to view Roster:
              </label>
              <select
                name="year"
                id="year"
                className={classes.yearSelect}
                onChange={(e) => {
                  setYear(e.target.value)
                }}
              // value={year}
              >
                <option value="">Select Year</option>
                {
                  years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))
                }
              </select>

            </div>
            <div className={classes.select}>
              <label
                htmlFor="date"
                className={classes.dateLabel}
              >
                Select month to view Roster:
              </label>
              <select
                name="date"
                id="date"
                className={classes.dateSelect}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              >
                <option value="">Select Month</option>
                {
                  months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                  ))
                }
              </select>
            </div>

            <div className={classes.select}>
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
                  // getShifts(e.target.value);
                  // handleDomain(e.target.value)
                }}
              // value={domainOp}
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
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                getShifts()
              }}
            >
              View Roster
            </Button>

          </div>
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
                        left: 0,
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
    </div >
  )
}

export default Archives
