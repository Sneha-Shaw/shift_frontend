import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const LoginLogic = () => {
  const [value, setValue] = useState(null);

  const { userInfo } = useSelector(state => state.signInUser)
  const { managerInfo } = useSelector((state) => state.signInManager)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    if (managerInfo ||  userInfo) {
      navigate('/')
    }
  }, [dispatch, managerInfo, navigate, userInfo])



  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return {
    value,
    handleChange
  }
}
