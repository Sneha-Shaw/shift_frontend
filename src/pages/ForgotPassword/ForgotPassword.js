import React from 'react'
import useStyles from './styles'
import { Button } from '@mui/material'

const ForgotPassword = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h1>Forgot your Password?</h1>
                    <p>Enter your email address and we'll send you a link to reset your password.</p>
                    <div className={classes.formBody}>
                        <div className={classes.input}>
                            <label htmlFor="password">Email:</label>
                            <input type="email" name="email" id="email" />
                        </div>
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.btn}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword