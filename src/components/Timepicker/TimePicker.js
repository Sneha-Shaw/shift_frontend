import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Timepicker = ({ placeholder, handleClick }) => {
    const classes = useStyles()
    // const [format,setFormat] = useState('h:mm a');
    const [value, setValue] = useState('00:00');
    const [meridian, setMeridian] = useState('AM');
    const options = [
        'AM', 'PM'
    ];
    const defaultOption = options[0];
    const time = value + ' ' + meridian;

   

    return (
        <div className={classes.root}

        >
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
                onChange={(e) => {setValue(e.target.value); handleClick(time)}}
                // placeholder={placeholder}
                className={classes.input}
            />
            <Dropdown options={options} value={defaultOption} placeholder="Select an option"
                onChange={(e) => {setMeridian(e.value)}}

            />

        </div>
    )
    // return time to parent component

}

export default Timepicker