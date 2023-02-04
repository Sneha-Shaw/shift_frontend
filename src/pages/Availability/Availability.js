import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material';
import { AvailabilityLogic } from './AvailabilityLogic'
import Datetime from 'react-datetime';
import 'react-dropdown/style.css';
import "react-datetime/css/react-datetime.css";

const Availability = () => {
  const classes = useStyles()
  const {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    show,
    setShow,
    availabilities,
    managerInfo,
    doctorId,
    setDoctorId,
    availabilityByDate,
    users,
    userInfo,
    submitHandler,
    availabilityOps,
    setAvailabilityOps,
    date,
    setDate,
    availabilityBy,
    setAvailabilityby,
    getAvailabilityHandler
  } = AvailabilityLogic()


  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}>
        {
          show && (
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
          !show &&
          <div className={classes.calendarHeader}>
            <h2>Availability</h2>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShow(true)}
            >
              Add Availability
            </Button>
          </div>
        }
        {/* {
          !show &&
          <div className={classes.calendarBodyItemContainer}>
            {
              managerInfo &&
              <div className={classes.calendarBodyItem}>
                <label>Get Availability By:</label>
                <select
                  name="getAvailabilityBy"
                  id="getAvailabilityBy"
                  value={availabilityBy}
                  onChange={(e) => setAvailabilityby(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="date">Date</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
            }
            {

              availabilityBy === "date" ?
                <div className={classes.calendarBodyItem}>
                  <label>Date:</label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                :
                availabilityBy === "doctor" ?
                  <div className={classes.calendarBodyItem}>
                    <label>Doctor:</label>
                    <select
                      name="doctor"
                      id="doctor"
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                    >
                      <option value="">Select Doctor</option>
                      {
                        managerInfo ?
                          users && users.map((user) => (
                            <option key={user._id} value={user._id}>{user.name}</option>
                          ))
                          :
                          <option value={userInfo._id}>{userInfo.name}</option>
                      }
                    </select>
                  </div>
                  :
                  null
            }
            {
              availabilityBy === "date" || availabilityBy === "doctor" ?
                <div className={classes.calendarBodyItem}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={getAvailabilityHandler}
                  >
                    Get Availability
                  </Button>
                </div>
                :
                null
            }
          </div>
        } */}

        {/* form for adding availability */}
        {
          show ?
            <div className={classes.form}>
              <div className={classes.formHeader}>
                <h2>Add Availability</h2>
              </div>
              <div className={classes.formBody}>
                <div className={classes.formBodyItem}>
                  <label>Doctor</label>
                  <select
                    name="doctor"
                    id="doctor"
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                  >
                    <option value="">Select Doctor</option>
                    {
                      managerInfo ?
                        users && users.map((user) => (
                          <option key={user._id} value={user._id}>{user.name}</option>
                        ))
                        :
                        <option value={userInfo._id}>{userInfo.name}</option>
                    }
                  </select>
                </div>
                <div className={classes.formBodyItem}>
                  <label>Date</label>
                  <div>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className={classes.formBodyItem}>
                  <label>Start Time</label>
                  <Datetime
                    value={startTime}
                    onChange={(e) => setStartTime(e.format('hh:mm A'))}
                    dateFormat={false}
                    timeFormat="hh:mm A"
                  />
                </div>
                <div className={classes.formBodyItem}>
                  <label>End Time</label>
                  <Datetime
                    value={endTime}
                    onChange={(e) => setEndTime(e.format('hh:mm A'))}
                    dateFormat={false}
                    timeFormat="hh:mm A"
                  />
                </div>
                <div className={classes.formBodyItem}>
                  <label>Availability Options</label>
                  <select
                    name="availabilityOps"
                    id="availabilityOps"
                    value={availabilityOps}
                    onChange={(e) => setAvailabilityOps(e.target.value)}
                  >
                    <option value="">Select Availability Options</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
              </div>
              <div className={classes.formFooter}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitHandler}
                >
                  Submit
                </Button>
              </div>
            </div>
            :
            <div className={classes.calendar}>
                 <div className={classes.calendarBodyItemContainer}>
            {
              managerInfo &&
              <div className={classes.calendarBodyItem}>
                <label>Get Availability By:</label>
                <select
                  name="getAvailabilityBy"
                  id="getAvailabilityBy"
                  value={availabilityBy}
                  onChange={(e) => setAvailabilityby(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="date">Date</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
            }
            {

              availabilityBy === "date" ?
                <div className={classes.calendarBodyItem}>
                  <label>Date:</label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={classes.dateInput}
                  />
                </div>
                :
                availabilityBy === "doctor" ?
                  <div className={classes.calendarBodyItem}>
                    <label>Doctor:</label>
                    <select
                      name="doctor"
                      id="doctor"
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                    >
                      <option value="">Select Doctor</option>
                      {
                        managerInfo ?
                          users && users.map((user) => (
                            <option key={user._id} value={user._id}>{user.name}</option>
                          ))
                          :
                          <option value={userInfo._id}>{userInfo.name}</option>
                      }
                    </select>
                  </div>
                  :
                  null
            }
            {
              availabilityBy === "date" || availabilityBy === "doctor" ?
                <div className={classes.calendarBodyItem}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={getAvailabilityHandler}
                  >
                    Get Availability
                  </Button>
                </div>
                :
                null
            }
          </div>
              <div className={classes.calendarBody}>
                {
                  managerInfo ?
                    <div className={classes.table}>
                      {
                        availabilityBy === "doctor" ?
                          <table>
                            <thead>
                              <tr>
                                {/* <th>Doctor</th> */}
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Availability</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                // filter title=="available" in availabilities[0].schedule
                                availabilities && availabilities[0].schedule.map((item) => (
                                  <tr key={item._id}>
                                    <td>{item.date}</td>
                                    <td>{item.start}</td>
                                    <td>{item.end}</td>
                                    <td>{item.title}</td>
                                    <td>
                                      <Button
                                        variant="contained"
                                        color="error"
                                      // onClick={() => deleteAvailabilityHandler(item._id)}
                                      >
                                        Delete
                                      </Button>
                                    </td>
                                  </tr>
                                ))

                              }
                            </tbody>
                          </table>
                          :
                          availabilityBy === "date" ?
                            <table>
                              <thead>
                                <tr>
                                  <th>Doctor</th>
                                  <th>Start Time</th>
                                  <th>End Time</th>
                                  <th>Availability</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  (!availabilityByDate?.length && date) &&
                                  <tr>
                                    <td colSpan="4">No Availability</td>
                                  </tr>
                                }
                                {
                                  availabilityByDate && availabilityByDate?.map((user) => (

                                    (user.schedule.map((item) => (
                                      // check if current date matches date then show tr
                                      item.date === date &&
                                      <tr key={item._id}>
                                        <td>{user.user.name}</td>
                                        <td>{item.start}</td>
                                        <td>{item.end}</td>
                                        <td>{item.title}</td>
                                        <td>
                                          <Button
                                            variant="contained"
                                            color="error"
                                          // onClick={() => deleteAvailabilityHandler(item._id)}
                                          >
                                            Delete
                                          </Button>
                                        </td>
                                      </tr>

                                    ))
                                    )
                                  ))
                                }
                              </tbody>
                            </table>
                            :
                            null
                      }
                    </div>
                    :
                    null
                }
              </div>
            </div>
        }
      </div>
    </div >
  )
}

export default Availability