import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { logoutManager, searchDoctor } from '../../redux/actions/managerAction';
import { logoutUser } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom';

export const NavbarLogic = () => {
  const { userInfo } = useSelector((state) => state.signInUser)
  const { managerInfo } = useSelector((state) => state.signInManager)
  const { doctorInfo: searchData } = useSelector((state) => state.searchDoctor)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const handleLogout = () => {
    if (userInfo) {
      dispatch(logoutUser())
    }
    if (managerInfo) {
      dispatch(logoutManager())
    }
  }
  const [show, setShow] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // random color generation
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var [color, setColor] = useState('')

  useEffect(() => {
    setColor(randomColor())
  }, [])

  useEffect(() => {
    if (userInfo) {
      setId(userInfo._id)
    }
  }, [userInfo])

  useEffect(() => {
    if (managerInfo) {
      setId(managerInfo._id)
    }
  }, [managerInfo])

  // searchDoctor
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(searchDoctor(name))
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id) => {
    setAnchorEl(null);
  };

  useEffect(() => {

    if (managerInfo && searchData) {
      navigate('/attendance/doctors')
    }
  }, [managerInfo, searchData, navigate]
  )

  return {
    handleLogout,
    show,
    setShow,
    anchorEl,
    open,
    handleClick,
    handleClose,
    navigate,
    color,
    userInfo,
    managerInfo,
    id,
    name,
    setName,
    handleSearch
  }


}