
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import {
    getAllDoctors,
    getAllLeaves
} from '../../redux/actions/managerAction'
import {
    getSingleUser,
    getLeaves
} from '../../redux/actions/userAction'

export const HomeLogic = () => {
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { user: userData } = useSelector((state) => state.getSingleUser)
    const { userInfo } = useSelector((state) => state.signInUser)
    const { doctorsInfo: doctors } = useSelector(state => state.getAllDoctors)
    const { leaves } = useSelector(state => state.getAllLeaves);
    const { leaves:userLeaves } = useSelector((state) => state.getLeaves)

    // get user name
    const user = userInfo ? userInfo.name : managerInfo.name
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllLeaves())
    }, [dispatch])

    useEffect(() => {
        dispatch(getLeaves(userInfo._id))
    }, [dispatch,userInfo._id])

    useEffect(() => {
        if (userInfo) {
            dispatch(getSingleUser(userInfo._id))
        }
    }, [userInfo, dispatch])
    
    return {
        user,
        navigate,
        userInfo,
        managerInfo,
        doctors,
        leaves,
        userData,
        userLeaves
    }
}