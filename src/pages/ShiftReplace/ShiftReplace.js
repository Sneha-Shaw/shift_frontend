import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {ShiftReplaceLogic} from './ShiftReplaceLogic'

const ShiftReplace = () => {
  const classes = useStyles()
  const {
    name,
    setName,
    replacement,
    setReplacement,
    date,
    setDate,
    start,
    setStart,
    end,
    setEnd,
    submitHandler,
    options,
    defaultOption,
    setStartMeridien,
    setEndMeridien
  } = ShiftReplaceLogic()
  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      {/* form : input(name of person who cannot work shifT,NAME OF PERSON WHO WILL work shift, date, start time) */}
      <div className={classes.main}>
        <h1>Shift Replacement Request</h1>
        <div className={classes.form}>
          <div className={classes.formItem}>
            <label htmlFor="name">Name of person who cannot work:*</label>
            <input type="text" id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
             />
          </div>
          <div className={classes.formItem}>
            <label htmlFor="name">Name of person who will work:*</label>
            <input type="text" id="name" 
              value={replacement}
              onChange={(e) => setReplacement(e.target.value)}
            />
          </div>
          <div className={classes.formItem}>
            <label htmlFor="date">Enter Date:*</label>
            <input type="date" id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>
          <div className={classes.formItem}>
            <label htmlFor="time">Start Time:*</label>
            <div>

              <input type="time" id="time"
                value={start}
                onChange={(e) => setStart(e.target.value)}
               />
              <Dropdown options={options} value={defaultOption} placeholder="Select an option" 
                onChange={(e) => setStartMeridien(e.value)}
              />
            </div>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="time">End Time:*</label>
            <div>

              <input type="time" id="time"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
               />
              <Dropdown options={options} value={defaultOption} placeholder="Select an option"
                onChange={(e) => setEndMeridien(e.value)}
               />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={submitHandler}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ShiftReplace