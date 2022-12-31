import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import FormGroup from '@mui/material/FormGroup';
import { Button } from '@mui/material';
import { AvailabilityLogic } from './AvailabilityLogic'
import AddIcon from '@mui/icons-material/Add';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Availabity = () => {
  const classes = useStyles()
  const {
    date,
    setDate,
    startTime,
    setStartTime,
    // startMeridian,
    setStartMeridian,
    endTime,
    setEndTime,
    // endMeridian,
    setEndMeridian,
    defaultMeridianOption,
    MeridianOptions,
    submitHandler,
    show,
    setShow,
    availabilities,
    deleteHandler
  } = AvailabilityLogic()


  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}
        style={{
          height: show ?
            '72vh'
            :
            availabilities && availabilities[0]?.schedule?.length > 12 ?
              'fit-content' :
              '72vh'
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

              {/* pick date from calendar*/}
              <div className={classes.formGroup}>
                <label>
                  Pick a date:
                </label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              {/* pick start time */}
              <div className={classes.formGroup}>
                <label>
                  Start Time:
                </label>
                <div>
                  <input
                    type="time"
                    name="start"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                  <Dropdown
                    options={MeridianOptions}
                    value={defaultMeridianOption}
                    placeholder="Select an option"
                    onChange={(e) => setStartMeridian(e.value)}
                  />
                </div>
              </div>
              {/* pick end time */}
              <div className={classes.formGroup}>
                <label>
                  End Time:
                </label>
                <div>
                  <input
                    type="time"
                    name="end"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                  <Dropdown
                    options={MeridianOptions}
                    value={defaultMeridianOption}
                    placeholder="Select an option"
                    onChange={(e) => setEndMeridian(e.value)}
                  />
                </div>
              </div>
              <Button variant="contained" sx={{
                width: '40%',
                margin: '4rem auto 0 auto',
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
                  <th>Date</th>
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
                          {item.date}
                        </td>
                        <td>{item.startTime}</td>
                        <td>{item.endTime}</td>
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
                            onClick={() => deleteHandler(item.date)}
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