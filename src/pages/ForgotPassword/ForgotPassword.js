import React from 'react'
import useStyles from './styles'
import { Button } from '@mui/material'
import { ForgotPasswordLogic } from './ForgotPasswordLogic'

const ForgotPassword = () => {
    const classes = useStyles()
    const { email, setEmail, handleSubmit } = ForgotPasswordLogic()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h1>Forgot your Password?</h1>
                    <p>Enter your email address and we'll send you a link to reset your password.</p>
                    <div className={classes.formBody}>
                        <div className={classes.input}>
                            <label htmlFor="password">Email:</label>
                            <input type="email" name="email" id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                             />
                        </div>
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.btn}
                        onClick={handleSubmit}
                    >Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword