import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const Leave = () => {
    const classes = useStyles()
    // array of leave duration start date end date type of leave and leave declined or approved
    const leave = [
        {
            startDate: "Mon, 5th Dec",
            endDate: "Mon, 5th Dec",
            duration: "1 Day",
            type: "Casual",
            status: "awaiting"
        },
        {
            startDate: "Sun, 4th Dec",
            endDate: "Sun, 4th Dec",
            duration: "1 Day",
            type: "Sick",
            status: "approved"
        },
        {
            startDate: "Sat, 3rd Dec",
            endDate: "Sat, 3rd Dec",
            duration: "1 Day",
            type: "Casual",
            status: "declined"
        }
    ]
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                <div className={classes.main__header}>
                    <h1>Leave</h1>
                    <div className={classes.main__header__buttons}>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            className={classes.main__header__buttons__add}
                        >
                            Add Leave
                        </Button>
                    </div>
                </div>
                <div className={classes.main__content}>
                    {
                        leave.map((item, index) => (
                            <div className={classes.main__content__item} key={index}>
                                <div className={classes.main__content__item__left}>
                                    <div>
                                    <h2>{item.duration} Application</h2>
                                    <p
                                    style={{
                                        color: item.type === "Casual" ? "#F0AB00" : "#4BACE8",
                                        border: item.type=== "Casual"? "1px solid #F0AB00": "1px solid #4BACE8",
                                        padding: "0.3rem",
                                        borderRadius: ".5rem",
                                    }}
                                    >{item.type}</p>
                                    </div>
                                    <p>{item.startDate} - {item.endDate}</p>
                                </div>
                                <div className={classes.main__content__item__right}>
                                    <Button variant="contained"
                                    sx={{
                                        background: item.status === "awaiting" ? "#FCEFCF" : item.status === "approved" ? "#D4FFE7" : "#FEEFED",
                                        color: item.status === "awaiting" ? "#F0AB00" : item.status === "approved" ? "#00B74A" : "#FF0000",
                                        '&:hover':{
                                            background: item.status === "awaiting" ? "#FCEFCF" : item.status === "approved" ? "#D4FFE7" : "#FEEFED",
                                            color: item.status === "awaiting" ? "#F0AB00" : item.status === "approved" ? "#00B74A" : "#FF0000",
                                        }
                                    }}
                                    >{item.status}</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Leave