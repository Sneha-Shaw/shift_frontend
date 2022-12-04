import {  useState } from 'react'




export const LoginLogic = () => {
    const [value, setValue] = useState('doctor');  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
    };

      

    

    return {
        handleRadioChange,
        value
        
    }
}
