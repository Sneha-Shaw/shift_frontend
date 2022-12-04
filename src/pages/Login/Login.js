import React from 'react'
import useStyles from './styles'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {LoginLogic} from "./LoginLogic"

import DoctorLogin from '../../components/DoctorLogin/DoctorLogin'
import OpManagerLogin from '../../components/OpManagerLogin/OpManagerLogin'

const Login = () => {
  const classes = useStyles()
  const {
    handleRadioChange,
    value
} = LoginLogic()
  return (
    <div>
      {value === "doctor" ? <DoctorLogin /> : <OpManagerLogin /> }
        <form >
                <FormControl component="fieldset"  className={classes.formControl}>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            <FormControlLabel value="doctor" control={<Radio color="primary" />} label="Login As Doctor" />
                            <FormControlLabel value="op_manager" control={<Radio color="primary" />} label="Login As Operation Manager" />
                        </RadioGroup>
                </FormControl>
            </form>
    </div>
  )
}

export default Login