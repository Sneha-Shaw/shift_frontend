import React from 'react'
import useStyles from './styles'
import { LoginLogic } from "./LoginLogic"
import { Button } from '@mui/material'
import DoctorLogin from '../../components/DoctorLogin/DoctorLogin'
import OpManagerLogin from '../../components/OpManagerLogin/OpManagerLogin'

const Login = () => {
  const classes = useStyles()
  const {
    value,
    handleChange
  } = LoginLogic()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.first}>

          {
            value === "1" ? <DoctorLogin /> : (
              <div className={classes.form}>
                <h1>
                  For Doctors
                </h1>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleChange("1")}
                >
                  Login
                </Button>
              </div>
            )

          }
        </div>
        <div className={classes.second}>

          {
            value === "2" ? <OpManagerLogin /> :
              (
                <div className={classes.form}>
                  <h1>
                    For Operation Manager
                  </h1>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleChange("2")}
                  >
                    Login
                  </Button>
                </div>
              )
          }
        </div>

      </div>
    </div>
  )
}

export default Login