import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    getAllShifts,
    getCalender,
    getAllSlots
} from '../../redux/actions/shiftAction'
import {
    getAllDoctors
} from '../../redux/actions/managerAction'

export const ViewLogic = () => {
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { calender } = useSelector((state) => state.getCalender)
    const { slots } = useSelector((state) => state.getAllSlots)
    const { doctorsInfo: doctors } = useSelector((state) => state.getAllDoctors)
    const { shifts } = useSelector((state) => state.getAllShifts)

    var count = null
    const dispatch = useDispatch()
    // get current month
    const currentMonth = useState(new Date().getMonth())
    const [show, setShow] = useState(false)
    // usestate variable to control addition and deletion of input
    const [doctorList, setDoctorList] = useState([
        {
            doctor: ""
        }
    ])

    // handleadd
    const handleAdd = () => {
        setDoctorList([...doctorList, { doctor: "" }])
    }
    
    // handledelete
    const handleDelete = (index) => {
        const list = [...doctorList]
        list.splice(index, 1)
        setDoctorList(list)
    }

    // call   dispatch(getAllDoctors()) once
    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])

    // call   dispatch(getCalender(currentMonth[0])) once
    useEffect(() => {
        dispatch(getCalender(currentMonth[0]))
        count = 1
    }, [count])


    useEffect(() => {
        dispatch(getAllSlots())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllShifts())
    }, [dispatch])



    return {
        managerInfo,
        calender,
        slots,
        shifts,
        doctors,
        currentMonth,
        show,
        setShow,
        doctorList,
        setDoctorList,
        handleAdd,
        handleDelete
    }
}