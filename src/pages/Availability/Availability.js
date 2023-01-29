import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button, Modal } from '@mui/material';
import { Calendar } from 'react-big-calendar';
import momentLocalizer from 'react-big-calendar/lib/localizers/moment';
import { AvailabilityLogic } from './AvailabilityLogic'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import Datetime from 'react-datetime';
import 'react-dropdown/style.css';
// import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datetime/css/react-datetime.css";

const Availability = () => {
  const localizer = momentLocalizer(moment)
  const classes = useStyles()
  const {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    show,
    setShow,
    availabilities,
    deleteHandler,
    managerInfo,
    doctorId,
    setDoctorId,
    availabilityByDate,
    allAvailabilities,
    users,
    userInfo,
    submitHandler,
    // events,
    // subEvent,
    // eventStyleGetter,
    open,
    handleOpen,
    handleClose,
    // onEventDrop,
    // onEventResize,
    availabilityOps,
    setAvailabilityOps,
    onSelectEventHandler,
    // temp,
    date,
    setDate,
    availabilityBy,
    setAvailabilityby,
    getAvailabilityHandler
  } = AvailabilityLogic()
  // const DnDCalendar = withDragAndDrop(Calendar);

  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}>


        {/* form for adding availabiloty */}
        {
          show ?
            <div className={classes.form}>
              <div className={classes.formHeader}>
                <h2>Add Availability</h2>
              </div>
              <div className={classes.formBody}>
                {/* <div className={classes.formBodyLeft}> */}
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
                  <Datetime
                    value={date}
                    onChange={(e) => setDate(e)}
                    dateFormat="YYYY-MM-DD"
                    timeFormat={false}
                  />
                </div>
                <div className={classes.formBodyItem}>
                  <label>Start Time</label>
                  <Datetime
                    value={startTime}
                    onChange={(e) => setStartTime(e)}
                    dateFormat={false}
                    timeFormat="hh:mm A"
                  />
                </div>
                <div className={classes.formBodyItem}>
                  <label>End Time</label>
                  <Datetime
                    value={endTime}
                    onChange={(e) => setEndTime(e)}
                    dateFormat={false}
                    timeFormat="hh:mm A"
                  />
                </div>
                {/* </div> */}
                {/* <div className={classes.formBodyRight}> */}
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
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>
                {/* </div> */}
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
              {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={classes.modal}>
                  <div className={classes.modalHeader}>
                    <h2>Are you sure you want to delete this event?</h2>
                  </div>
                  <div className={classes.modalFooter}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={deleteHandler}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal> */}
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
              <div className={classes.calendarBody}>
                {/* select with two options : get availability by date or doctors */}

                <div className={classes.calendarBodyItemContainer}>
                  {
                    managerInfo &&
                    <div className={classes.calendarBodyItem}>
                      <label>Get Availability By</label>
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
                        <label>Date</label>
                        <Datetime
                          value={date}
                          onChange={(e) => setDate(e)}
                          dateFormat="YYYY-MM-DD"
                          timeFormat={false}
                        />
                      </div>
                      :
                      availabilityBy === "doctor" ?
                        <div className={classes.calendarBodyItem}>
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
                                <th>Availability Options</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                availabilities && availabilities[0]?.schedule.map((item) => (
                                  <tr key={item._id}>
                                    {/* <td>{item.doctor.name}</td> */}
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
                                  <th>Availability Options</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  availabilityByDate && availabilityByDate?.map((user) => (

                                    (user.schedule.map((item) => (
                                      // check if current date matches date then show tr
                                      item.date ===  date.format('YYYY-MM-DD') &&
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
                                      // :
                                      // null

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