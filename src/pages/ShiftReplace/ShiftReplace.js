import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ShiftReplace = () => {
  const classes = useStyles()
  const options = [
    'AM', 'PM'
  ];
  const defaultOption = options[0];
  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      {/* form : input(name of person who cannot work shifT,NAME OF PERSON WHO WILL work shift, date, start time) */}
      <div className={classes.main}>
        <h1>Shift Replace</h1>
        <div className={classes.form}>
          <div className={classes.formItem}>
            <label htmlFor="name">Name of person who cannot work shift:*</label>
            <input type="text" id="name" />
          </div>
          <div className={classes.formItem}>
            <label htmlFor="name">Name of person who will work shift:*</label>
            <input type="text" id="name" />
          </div>
          <div className={classes.formItem}>
            <label htmlFor="date">Enter Date:*</label>
            <input type="date" id="date" />
          </div>
          <div className={classes.formItem}>
            <label htmlFor="time">Start Time:*</label>
            <div>

              <input type="time" id="time" />
              <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
            </div>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="time">End Time:*</label>
            <div>

              <input type="time" id="time" />
              <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
            </div>
          </div>
          {/* <div className={classes.formItem}>
            <label htmlFor="reason">Reason</label>
            <input type="text" id="reason" />
            </div> */}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ShiftReplace