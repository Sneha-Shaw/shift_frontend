import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import Switch from '@mui/material/Switch';
import Timepicker from '../../components/Timepicker/TimePicker'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Break = () => {
    const classes = useStyles()
    // breaks array
    const breaks = [
        {
            name: 'Lunch Break',
            duration: '1:00',
            start: '1:30',
            end: '2:30',
            automatic: true,
            manual: false,
            status: true
        },
        {
            name: 'Tea Break',
            duration: '0:30',
            start: '10:30',
            end: '11:00',
            automatic: false,
            manual: true,
            status: false
        },
        {
            name: 'Snack Break',
            duration: '0:30',
            start: '3:30',
            end: '4:00',
            automatic: false,
            manual: true,
            status: true
        },
    ]
    const options = [
        'Manual', 'Automatic'
    ];
    const defaultOption = options[0];
    const [show, setShow] = useState(false)

    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>

                {
                    !show && (
                        <div className={classes.header}>
                            <h1>Break Details</h1>
                            <Button
                                variant="contained"
                                onClick={() => setShow(!show)}
                            >
                                Add Break
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
                    show ? (
                        <div className={classes.form}>
                            {/* back button setshow false */}

                            <div className={classes.header}>
                                <h1 style={{ margin: "0 auto 2rem" }}>Add Break</h1>
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="breakName">Break Name:</label>
                                <input type="text" id="breakName" />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="duration">Duration:</label>
                                <input type="time" id="duration" />
                            </div>
                            <div className={classes.formItemTime}>
                                <Timepicker placeholder="Start Time" />
                            </div>
                            <div className={classes.formItemTime}>
                                <Timepicker placeholder="End Time" />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="type">Type:</label>
                                <Dropdown
                                    options={options}
                                    value={defaultOption}
                                    placeholder="Select an option"

                                />
                            </div>
                            <div className={classes.formItem}>
                                <Button
                                    variant="contained"
                                    onClick={() => setShow(!show)}
                                >
                                    Add Break
                                </Button>
                            </div>
                        </div>
                    )
                        :
                        <table className={classes.table}>
                            <thead>
                                <tr className={classes.tableHeader}>
                                    <th className={classes.tableHeaderItem}>Break Name</th>
                                    <th className={classes.tableHeaderItem}>Duration</th>
                                    <th className={classes.tableHeaderItem}>Start Time</th>
                                    <th className={classes.tableHeaderItem}>End Time</th>
                                    <th className={classes.tableHeaderItem}>Type</th>
                                    <th className={classes.tableHeaderItem}>Status</th>
                                </tr>
                            </thead>

                            {breaks.map((breaks) => (
                                <tbody>
                                    <tr className={classes.tableRow}>
                                        <td className={classes.tableRowItem}>{breaks.name}</td>


                                        <td className={classes.tableRowItem}>{breaks.duration}</td>


                                        <td className={classes.tableRowItem}>{breaks.start}</td>


                                        <td className={classes.tableRowItem}>{breaks.end}</td>


                                        <td className={classes.tableRowItem}>
                                            {
                                                breaks.automatic ? <div>Automatic</div> : <div>Manual</div>
                                            }
                                        </td>


                                        <td className={classes.tableRowItem}>
                                            <Switch
                                                checked={breaks.status}
                                            />
                                        </td>
                                    </tr>
                                </tbody>

                            ))}
                        </table>

                }

            </div>
        </div >
    )
}

export default Break