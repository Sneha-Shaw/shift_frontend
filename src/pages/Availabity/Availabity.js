import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Typography } from '@mui/material';
import { AvailabilityLogic } from './AvailabilityLogic'
import AddIcon from '@mui/icons-material/Add';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Availabity = () => {
  const classes = useStyles()
  const {
    isday,
    schedule,
    setSchedule,
    handleChange,
    defaultMeridianOption,
    MeridianOptions,
    submitHandler,
    show,
    setShow,
    availabilities,
    deleteHandler
  } = AvailabilityLogic()


  console.log(availabilities && availabilities[0]);

  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}
        style={{
          height: show ? "fit-content" : '75vh'
        }}
      >
        {
          show ?
            <h1>
              Select Availability
            </h1>
            :
            <div className={classes.header}>
              <h1>
                Your Availability
              </h1>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setShow(!show)}
              >
                Add Availability
              </Button>
            </div>
        }
        {
          show && (
            <div className={classes.back}>
              <Button
                // variant="contained"
                onClick={() => setShow(!show)}
              >
                Back
              </Button>
            </div>
          )
        }
        {
          show ?
            <div className={classes.form}>
              {/* check monday then add start time end time appears, then tuesday and so on */}
              <FormGroup
                row
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: "80%",
                  alignItems: 'center',
                }}

              >
                {/* monday start */}
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
                    width: '100%',

                  }}

                />
                {isday.monday &&
                  <div className={classes.time}>

                    <div className={classes.formItemTime}>
                      <label htmlFor="time">Start Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'monday')?.start.split(' ').shift()}
                        onChange={(e) => {
                          // find monday in schedule[{day:monday,start:'},{...}] 
                          // set start time in schedule[{day:monday,start:'12:00'},{...}]
                          setSchedule(schedule.map((item) => item.day === 'monday' ? { ...item, start: e.target.value } : item))
                        }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'monday' ? {
                            ...item, start:
                              schedule.find((item) => item.day === 'monday').start + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>

                    <div className={classes.formItemTime}>
                      <label htmlFor="time">End Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'monday')?.end.split(' ').shift()}
                        onChange={(e) => { setSchedule(schedule.map((item) => item.day === 'monday' ? { ...item, end: e.target.value } : item)) }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'monday' ? {
                            ...item, end:
                              schedule.find((item) => item.day === 'monday').end + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>
                  </div>

                }
                {/* monday end */}
                {/* tuesday start */}
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
                  sx={{
                    display: 'flex',
                    width: '100%',

                  }}
                />
                {
                  isday.tuesday && <div className={classes.time}>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">Start Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'tuesday')?.start.split(' ').shift()}
                        onChange={(e) => {
                          // find tuesday in schedule[{day:tuesday,start:'},{...}] 
                          // set start time in schedule[{day:tuesday,start:'12:00'},{...}]
                          setSchedule(schedule.map((item) => item.day === 'tuesday' ? { ...item, start: e.target.value } : item))
                        }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'tuesday' ? {
                            ...item, start:
                              schedule.find((item
                              ) => item.day === 'tuesday').start + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">End Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'tuesday')?.end.split(' ').shift()}
                        onChange={(e) => { setSchedule(schedule.map((item) => item.day === 'tuesday' ? { ...item, end: e.target.value } : item)) }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'tuesday' ? {
                            ...item, end:
                              schedule.find((item
                              ) => item.day === 'tuesday').end + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>

                  </div>
                }
                {/* tuesday end */}
                {/* wednesday start */}
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
                    <Typography className={classes.formControlLabel} >Wednesday</Typography>
                  }
                  sx={{
                    display: 'flex',
                    width: '100%',

                  }}
                />
                {
                  isday.wednesday && <div className={classes.time}>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">Start Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'wednesday')?.start.split(' ').shift()}
                        onChange={(e) => {
                          // find wednesday in schedule[{day:wednesday,start:'},{...}]
                          // set start time in schedule[{day:wednesday,start:'12:00'},{...}]
                          setSchedule(schedule.map((item) => item.day === 'wednesday' ? { ...item, start: e.target.value } : item))
                        }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'wednesday' ? {
                            ...item, start:
                              schedule.find((item
                              ) => item.day === 'wednesday').start + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">End Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'wednesday')?.end.split(' ').shift()}
                        onChange={(e) => { setSchedule(schedule.map((item) => item.day === 'wednesday' ? { ...item, end: e.target.value } : item)) }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'wednesday' ? {
                            ...item, end:
                              schedule.find((item
                              ) => item.day === 'wednesday').end + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>

                  </div>
                }
                {/* wednesday end */}
                {/* thursday start */}
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
                  sx={{
                    display: 'flex',
                    width: '100%',

                  }}
                />
                {
                  isday.thursday && <div className={classes.time}>



                    <div className={classes.formItemTime}>
                      <label htmlFor="time">Start Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'thursday')?.start.split(' ').shift()}
                        onChange={(e) => {
                          // find thursday in schedule[{day:thursday,start:'},{...}]
                          // set start time in schedule[{day:thursday,start:'12:00'},{...}]
                          setSchedule(schedule.map((item) => item.day === 'thursday' ? { ...item, start: e.target.value } : item))
                        }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'thursday' ? {
                            ...item, start:
                              schedule.find((item
                              ) => item.day === 'thursday').start + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">End Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'thursday')?.end.split(' ').shift()}
                        onChange={(e) => { setSchedule(schedule.map((item) => item.day === 'thursday' ? { ...item, end: e.target.value } : item)) }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'thursday' ? {
                            ...item, end:
                              schedule.find((item
                              ) => item.day === 'thursday').end + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>

                  </div>

                }
                {/* thursday end */}
                {/* friday start */}
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
                  sx={{
                    display: 'flex',
                    width: '100%',

                  }}
                />
                {
                  isday.friday && <div className={classes.time}>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">Start Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'friday')?.start.split(' ').shift()}
                        onChange={(e) => {
                          // find friday in schedule[{day:friday,start:'},{...}]
                          // set start time in schedule[{day:friday,start:'12:00'},{...}]
                          setSchedule(schedule.map((item) => item.day === 'friday' ? { ...item, start: e.target.value } : item))
                        }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'friday' ? {
                            ...item, start:
                              schedule.find((item
                              ) => item.day === 'friday').start + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">End Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'friday')?.end.split(' ').shift()}
                        onChange={(e) => { setSchedule(schedule.map((item) => item.day === 'friday' ? { ...item, end: e.target.value } : item)) }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'friday' ? {
                            ...item, end:
                              schedule.find((item
                              ) => item.day === 'friday').end + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>

                  </div>
                }
                {/* friday end */}
                {/* saturday start */}
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
                  sx={{
                    display: 'flex',
                    width: '100%',

                  }}
                />
                {
                  isday.saturday && <div className={classes.time}>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">Start Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'saturday')?.start.split(' ').shift()}
                        onChange={(e) => {
                          // find saturday in schedule[{day:saturday,start:'},{...}]
                          // set start time in schedule[{day:saturday,start:'12:00'},{...}]
                          setSchedule(schedule.map((item) => item.day === 'saturday' ? { ...item, start: e.target.value } : item))
                        }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'saturday' ? {
                            ...item, start:
                              schedule.find((item
                              ) => item.day === 'saturday').start + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">End Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'saturday')?.end.split(' ').shift()}
                        onChange={(e) => { setSchedule(schedule.map((item) => item.day === 'saturday' ? { ...item, end: e.target.value } : item)) }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'saturday' ? {
                            ...item, end:
                              schedule.find((item
                              ) => item.day === 'saturday').end + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>

                  </div>
                }
                {/* saturday end */}
                {/* sunday start */}
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
                  sx={{
                    display: 'flex',
                    width: '100%',

                  }}
                />
                {
                  isday.sunday && <div className={classes.time}>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">Start Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'sunday')?.start.split(' ').shift()}
                        onChange={(e) => {
                          // find sunday in schedule[{day:sunday,start:'},{...}]
                          // set start time in schedule[{day:sunday,start:'12:00'},{...}]
                          setSchedule(schedule.map((item) => item.day === 'sunday' ? { ...item, start: e.target.value } : item))
                        }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'sunday' ? {
                            ...item, start:
                              schedule.find((item
                              ) => item.day === 'sunday').start + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>
                    <div className={classes.formItemTime}>
                      <label htmlFor="time">End Time:</label>
                      <input
                        type="time"
                        value={schedule.find((item) => item.day === 'sunday')?.end.split(' ').shift()}
                        onChange={(e) => { setSchedule(schedule.map((item) => item.day === 'sunday' ? { ...item, end: e.target.value } : item)) }}
                        className={classes.input}
                      />
                      <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                        onChange={(e) => {
                          setSchedule(schedule.map((item) => item.day === 'sunday' ? {
                            ...item, end:
                              schedule.find((item
                              ) => item.day === 'sunday').end + ' ' + e.value
                          } : item))
                        }}
                      />
                    </div>

                  </div>
                }
                {/* sunday end */}
              </FormGroup>

              <Button variant="contained" sx={{
                width: '60%',
                margin: '2rem auto',
                background: '#06383D',
                color: '#fff',
                fontSize: "1.5rem",
                '&:hover': {
                  background: '#06383D',
                  color: '#fff',
                }
              }}
                onClick={submitHandler}
              >Submit</Button>
            </div>
            :
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              {
                availabilities && availabilities[0]?.schedule?.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>
                          {/* first letter caps */}
                          {item?.day?.charAt(0).toUpperCase() + item?.day?.slice(1)}
                        </td>
                        <td>{item.start}</td>
                        <td>{item.end}</td>
                        <td>

                          <Button variant="contained"
                            sx={{
                              background: 'red',
                              color: '#fff',
                              fontSize: "1.2rem",
                              '&:hover': {
                                background: 'red',
                                color: '#fff',
                              }
                            }} 
                            onClick={() => deleteHandler(item.day)}
                            >Delete</Button>
                        </td>
                      </tr>
                    </tbody>

                  )
                })
              }
            </table>
        }


      </div >
    </div >
  )
}

export default Availabity