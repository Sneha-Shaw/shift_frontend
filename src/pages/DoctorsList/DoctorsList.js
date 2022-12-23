import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { DoctorsLogic } from './DoctorsLogic'
import Switch from '@mui/material/Switch';


const DoctorsList = () => {
    const classes = useStyles()

    const {
        // doctorInfo,
        doctors,
        name,
        setName,
        setDesignation,
        email,
        setEmail,
        phn,
        setPhn,
        dutyHoursPerMonth,
        setDutyHoursPerMonth,
        addDoctorHandler,
        designationOptions,
        defaultdesignationOptions,
        Type,
        defaultType,
        show,
        setShow,
        employType,
        setEmploytype,
        dutyHoursPerDay,
        setDutyHoursPerDay,
        handleChange,
        checked
    } = DoctorsLogic()
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                {/* header */}
                {
                    !show && (
                        <div className={classes.header}>
                            <h1>Doctors</h1>
                            <Button
                                variant="contained"
                                onClick={() => setShow(!show)}
                            >
                                Add Doctor
                            </Button>
                        </div>
                    )
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
                        (<div className={classes.form}>
                            {/* header */}
                            <div className={classes.header}>
                                <h1 style={{ margin: "0 auto 2rem" }}>Add Doctor</h1>
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="designation">Designation:</label>
                                <Dropdown options={designationOptions} value={defaultdesignationOptions} placeholder="Select an option"
                                    onChange={(e) => setDesignation(e.value)}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="phn">Mobile:</label>
                                <input type="text" name="phn" id="phn"
                                    onChange={(e) => setPhn(e.target.value)}
                                    value={phn}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="type">Type:</label>
                                <Dropdown options={Type} value={defaultType} placeholder="Select an option"
                                    onChange={(e) => setEmploytype(e.value)}
                                />
                            </div>
                            {
                                employType === 'Contractual' && (
                                    <div className={classes.formItem}>
                                        <label htmlFor="duration">Duty hours per month:</label>
                                        <input type="text" name="duration" id="duration"
                                            onChange={(e) => setDutyHoursPerMonth(e.target.value)}
                                            value={dutyHoursPerMonth}
                                        />
                                    </div>
                                )
                            }
                            <div className={classes.formItem}>
                                <label htmlFor="duration">Duty hours per day:</label>
                                <input type="text" name="duration" id="duration"
                                    onChange={(e) => setDutyHoursPerDay(e.target.value)}
                                    value={dutyHoursPerDay}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="nightDuty">Night Duty:</label>
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <Button variant="contained" color="primary" size="small" onClick={addDoctorHandler} >
                                    Add
                                </Button>

                            </div>
                        </div>)
                        :
                        (
                            <div className={classes.tableDiv}>
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
                                            <th className={classes.tableHeaderItem}>Actions</th>
                                        </tr>
                                    </thead>

                                    {doctors && doctors.getAllDoctors.map((doctor) => (
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
                                                <td className={classes.tableRowItem}>
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            backgroundColor: "#f44336",
                                                            color: "#fff",
                                                            '&:hover': {
                                                                backgroundColor: "#f44336"
                                                            }
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        sx={{

                                                        }}
                                                    >
                                                        Edit
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    ))}
                                </table>
                            </div>)
                }

            </div>
        </div>
    )
}

export default DoctorsList