import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import Switch from '@mui/material/Switch';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { BreakLogic } from './BreakLogic'

const Break = () => {
    const classes = useStyles()
    const {
        breaks,
        show,
        setShow,
        defaultOption,
        options,
        addBreak,
        breakName,
        setBreakName,
        breakDuration,
        setBreakDuration,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        setBreakType,
        updateBreakStatus,
        deleteBreak,
        setStartmeridian,
        setEndmeridian,
        MeridianOptions,
        addUnits,
        defaultMeridianOption
    } = BreakLogic()

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
                                <input type="text" id="breakName"
                                    value={breakName}
                                    onChange={(e) => setBreakName(e.target.value)}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="duration">Duration:</label>
                                <input type="time" id="duration"
                                    value={breakDuration}
                                    onChange={(e) => {setBreakDuration(e.currentTarget.value);addUnits(e.currentTarget.value)}}
                                />
                            </div>
                            <div className={classes.formItemTime}>
                                <label htmlFor="time">Start Time:</label>
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => { setStartTime(e.target.value); }}
                                    className={classes.input}
                                />
                                <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                                    onChange={(e) => { setStartmeridian(e.value) }}
                                />
                            </div>
                            <div className={classes.formItemTime}>
                                <label htmlFor="time">End Time:</label>
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => { setEndTime(e.target.value); }}
                                    className={classes.input}
                                />
                                <Dropdown options={MeridianOptions} value={defaultMeridianOption} placeholder="Select an option"
                                    onChange={(e) => { setEndmeridian(e.value) }}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="type">Type:</label>
                                <Dropdown
                                    options={options}
                                    value={defaultOption}
                                    placeholder="Select an option"
                                    onChange={(e) => setBreakType(e.value)}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <Button
                                    variant="contained"
                                    onClick={() => addBreak()}
                                >
                                    Add Break
                                </Button>
                            </div>
                        </div>
                    )
                        :
                        <div className={classes.tableDiv}>
                            <table className={classes.table}>
                                <thead>
                                    <tr className={classes.tableHeader}>
                                        <th className={classes.tableHeaderItem}>Break Name</th>
                                        <th className={classes.tableHeaderItem}>Duration</th>
                                        <th className={classes.tableHeaderItem}>Start Time</th>
                                        <th className={classes.tableHeaderItem}>End Time</th>
                                        <th className={classes.tableHeaderItem}>Type</th>
                                        <th className={classes.tableHeaderItem}>Status</th>
                                        <th className={classes.tableHeaderItem}>Action</th>
                                    </tr>
                                </thead>

                                {breaks && breaks?.getAllBreaks.map((breaks, index) => (
                                    <tbody key={index}>
                                        <tr className={classes.tableRow}>
                                            <td className={classes.tableRowItem}>{breaks.breakName}</td>


                                            <td className={classes.tableRowItem}>{breaks.breakDuration}</td>


                                            <td className={classes.tableRowItem}>{breaks.startTime}</td>


                                            <td className={classes.tableRowItem}>{breaks.endTime}</td>


                                            <td className={classes.tableRowItem}>
                                                {
                                                    breaks.breakType==='Automatic' ? <div>Automatic</div> : <div>Manual</div>
                                                }
                                            </td>


                                            <td className={classes.tableRowItem}>
                                                <Switch
                                                    checked={breaks.breakStatus}
                                                    onChange={() => updateBreakStatus(breaks._id, !breaks.breakStatus)}
                                                />
                                            </td>
                                            <td className={classes.tableRowItem}>   
                                                <Button
                                                    variant="contained"
                                                    onClick={() => deleteBreak(breaks._id)}
                                                    sx={{
                                                        backgroundColor: "#f44336",
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
                        </div>
                }

            </div>
        </div >
    )
}

export default Break