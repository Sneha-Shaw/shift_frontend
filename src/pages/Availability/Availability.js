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
// import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datetime/css/react-datetime.css";

const Availability = () => {
  // const localizer = momentLocalizer(moment)
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
    // temp,
    doctorId,
    setDoctorId,
    users,
    userInfo,
    submitHandler,
    // events,
    // subEvent,
    // eventStyleGetter,
    open,
    handleOpen,
    handleClose,
    availabilityOps,
    setAvailabilityOps,
    date,
    setDate
  } = AvailabilityLogic()
  // const DnDCalendar = withDragAndDrop(Calendar);

  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}>
       
      </div>
    </div >
  )
}

export default Availability