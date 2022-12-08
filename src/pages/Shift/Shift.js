import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Shift = () => {
    const classes = useStyles()
    // shift array with name, start time and end time
    const shifts = [
        {
            name: 'Morning Shift',
            start: '8:00 AM',
            end: '12:00 PM'
        },
        {
            name: 'Afternoon Shift',
            start: '12:00 PM',
            end: '4:00 PM'
        },
        {
            name: 'Evening Shift',
            start: '4:00 PM',
            end: '8:00 PM'
        },
        {
            name: 'Night Shift',
            start: '8:00 PM',
            end: '12:00 AM'
        },
    ]

    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            {/* shifts list table co taining shift name timing and edit and delelete option */}
            <div className={classes.main}>
                {/* header */}
                <div className={classes.header}>
                    <h1>Shift Details</h1>
                    {/* <div className={classes.headerButton}> */}
                        <Button
                            variant="contained"
                            >
                            Add Shift
                            </Button>
                    {/* </div> */}
                </div>
                <div className={classes.table}>
                    <div className={classes.tableHeader}>
                        <div className={classes.tableHeaderItem}>Shift Name</div>
                        <div className={classes.tableHeaderItem}>Start Time</div>
                        <div className={classes.tableHeaderItem}>End Time</div>
                        {/* <div className={classes.tableHeaderItem}>Duration</div> */}
                        <div className={classes.tableHeaderItem}>Actions</div>
                        {/* <div className={classes.tableHeaderItem}></div> */}

                        </div>
                    {shifts.map((shift) => (
                        <div className={classes.tableRow}>
                            <div className={classes.tableRowItem}>{shift.name}</div>
                            <div className={classes.tableRowItem}>{shift.start}</div>
                            <div className={classes.tableRowItem}>{shift.end}</div>
                            <div className={classes.tableRowItem}>
                                <Button
                                    variant="contained"
                                    // startIcon={<EditIcon />}
                                    sx={{
                                        background: "#fff",
                                        color: "#000",
                                        border: "1px solid #000",
                                        borderRadius: "0.5rem",
                                        padding: "0.5rem 1rem",
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                        '&:hover':{
                                            background: "#000",
                                            color: "#fff",
                                        }
                                    }}
                                    >
                                    <EditIcon fontSize="large" />
                                </Button>
                                {/* delete */}
                                <Button
                                    variant="contained"
                                    // color="secondary"
                                    // startIcon={}
                                    sx={{
                                        background: "red",
                                        color: "#fff",
                                        border: "1px solid red",
                                        borderRadius: "0.5rem",
                                        padding: "0.5rem 1rem",
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                        '&:hover':{
                                            background: "#fff",
                                            color: "red",
                                        }
                                    }}
                                    >
                                    <DeleteForeverIcon fontSize="large" />
                                </Button>
                            </div>
                            {/* <div className={classes.tableRowItem}>Delete</div> */}
                            </div>
                    ))}
                    </div>
            </div>
        </div>
    )
}

export default Shift