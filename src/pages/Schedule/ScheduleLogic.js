
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    getCalender,
    getShiftsByDoctor
} from '../../redux/actions/shiftAction'
import {
    getAllSlots
} from '../../redux/actions/slotAction'
import {
    getAllDoctors,
    getAllDomains
} from '../../redux/actions/managerAction'
import {
    getSingleUser
} from '../../redux/actions/userAction'

export const ScheduleLogic = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.signInUser)
    const { user } = useSelector((state) => state.getSingleUser)
    const { calender } = useSelector((state) => state.getCalender)
    const { slots } = useSelector((state) => state.getAllSlots)
    const { doctorsInfo: doctors } = useSelector((state) => state.getAllDoctors)
    const {shifts} = useSelector((state) => state.getShiftsByDoctor)
    const { domains: alldomains } = useSelector(state => state.getAllDomains)
    // const { doctorInfo: searchData } = useSelector((state) => state.searchDoctor)
    var count = null
    const [domainOp, setDomainOp] = useState("")
    const [doctorId,setDoctorId] = useState("")
    const currentMonth = useState(new Date().getMonth())

    useEffect(() => {
        if (userInfo) {
            dispatch(getAllDoctors())
            dispatch(getSingleUser(userInfo._id))
            dispatch(getAllDomains())
            dispatch(getAllSlots())
            setDoctorId(userInfo._id)
        }
    }, [userInfo, dispatch])

    useEffect(() => {
        dispatch(getCalender(currentMonth[0]))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        count = 1
    }, [count])

    const handleGetShifts = () => {
      
        dispatch(getShiftsByDoctor(doctorId,domainOp))
    }




    return {
        navigate,
        userInfo,
        user,
        calender,
        slots,
        doctors,
        shifts,
        alldomains,
        domainOp,
        handleGetShifts,
        doctorId,
        setDoctorId,
        setDomainOp
    }
}