import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Typography } from '@mui/material';
import Timepicker from '../../components/Timepicker/TimePicker'
import { AvailabilityLogic } from './AvailabilityLogic'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Availabity = () => {
  const classes = useStyles()
  const {
    isday,
    defaultMeridianOption,
    MeridianOptions,
    handleChange,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    startMeridian,
    setStartmeridian,
    endMeridian,
    setEndmeridian,
    setStartTimeHandler,
    setEndTimeHandler,
    setStartmeridianHandler,
    setEndmeridianHandler
  } = AvailabilityLogic()



  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}>
        <h1>
          Select Availability
        </h1>
        <div className={classes.form}>
          {/* check monday then add start time end time appears, then tuesday and so on */}
          <FormGroup
            row
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
            }}

          >
            <FormControlLabel
              control={<Checkbox
                checked={isday.monday}
                onChange={handleChange}
                name="monday"
                sx={{
                  color: "#06383D",
                  '&.Mui-checked': {
                    color: "#06383D",
                  },
                }}
              />}
              label={<Typography className={classes.formControlLabel}>Monday</Typography>}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',

              }}

            />
            {isday.monday &&
              <div className={classes.time}>

                <div className={classes.formItemTime}>
                  <label htmlFor="time">Start Time:</label>
                  <input
                    type="time"
                    value={startTime[0]}
                    onChange={
                      (e) => {
                        setStartTimeHandler(e.target.value, 0)
                      }
                    }
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setStartmeridianHandler(e.value,0) }}
                  />
                </div>

                <div className={classes.formItemTime}>
                  <label htmlFor="time">End Time:</label>
                  <input
                    type="time"
                    value={endTime[0]}
                    onChange={(e) => { setEndTimeHandler(e.target.value, 0) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setEndmeridianHandler(e.value,0) }}
                  />
                </div>
              </div>

            }
            <FormControlLabel
              control={<Checkbox
                checked={isday.tuesday}
                onChange={handleChange}
                name="tuesday"
                sx={{
                  color: "#06383D",
                  '&.Mui-checked': {
                    color: "#06383D",
                  },
                }}
              />}
              label={<Typography className={classes.formControlLabel}>Tuesday</Typography>}
            />
            {
              isday.tuesday && <div className={classes.time}>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">Start Time:</label>
                  <input
                    type="time"
                    value={startTime[1]}
                    onChange={(e) => { setStartTimeHandler(e.target.value, 1) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setStartmeridianHandler(e.value,0) }}
                  />
                </div>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">End Time:</label>
                  <input
                    type="time"
                    value={endTime[1]}
                    onChange={(e) => { setEndTimeHandler(e.target.value, 1) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setEndmeridianHandler(e.value,1) }}
                  />
                </div>

              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={isday.wednesday}
                onChange={handleChange}
                name="wednesday"
                sx={{
                  color: "#06383D",
                  '&.Mui-checked': {
                    color: "#06383D",
                  },
                }}
              />}
              label={
                <Typography className={classes.formControlLabel}>Wednesday</Typography>
              }
            />
            {
              isday.wednesday && <div className={classes.time}>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">Start Time:</label>
                  <input
                    type="time"
                    value={startTime[2]}
                    onChange={(e) => { setStartTimeHandler(e.target.value, 2) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setStartmeridianHandler(e.value,2) }}
                  />
                </div>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">End Time:</label>
                  <input
                    type="time"
                    value={endTime[2]}
                    onChange={(e) => { setEndTimeHandler(e.target.value, 2) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setEndmeridianHandler(e.value,2) }}
                  />
                </div>

              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={isday.thursday}
                onChange={handleChange}
                name="thursday"
                sx={{
                  color: "#06383D",
                  '&.Mui-checked': {
                    color: "#06383D",
                  },
                }}
              />}
              label={
                <Typography className={classes.formControlLabel}>Thursday</Typography>
              }
            />
            {
              isday.thursday && <div className={classes.time}>



                <div className={classes.formItemTime}>
                  <label htmlFor="time">Start Time:</label>
                  <input
                    type="time"
                    value={startTime[3]}
                    onChange={(e) => { setStartTimeHandler(e.target.value, 3) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setStartmeridianHandler(e.value,3) }}
                  />
                </div>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">End Time:</label>
                  <input
                    type="time"
                    value={endTime[3]}
                    onChange={(e) => { setEndTimeHandler(e.target.value, 3) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setEndmeridianHandler(e.value,3) }}
                  />
                </div>

              </div>

            }
            <FormControlLabel
              control={<Checkbox
                checked={isday.friday}
                onChange={handleChange}
                name="friday"
                sx={{
                  color: "#06383D",
                  '&.Mui-checked': {
                    color: "#06383D",
                  },
                }}
              />}
              label={
                <Typography className={classes.formControlLabel}>Friday</Typography>
              }
            />
            {
              isday.friday && <div className={classes.time}>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">Start Time:</label>
                  <input
                    type="time"
                    value={startTime[4]}
                    onChange={(e) => { setStartTimeHandler(e.target.value, 4) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setStartmeridianHandler(e.value,4) }}
                  />
                </div>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">End Time:</label>
                  <input
                    type="time"
                    value={endTime[4]}
                    onChange={(e) => { setEndTimeHandler(e.target.value, 4) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setEndmeridianHandler(e.value,4) }}
                  />
                </div>

              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={isday.saturday}
                onChange={handleChange}
                name="saturday"
                sx={{
                  color: "#06383D",
                  '&.Mui-checked': {
                    color: "#06383D",
                  },
                }}
              />}
              label={
                <Typography className={classes.formControlLabel}>Saturday</Typography>
              }
            />
            {
              isday.saturday && <div className={classes.time}>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">Start Time:</label>
                  <input
                    type="time"
                    value={startTime[5]}
                    onChange={(e) => { setStartTimeHandler(e.target.value, 5) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setStartmeridianHandler(e.value,5) }}
                  />
                </div>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">End Time:</label>
                  <input
                    type="time"
                    value={endTime[5]}
                    onChange={(e) => { setEndTimeHandler(e.target.value, 5) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setEndmeridianHandler(e.value,5) }}
                  />
                </div>

              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={isday.sunday}
                onChange={handleChange}
                name="sunday"
                sx={{
                  color: "#06383D",
                  '&.Mui-checked': {
                    color: "#06383D",
                  },
                }}
              />}
              label={
                <Typography className={classes.formControlLabel}>Sunday</Typography>
              }
            />
            {
              isday.sunday && <div className={classes.time}>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">Start Time:</label>
                  <input
                    type="time"
                    value={startTime[6]}
                    onChange={(e) => { setStartTimeHandler(e.target.value, 6) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setStartmeridianHandler(e.value,6) }}
                  />
                </div>
                <div className={classes.formItemTime}>
                  <label htmlFor="time">End Time:</label>
                  <input
                    type="time"
                    value={endTime[6]}
                    onChange={(e) => { setEndTimeHandler(e.target.value, 6) }}
                    className={classes.input}
                  />
                  <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                    onChange={(e) => { setEndmeridianHandler(e.value,6) }}
                  />
                </div>

              </div>
            }
          </FormGroup>
          <Button variant="contained" sx={{
            width: '80%',
            margin: '2rem auto',
            background: '#06383D',
            color: '#fff',
            fontSize: "1.5rem",
            '&:hover': {
              background: '#06383D',
              color: '#fff',
            }
          }}>Submit</Button>
        </div>
      </div >
    </div >
  )
}

export default Availabity