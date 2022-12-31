import React from 'react'
import useStyles from './styles'
import { SettingsLogic } from './SettingsLogic'
import { Button } from '@mui/material'
import Sidebar from '../../components/Sidebar/Sidebar'
import Switch from '@mui/material/Switch';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Settings = () => {
    const classes = useStyles()
    const {
        email,
        setEmail,
        name,
        setName,
        phone,
        setPhone,
        address,
        setAddress,
        city,
        setCity,
        state,
        setState,
        zip,
        setZip,
        about,
        setAbout,
        nightDuty,
        setNightDuty,
        managerInfo,
        updateHandler,
        designation,
        setDesignation,
        designationOptions,
        defaultdesignationOptions
    } = SettingsLogic()
    return (
        <div className={classes.root}>
            <Sidebar />
            <div className={classes.container}
                style={{
                    height: 'fit-content'
                }}
            >
                <div className={classes.header}>
                    <h1>Settings</h1>
                </div>

                <div className={classes.form}>

                    <div className={classes.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="phone">Mobile:</label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    {
                        !managerInfo && (
                            <div className={classes.formGroup}>
                                <label htmlFor="designation">Designation:</label>
                                <div style={{
                                    width: "50%",
                                    margin: "0 auto"
                                }}>
                                    <Dropdown options={designationOptions} placeholder="Select an option"
                                        onChange={(e) => setDesignation(e.value)}
                                        value={designation ? designation : defaultdesignationOptions}
                                    />
                                </div>
                            </div>
                        )
                    }
                    <div className={classes.formGroup}>
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="zip">Zip Code:</label>
                        <input
                            type="text"
                            name="zip"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="country">Country:</label>
                        <input
                            type="text"
                            name="country"
                            value="India"
                            disabled
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="about">About:</label>
                        <textarea
                            name="about"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </div>
                    {
                        !managerInfo && (
                            <div className={classes.formGroupCheck}>
                                <label htmlFor="nightDuty">Night Duty:</label>
                                <Switch
                                    checked={nightDuty}
                                    onChange={() => setNightDuty(!nightDuty)}
                                    name="nightDuty"
                                />
                            </div>
                        )
                    }
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={updateHandler}
                    >
                        Update
                    </Button>
                </div>


            </div>
        </div>
    )
}

export default Settings