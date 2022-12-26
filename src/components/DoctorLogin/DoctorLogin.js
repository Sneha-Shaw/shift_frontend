import React from 'react'
import useStyles from './styles'
import { Button, TextField } from '@mui/material'
import { DoctorLogic } from './DoctorLogic'
import { signInUser } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';

const DoctorLogin = () => {
    const classes = useStyles()
    const{
        email, setEmail, password, setPassword, loginHandler, error
    } = DoctorLogic()
    const dispatch = useDispatch()

    return (
        <div className={classes.root}>
            <h1>Sign in</h1>
            <div className={classes.form}>
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <p className={classes.error}>{error}</p>
                <Button
                    onClick={ ()=>dispatch(signInUser(email, password))}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default DoctorLogin