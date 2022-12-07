import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Typography } from '@mui/material';
import Timepicker from '../../components/Timepicker/TimePicker'
import AddIcon from '@mui/icons-material/Add';

const Availabity = () => {
  const classes = useStyles()
  const [day, setDay] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const handleChange = (event) => {
    setDay({ ...day, [event.target.name]: event.target.checked });
  };
  // map time add timepicker on click add
  const [time, setTime] = useState([1])
  const addTime = () => {
    setTime([...time, 1])
  }

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
                checked={day.monday}
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
            {day.monday && <div className={classes.time}>
              {
                time.map((item, index) => (
                  <div key={index}>
                    {/* show add icon at the last element */}
                    {index === time.length - 1 && <div className={classes.Addtime}>
                      <AddIcon
                        onClick={
                          addTime
                        }
                      />
                    </div>}

                
                    <Timepicker placeholder="Start Time" />
                    <Timepicker placeholder="End Time" />
                    <hr className={classes.hr}/>
                  </div>
                ))
              }
             
            </div>}
            <FormControlLabel
              control={<Checkbox
                checked={day.tuesday}
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
              day.tuesday && <div className={classes.time}>
                   {
                time.map((item, index) => (
                  <div key={index}>
                    {/* show add icon at the last element */}
                    {index === time.length - 1 && <div className={classes.Addtime}>
                      <AddIcon
                        onClick={
                          addTime
                        }
                      />
                    </div>}

                
                    <Timepicker placeholder="Start Time" />
                    <Timepicker placeholder="End Time" />
                    <hr className={classes.hr}/>
                  </div>
                ))
              }
             
              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={day.wednesday}
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
              day.wednesday && <div className={classes.time}>
                  {
                time.map((item, index) => (
                  <div key={index}>
                    {/* show add icon at the last element */}
                    {index === time.length - 1 && <div className={classes.Addtime}>
                      <AddIcon
                        onClick={
                          addTime
                        }
                      />
                    </div>}

                
                    <Timepicker placeholder="Start Time" />
                    <Timepicker placeholder="End Time" />
                    <hr className={classes.hr}/>
                  </div>
                ))
              }
             
              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={day.thursday}
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
              day.thursday && <div className={classes.time}>
                  {
                time.map((item, index) => (
                  <div key={index}>
                    {/* show add icon at the last element */}
                    {index === time.length - 1 && <div className={classes.Addtime}>
                      <AddIcon
                        onClick={
                          addTime
                        }
                      />
                    </div>}

                
                    <Timepicker placeholder="Start Time" />
                    <Timepicker placeholder="End Time" />
                    <hr className={classes.hr}/>
                  </div>
                ))
              }
             
              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={day.friday}
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
              day.friday && <div className={classes.time}>
                  {
                time.map((item, index) => (
                  <div key={index}>
                    {/* show add icon at the last element */}
                    {index === time.length - 1 && <div className={classes.Addtime}>
                      <AddIcon
                        onClick={
                          addTime
                        }
                      />
                    </div>}

                
                    <Timepicker placeholder="Start Time" />
                    <Timepicker placeholder="End Time" />
                    <hr className={classes.hr}/>
                  </div>
                ))
              }
             
              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={day.saturday}
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
              day.saturday && <div className={classes.time}>
                  {
                time.map((item, index) => (
                  <div key={index}>
                    {/* show add icon at the last element */}
                    {index === time.length - 1 && <div className={classes.Addtime}>
                      <AddIcon
                        onClick={
                          addTime
                        }
                      />
                    </div>}

                
                    <Timepicker placeholder="Start Time" />
                    <Timepicker placeholder="End Time" />
                    <hr className={classes.hr}/>
                  </div>
                ))
              }
             
              </div>
            }
            <FormControlLabel
              control={<Checkbox
                checked={day.sunday}
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
              day.sunday && <div className={classes.time}>
                  {
                time.map((item, index) => (
                  <div key={index}>
                    {/* show add icon at the last element */}
                    {index === time.length - 1 && <div className={classes.Addtime}>
                      <AddIcon
                        onClick={
                          addTime
                        }
                      />
                    </div>}

                
                    <Timepicker placeholder="Start Time" />
                    <Timepicker placeholder="End Time" />
                    <hr className={classes.hr}/>
                  </div>
                ))
              }
             
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
      </div>
    </div>
  )
}

export default Availabity