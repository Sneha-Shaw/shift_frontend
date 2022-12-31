import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Button } from '@mui/material'
import {
  HomeLogic
} from './HomeLogic'

const Home = () => {
  const classes = useStyles()
  const {
    user,
    navigate,
    managerInfo,
    doctors,
    leaves
  } = HomeLogic()

  return (
    <div className={classes.root}
    style={{
      height: 
      leaves && leaves.getAllLeaves.filter(leave => leave.leaveStatus === "awaiting")?.length > 3 ? "fit-content" : "100vh"
    }}
    >
      <Sidebar />
      {/* Wlcome */}
      <div className={classes.main}>
        <div className={classes.welcome}>
          <h1>Welcome Back, {user}</h1>
          {
            managerInfo && <Button variant="contained" color="primary"
              onClick={() => navigate('/attendance/doctors')}
            >Add New Doctor</Button>
          }

        </div>
        {
          managerInfo && (
            <div style={{
              width: "60%"
            }}>
              <div className={classes.overview}>
                <div className={classes.overviewItem}>
                  <span className={classes.title}>Total Doctors</span>
                  <p className={classes.count}>{
                    doctors && doctors.getAllDoctors.length
                  }</p>
                </div>
                <div className={classes.overviewItem}>
                  <span className={classes.title}>Total Permanent Doctors</span>
                  <p className={classes.count}>
                    {
                      doctors && doctors.getAllDoctors.filter(doctor => doctor.type === "permanent").length
                    }
                  </p>
                </div>
                <div className={classes.overviewItem}>
                  <span className={classes.title}>Total Contractual Doctors</span>
                  <p className={classes.count}>
                    {
                      doctors && doctors.getAllDoctors.filter(doctor => doctor.type === "contractual").length
                    }
                  </p>
                </div>
                <div className={classes.overviewItem}>
                  <span className={classes.title}>Total Leaves</span>
                  <p className={classes.count}>
                    {
                      leaves && leaves.getAllLeaves.length
                    }
                  </p>
                </div>
              </div>
              <div className={classes.recent}>
                <div className={classes.card}>
                  <div className={classes.cardHeader}>
                    <h3>Recent Doctors</h3>
                    <Button
                      onClick={() => navigate('/attendance/doctors')}
                    >See All</Button>
                  </div>
                  <div className={classes.cardBody}>
                    <table className={classes.table}>
                      <thead className={classes.tableHeader}>
                        <tr>
                          <th className={classes.tableHeaderItem}>Name</th>
                          <th className={classes.tableHeaderItem}>Designation</th>
                          <th className={classes.tableHeaderItem}>Email</th>
                          <th className={classes.tableHeaderItem}>Mobile</th>
                          <th className={classes.tableHeaderItem}>Type</th>
                          <th className={classes.tableHeaderItem}>DutyHoursPerDay</th>
                          <th className={classes.tableHeaderItem}>DutyHoursPerMonth</th>
                          <th className={classes.tableHeaderItem}>Night Duty</th>
                        </tr>
                      </thead>

                      {doctors && doctors.getAllDoctors.slice(0, 3).map((doctor) => (
                        <tbody className={classes.tableRow}>
                          <tr>
                            <td className={classes.tableRowItem}>{doctor.name}</td>
                            <td className={classes.tableRowItem}>{doctor.designation}</td>
                            <td className={classes.tableRowItem}>{doctor.email}</td>
                            <td className={classes.tableRowItem}>{doctor.mobile}</td>
                            <td className={classes.tableRowItem}>
                              {doctor.type.charAt(0).toUpperCase() + doctor.type.slice(1)}
                            </td>
                            <td className={classes.tableRowItem}>{doctor.dutyHoursPerDay}</td>
                            <td className={classes.tableRowItem}>{doctor.dutyHoursPerMonth}</td>
                            {
                              doctor.nightDuty ?
                                <td className={classes.tableRowItem}>Yes</td>
                                :
                                <td className={classes.tableRowItem}>No</td>
                            }

                          </tr>
                        </tbody>

                      ))}
                    </table>
                  </div>
                </div>
              </div>
              {/* leaves which needs approval */}
              <div className={classes.recent}>
                <div className={classes.card}>
                  <div className={classes.cardHeader}>
                    <h3>Leaves which needs approval</h3>
                    <Button
                      onClick={() => navigate('/attendance/approvals')}
                    >See All</Button>
                  </div>
                  <div className={classes.cardBody}>
                    <table className={classes.table}>
                      <thead className={classes.tableHeader}>
                        <tr>
                          <th className={classes.tableHeaderItem}>Doctor Name</th>
                          <th className={classes.tableHeaderItem}>Leave Type</th>
                          <th className={classes.tableHeaderItem}>From</th>
                          <th className={classes.tableHeaderItem}>To</th>
                          <th className={classes.tableHeaderItem}>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          leaves && leaves.getAllLeaves.filter(leave => leave.leaveStatus === "awaiting")?.length === 0 && (
                            <tr className={classes.tableRow}>
                              <td className={classes.tableRowItem} colSpan="5">No leaves to approve</td>
                            </tr>
                          )

                        }
                        {leaves && leaves.getAllLeaves.filter(leave => leave.leaveStatus === "awaiting").slice(0, 3).map((leave) => (
                          <tr className={classes.tableRow}>
                            <td className={classes.tableRowItem}>{leave.username}</td>
                            <td className={classes.tableRowItem}>{leave.leaveType}</td>
                            <td className={classes.tableRowItem}>{leave.startDate}</td>
                            <td className={classes.tableRowItem}>{leave.endDate}</td>
                            <td className={classes.tableRowItem}>{leave.leaveReason}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </div>
    </div >
  )
}

export default Home