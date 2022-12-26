import { useState } from 'react'

export const LoginLogic = () => {
  const [value, setValue] = useState(null);



  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return {
    value,
    handleChange
  }
}
