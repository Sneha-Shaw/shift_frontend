import React, { useState } from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Availabity = () => {
  const classes = useStyles()
  const [day, setDay] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const handleChange = (event) => {
    setDay({ ...day, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Sidebar />
      <SubSidebar />
      <div className={classes.main}>
        <h1>
          Select Availability
        </h1>
        <div className={classes.form}>
          {/* check monday then add start time end time appears, then tuesday and so on */}
          <FormGroup
            row
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}

          >
            <FormControlLabel
              control={<Checkbox defaultChecked
                checked={day.monday}
                onChange={handleChange}
                name="monday"
              />}
              label="Monday"

            />
            <FormControlLabel
              control={<Checkbox defaultChecked
                checked={day.tuesday}
                onChange={handleChange}
                name="tuesday"
              />}
              label="Tuesday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked
                checked={day.wednesday}
                onChange={handleChange}
                name="wednesday"
              />}
              label="Wednesday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked
                checked={day.thursday}
                onChange={handleChange}
                name="thursday"
              />}
              label="Thursday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked
                checked={day.friday}
                onChange={handleChange}
                name="friday"
              />}
              label="Friday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked
                checked={day.saturday}
                onChange={handleChange}
                name="saturday"
              />}
              label="Saturday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked
                checked={day.sunday}
                onChange={handleChange}
                name="sunday"
              />}
              label="Sunday"
            />
          </FormGroup>

        </div>
      </div>
    </div>
  )
}

export default Availabity