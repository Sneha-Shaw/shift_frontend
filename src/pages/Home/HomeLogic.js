
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
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
    const { leaves: userLeaves } = useSelector((state) => state.getLeaves)

    // get user name
    const user = userInfo ? userInfo.name : managerInfo.name
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])

    useEffect(() => {
        if (userInfo) {
            dispatch(getLeaves(userInfo?._id))
        }
    }, [dispatch, userInfo])

    useEffect(() => {
        dispatch(getAllLeaves())
    }, [
        dispatch
    ])

    useEffect(() => {
        if (userInfo) {
            dispatch(getSingleUser(userInfo?._id))
        }
    }, [dispatch, userInfo])

    useEffect(() => {
        if (userInfo) {
            dispatch(getSingleUser(userInfo._id))
        }
    }, [userInfo, dispatch])

    const [countLeave, setCountLeave] = useState(0)
    useEffect(() => {
        leaves && leaves.getAllLeaves.map((item) => {
            if (item.leaveStatus === 'approved') {
                //   get current week's first day's date and last day's date in dd-mm-yyyy format
                const today = new Date();
                const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
                const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6));

                if (firstDay.getFullYear() === parseInt(item.startDate[6] + item.startDate[7] + item.startDate[8] + item.startDate[9])) {
                    if ((firstDay.getMonth() + 1) === parseInt(item.startDate[3] + item.startDate[4])) {
                        if (firstDay.getDate() <= parseInt(item.startDate[0] + item.startDate[1])) {
                            if (lastDay.getFullYear() === parseInt(item.endDate[6] + item.endDate[7] + item.endDate[8] + item.endDate[9])) {
                                if ((lastDay.getMonth() + 1) === parseInt(item.endDate[3] + item.endDate[4])) {
                                    if (lastDay.getDate() >= parseInt(item.endDate[0] + item.endDate[1])) {
                                        setCountLeave(countLeave + 1)
                                    }
                                }
                            }
                        }
                    }
                }


            }



        })

    }, [leaves])

    return {
        user,
        navigate,
        userInfo,
        managerInfo,
        doctors,
        leaves,
        userData,
        userLeaves,
        countLeave
    }
}