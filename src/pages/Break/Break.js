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
                    show ? (
                        <div className={classes.form}>
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
                        <div className={classes.table}>
                            <div className={classes.tableHeader}>
                                <div className={classes.tableHeaderItem}>Break Name</div>
                                <div className={classes.tableHeaderItem}>Duration</div>
                                <div className={classes.tableHeaderItem}>Start Time</div>
                                <div className={classes.tableHeaderItem}>End Time</div>
                                <div className={classes.tableHeaderItem}>Type</div>
                                <div className={classes.tableHeaderItem}>Status</div>
                            </div>
                            {breaks.map((breaks) => (
                                <div className={classes.tableRow}>
                                    <div className={classes.tableRowItem}>{breaks.name}</div>
                                    <div className={classes.tableRowItem}>{breaks.duration}</div>
                                    <div className={classes.tableRowItem}>{breaks.start}</div>
                                    <div className={classes.tableRowItem}>{breaks.end}</div>
                                    <div className={classes.tableRowItem}>
                                        {
                                            breaks.automatic ? <div>Automatic</div> : <div>Manual</div>
                                        }
                                    </div>
                                    <div className={classes.tableRowItem}>
                                        <Switch
                                            checked={breaks.status}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                }

            </div>
        </div>
    )
}

export default Break