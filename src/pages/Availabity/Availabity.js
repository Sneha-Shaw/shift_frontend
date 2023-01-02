import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
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
    deleteHandler,
    managerInfo,
    getAvailabilityByDateHandler,
    deleteAvailabilityHandler,
    setDoctorId,
    availabilityByDate,
    searchDate,
    allAvailabilities,
    tab,
    changeTab,
    users
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
              {
                managerInfo ?
                  <h1>
                    Everyone's Availability
                  </h1>
                  :
                  <h1>
                    Your Availability
                  </h1>
              }

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

              {/* pick doctor */}
              {
                managerInfo &&
                <div className={classes.formGroup}>
                  <label>
                    Select Doctor:
                  </label>
                    {/* select through users */}
                    <select
                      name="doctor"
                      // value={doctor}
                      onChange={(e) => setDoctorId(e.target.value)}
                    >
                      <option>
                        Select an option
                      </option>
                      {
                        users?.map((user) => (
                          <option
                            key={user._id}
                            value={user._id}
                          >
                            {user.name}
                          </option>
                        ))
                      }
                    </select>
                </div>
              }

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
                onClick={() => submitHandler()}
              >Submit</Button>
            </div>
            :

            managerInfo ?
              // table for doctors availability by date
              <div className={classes.tableContainer}>
                {/* tabs */}
                <div className={classes.tabs}>
                  <Button
                    variant="contained"
                    className={tab === 1 ? classes.activeTab : classes.tab}
                    onClick={() => changeTab(1)}
                  >
                    <h3>By Date</h3>
                  </Button>
                  <Button
                    variant="contained"
                    className={tab === 2 ? classes.activeTab : classes.tab}
                    onClick={() => changeTab(2)}
                  >
                    <h3>All</h3>
                  </Button>
                </div>
                {
                  tab === 1 ?
                    <div style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <div className={classes.formGroup}>
                        <label>
                          Pick a date:
                        </label>
                        <input
                          type="date"
                          name="date"
                          // value={e.target.value}
                          onChange={(e) => getAvailabilityByDateHandler(e.target.value)}
                        />
                      </div>
                      <table className={classes.table}>
                        <thead>
                          <tr>
                            <th>Doctor Name</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        {
                          !searchDate &&
                          <tbody>
                            <tr>
                              <td colSpan="4">
                                Please select a date
                              </td>
                            </tr>
                          </tbody>
                        }
                        {
                          availabilityByDate && availabilityByDate.length===0 &&
                          <tbody>
                            <tr>
                              <td colSpan="4">
                                No Doctors available
                              </td>
                            </tr>
                          </tbody>
                        }
                        {
                          availabilityByDate && availabilityByDate.map((item, index) => {
                            return (
                              <tbody key={index}>
                                <tr>
                                  <td>
                                    {item.user.name}
                                  </td>
                                  <td>
                                    {/* filter date in item.schedule  */}
                                    {
                                      item.schedule.filter((item) => item.date === searchDate).map((item, index) => {
                                        return (
                                          <div key={index}>
                                            {item.start}
                                          </div>
                                        )
                                      })
                                    }
                                  </td>
                                  <td>
                                    {
                                      item.schedule.filter((item) => item.date === searchDate).map((item, index) => {
                                        return (
                                          <div key={index}>
                                            {item.end}
                                          </div>
                                        )
                                      })
                                    }
                                  </td>
                                  <td>
                                    <Button variant="contained"
                                      sx={{
                                        background: 'red',
                                        color: '#fff',
                                        '&:hover': {
                                          background: 'red',
                                          color: '#fff',
                                        }
                                      }}
                                      onClick={() => deleteHandler(item.user._id, searchDate)}
                                    >
                                      Delete By date
                                    </Button>
                                  </td>
                                </tr>
                              </tbody>
                            )
                          })
                        }
                      </table>
                    </div>
                    :
                    <table className={classes.table}>
                      <thead>
                        <tr>
                          <th>Doctor Name</th>
                          <th>Date</th>
                          <th>Start Time</th>
                          <th>End Time</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {
                        allAvailabilities && allAvailabilities.map((item, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td>
                                  {item.user.name}
                                </td>
                                <td>
                                  {
                                    item.schedule.map((item, index) => {
                                      return (
                                        <div key={index}>
                                          {item.date}
                                        </div>
                                      )
                                    })
                                  }
                                </td>
                                <td>
                                  {
                                    item.schedule.map((item, index) => {
                                      return (
                                        <div key={index}>
                                          {item.start}
                                        </div>
                                      )
                                    })
                                  }
                                </td>
                                <td>
                                  {
                                    item.schedule.map((item, index) => {
                                      return (
                                        <div key={index}>
                                          {item.end}
                                        </div>
                                      )
                                    })
                                  }
                                </td>
                                <td>
                                  <Button variant="contained"
                                    sx={{
                                      background: 'red',
                                      color: '#fff',
                                      '&:hover': {
                                        background: 'red',
                                        color: '#fff',
                                      }
                                    }}
                                    onClick={() => deleteAvailabilityHandler(item.user._id)}
                                  >
                                    Delete All Timings
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })
                      }
                    </table>
                }
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
                              onClick={() => deleteHandler(availabilities && availabilities[0]?.user?._id, item.date)}
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