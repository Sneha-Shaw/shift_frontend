import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button, Modal } from '@mui/material';
import { AvailabilityLogic } from './AvailabilityLogic'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import Datetime from 'react-datetime';
import 'react-dropdown/style.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datetime/css/react-datetime.css";

const Availabity = () => {
  const localizer = momentLocalizer(moment)
  const classes = useStyles()
  const {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    managerInfo,
    show,
    setShow,
    deleteHandler,
    onSelectEventHandler,
    temp,
    doctorId,
    setDoctorId,
    users,
    userInfo,
    submitHandler,
    events,
    subEvent,
    eventStyleGetter,
    open,
    handleOpen,
    handleClose,
    onEventDrop,
    onEventResize,
    availabilityOps,
    setAvailabilityOps,
  } = AvailabilityLogic()
  const DnDCalendar = withDragAndDrop(Calendar);

  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}>
        <DnDCalendar
          localizer={localizer}
          events={
            managerInfo ?
              subEvent
              :
              events
          }
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']}
          defaultDate={new Date()}
          defaultView="month"
          selectable
          popup={true}
          onSelectEvent={(e) => { onSelectEventHandler(e); }}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          resizable
          onSelectSlot={handleOpen}
          style={{
            height: "87.5vh",
            width: "100%"
          }}
          eventPropGetter={eventStyleGetter}
        />

        <Modal
          open={show}
          onClose={() => setShow(false)}
          className={classes.popupModal}
        >
          <div
            className={classes.popup}
          >
            <div className={classes.popupHeader}>
              <h1 style={{
                color: temp?.title==="Available" ? "#3174AD" : "#f0ad4e"
              }}> {temp?.title}</h1>
            </div>
            <div className={classes.popupBody}>
              <div className={classes.popupBodyContentItem}>
                <h4>Start Date:</h4>
                <p>
                  {temp?.startDate}
                </p>
              </div>
              <div className={classes.popupBodyContentItem}>
                <h4>Start Time:</h4>
                <p>
                  {temp?.startTime}
                </p>
              </div>
              <div className={classes.popupBodyContentItem}>
                <h4>End Date:</h4>
                <p>
                  {temp?.endDate}
                </p>
              </div>
              <div className={classes.popupBodyContentItem}>
                <h4>End Time:</h4>
                <p>
                  {temp?.endTime}
                </p>
              </div>
              <div className={classes.popupBodyContentItem}>
                <h4>Doctor:</h4>
                <p>
                  {
                    temp?.doctor?.name
                  }
                </p>
              </div>
            </div>
            <hr className={classes.hr} />
            <div className={classes.popupFooter}>
              <Button
                onClick={() => {
                  deleteHandler(
                    temp?.doctor?._id,
                    temp?.startDate + " " + temp?.startTime,
                    temp?.endDate + " " + temp?.endTime
                  ); setShow(false)
                }}
                variant="contained"
                color="error"
                className={classes.deleteBtn}
              >
                Delete
              </Button>
              <Button
                onClick={() => { setShow(!show) }}
                variant="contained"
                color="primary"
                className={classes.closeBtn}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>

        <Modal
          open={open}
          onClose={handleClose}
          className={classes.modal}
        >
          <div className={classes.modalContent}>
            <div className={classes.modalHeader}>
              <h1>Set Availability</h1>
              <Button
                onClick={handleClose}
                className={classes.closeBtn}
              >
                X
              </Button>
            </div>
            <div className={classes.modalBody}>
              <div className={classes.modalBodyContentItem}>
                <h4>Start Time</h4>
                <Datetime
                  value={startTime}
                  onChange={(e) => setStartTime(e._d)}
                />
              </div>
              <div className={classes.modalBodyContentItem}>
                <h4>End Time</h4>
                <Datetime
                  value={endTime}
                  onChange={(e) => setEndTime(e._d)}
                />
              </div>
              <div className={classes.modalBodyContentItem}>
                <h4>Doctor</h4>
                {
                  managerInfo ?
                    <select
                      name="doctor"
                      id="doctor"
                      onChange={(e) => setDoctorId(e.target.value)}
                      value={doctorId}
                    >
                      <option value="0">Select Doctor</option>
                      {
                        users && users.map((user) => (
                          <option value={user._id}>{user.name}</option>
                        ))
                      }
                    </select>
                    :
                    <input
                      type="text"
                      value={userInfo.name}
                      disabled
                    />
                }
              </div>
              <div className={classes.modalBodyContentItem}>
                <h4>Availability</h4>
                <select
                  onChange={(e) => setAvailabilityOps(e.target.value)}
                  value={availabilityOps}
                >
                  <option value="">Select Availability</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>
            </div>
            <div className={classes.modalFooter}>
              <Button
                variant="contained"
                color="primary"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      </div >
    </div >
  )
}

export default Availabity