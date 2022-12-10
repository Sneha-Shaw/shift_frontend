import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const DoctorsList = () => {
    const classes = useStyles()
    // doctor list : name, designation,email,phn
    const doctors = [
        {
            name: 'Dr. John Doe',
            designation: 'Senior',
            email: 'johndoe@gmail.com',
            phn: '1234567890',
            type: 'Permanent'
        },
        {
            name: 'Dr. Jane Doe',
            designation: 'Regular',
            email: 'jandoe@gmail.com',
            phn: '1234567890',
            type: 'Contractual'
        },
    ]
    const designationOptions = [
        'Senior', 'Regular', 'Junior'
    ]
    const defaultdesignationOptions = designationOptions[0];
    const Type = [
        'Permanent', 'Contractual'
    ]
    const defaultType = Type[0];
    const [show, setShow] = useState(false)
    const [employType, setEmploytype] = useState('Permanent')
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
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="designation">Designation:</label>
                                <Dropdown options={designationOptions} value={defaultdesignationOptions} placeholder="Select an option" />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="phn">Mobile:</label>
                                <input type="text" name="phn" id="phn" />
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
                                        <input type="text" name="duration" id="duration" />
                                    </div>
                                )
                            }
                            <div className={classes.formItem}>
                                <Button variant="contained" color="primary" size="small" onClick={() => setShow(!show)}>
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
                                            <th className={classes.tableHeaderItem}>Actions</th>
                                        </tr>
                                    </thead>

                                    {doctors.map((doctor) => (
                                        <tbody className={classes.tableRow}>
                                            <tr>
                                                <td className={classes.tableRowItem}>{doctor.name}</td>
                                                <td className={classes.tableRowItem}>{doctor.designation}</td>
                                                <td className={classes.tableRowItem}>{doctor.email}</td>
                                                <td className={classes.tableRowItem}>{doctor.phn}</td>
                                                <td className={classes.tableRowItem}>{doctor.type}</td>
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