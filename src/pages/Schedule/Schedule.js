import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { ScheduleLogic } from './ScheduleLogic'
import { Button } from '@mui/material'

const Schedule = () => {
  const classes = useStyles()
  const {
    userInfo,
    doctors,
    shifts,
    alldomains,
    domainOp,
    handleGetShifts,
    doctorId,
    setDoctorId,
    setDomainOp
  } = ScheduleLogic()
  // get current month and year
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}>
        <h1>Schedule</h1>
        <div className={classes.schedule}>
          <div className={classes.schedule_Header}>
            <div>
              <label>
                <strong>Domain:</strong>
              </label>
              <select
                name='domain'
                id='domain'
                value={domainOp}
                onChange={(e) => setDomainOp(e.target.value)}
              >
                <option value=''>Select Domain</option>
                {alldomains &&
                  alldomains.getAllDomains.map((domain) => (
                    <option key={domain._id} value={domain.domainName}>
                      {domain.domainName}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label>
                <strong>Doctor:</strong>
              </label>
              <select name='doctor' id='doctor'
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
              >

                {
                  doctors &&
                  doctors.getAllDoctors.map((doctor) => (
                    <option key={doctor._id} value={doctor._id}>
                      {doctor.name}
                    </option>
                  ))
                }
              </select>
            </div>
            <div>
              <Button variant="contained" onClick={handleGetShifts}>Get Shifts</Button>
            </div>
          </div>
          <div className={classes.schedule_body}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {
                  domainOp === "" ?
                    <tr><td colSpan="3">Select Domain to view your Schedule</td></tr>
                    :
                    shifts &&
                      shifts.data.length === 0 ?
                      <tr><td colSpan="3">No Shifts</td></tr>
                      :
                      shifts &&
                      // filter currentmonth and year in shiftdate
                      shifts.data.filter(
                        (shift) =>
                          new Date(shift.shiftDate).getMonth() === currentMonth &&
                          new Date(shift.shiftDate).getFullYear() === currentYear
                      ).map((shift) => (
                        <tr key={shift._id}>
                          <td>{shift.shiftDate}</td>
                          <td>{shift.shiftDay}</td>
                          <td>{shift.shiftTime}</td>
                        </tr>
                      ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule