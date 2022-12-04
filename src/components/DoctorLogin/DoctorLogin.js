import React from 'react'
import useStyles from './styles'
import { Button, TextField } from '@mui/material'

const DoctorLogin = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h1>Sign in</h1>
            <p className={classes.form}>
                <TextField
                    // onChange={(e) => setEmailValue(e.target.value)}
                    // value={emailValue}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    // autoComplete="email"
                    autoFocus
                />
                <TextField
                    // onChange={(e) => setPasswordValue(e.target.value)}
                    // value={passwordValue}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                />
                <Button
                    // onClick={loginHandler}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
            </p>
        </div>
    )
}

export default DoctorLogin