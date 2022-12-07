import React,{useState} from 'react'
import useStyles from './styles'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Timepicker = ({ placeholder }) => {
    const classes = useStyles()
    // const [format,setFormat] = useState('h:mm a');
    const [value, setValue] = useState('10:00');
    const options = [
        'AM', 'PM'
      ];
      const defaultOption = options[0];
    // const now = moment().hour(0).minute(0);
    // input with placeholder, am pm dropdown
    return (
        <div className={classes.root}>
            <label 
                htmlFor="time"
                className={classes.label}
            >
                {
                    placeholder ? placeholder + ': ' : 'Time'
                }
            </label>
            <input  
                type="time"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                // placeholder={placeholder}
                className={classes.input}
            />
              <Dropdown options={options} value={defaultOption} placeholder="Select an option" />

        </div>
    )
}

export default Timepicker