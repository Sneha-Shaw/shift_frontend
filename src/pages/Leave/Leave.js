import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import DateTimePicker from 'react-datetime-picker';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
    const [show, setShow] = useState(false)
    const options = [
        'Casual', 'Sick'
      ];
      const defaultOption = options[0];
    const [fromvalue, onChangefrom] = useState(new Date());
    const [tovalue, onChangeto] = useState(new Date());
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                {
                    show ? (
                        <div className={classes.main__form}>
                            <div className={classes.header}>

                                <h1 style={{ color: "#06283D" }}>Apply for Leave</h1>
                            </div>
                            {/* <div className={classes.main__content}> */}
                            <div className={classes.main__content__form}>
                                {/* from: day,date,month time input am pm dropdown */}
                                <div className={classes.main__content__form__input}>
                                    <label >From:</label>

                                    <div className={classes.main__content__form__input__div}>
                                        <DateTimePicker onChange={onChangefrom} value={fromvalue} />

                                    </div>

                                </div>

                                {/* to: day,date,month time input am pm dropdown */}
                                <div className={classes.main__content__form__input}>
                                    <label >To:</label>

                                    <div className={classes.main__content__form__input__div}>
                                        <DateTimePicker style={{ width: "100%" }} onChange={onChangeto} value={tovalue} />

                                    </div>

                                </div>

                                <div className={classes.main__content__form__input}>
                                    <label htmlFor="type">Type of Leave:</label>
                                    <div className={classes.main__content__form__input__div}>
                                      
                                      <Dropdown options={options}value={defaultOption} placeholder="Select an option" />
                                        {/* <select name="type" id="type">
                                        <option value="casual">Casual</option>
                                        <option value="sick">Sick</option>
                                    </select> */}
                                    </div>
                                </div>
                                <div className={classes.main__content__form__input}>
                                    <label htmlFor="reason">Reason:</label>
                                    <div className={classes.main__content__form__input__div}>

                                        <textarea name="reason" id="reason" cols="30" rows="10" />
                                    </div>
                                </div>
                                <div className={classes.main__content__form__input}>
                                    <Button variant="contained" color="primary" onClick={() => setShow(false)}>Apply</Button>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>

                    )
                        :

                        <>
                            <div className={classes.main__header}>
                                <h1>Leaves</h1>
                                <div className={classes.main__header__buttons}>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        className={classes.main__header__buttons__add}
                                        onClick={() => setShow(true)}
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
                                                            border: item.type === "Casual" ? "1px solid #F0AB00" : "1px solid #4BACE8",
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
                                                        '&:hover': {
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
                        </>

                }

            </div >

        </div >
    )
}

export default Leave