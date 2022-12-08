import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'

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
    const [show, setShow] = useState(false)
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                {/* header */}
                <div className={classes.header}>
                    <h1>Doctors List</h1>
                    <Button
                        variant="contained"
                        // onClick={
                        //     setShow(true)
                        // }
                    >
                        Add Doctor
                    </Button>
                </div>

                {/* table */}
                <div className={classes.table}>
                    <div className={classes.tableHeader}>
                        <div className={classes.tableHeaderItem}>Name</div>
                        <div className={classes.tableHeaderItem}>Designation</div>
                        <div className={classes.tableHeaderItem}>Email</div>
                        <div className={classes.tableHeaderItem}>Phone</div>
                        <div className={classes.tableHeaderItem}>Type</div>
                        <div className={classes.tableHeaderItem}>Actions</div>
                    </div>
                    {doctors.map((doctor) => (
                        <div className={classes.tableRow}>
                            <div className={classes.tableRowItem}>{doctor.name}</div>
                            <div className={classes.tableRowItem}>{doctor.designation}</div>
                            <div className={classes.tableRowItem}>{doctor.email}</div>
                            <div className={classes.tableRowItem}>{doctor.phn}</div>
                            <div className={classes.tableRowItem}>{doctor.type}</div>
                            <div className={classes.tableRowItem}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    className={classes.editButton}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoctorsList