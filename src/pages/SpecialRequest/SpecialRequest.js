import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import Timepicker from '../../components/Timepicker/TimePicker'
import { Button } from '@mui/material'

const SpecialRequest = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                <h1>Special Request</h1>
                {/* textarea asking request input type date and time */}
                <Timepicker placeholder="Start Time" />
                <Timepicker placeholder="End Time" />
                <div>
                    {/* date */}
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" className={classes.input} />
                </div>
                <div>
                    <label
                        htmlFor="request"
                        style={{
                            display: 'block',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                        }}
                    >
                        Request:
                    </label>
                    <textarea
                        name="request"
                        id="request"
                        cols="30"
                        rows="10"
                    />
                </div>
                <Button
                    variant="contained"
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default SpecialRequest