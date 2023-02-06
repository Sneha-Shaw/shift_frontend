import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, } from 'react'
import Swal from 'sweetalert2';
import {
    addAvailability,
    getAvailability,
    getAvailabilityByDate,
    deleteAvailabilityByDate
} from '../../redux/actions/availabilityAction';
import {
    getAllUsers
} from '../../redux/actions/userAction'
import moment from 'moment'

export const AvailabilityLogic = () => {
    const { availability } = useSelector((state) => state.addAvailability)
    const { availabilities } = useSelector((state) => state.getAvailability)
    const { availability: availabilityByDate } = useSelector((state) => state.getAvailabilityByDate)
    const { deleteData: deleteAvailabilityData } = useSelector((state) => state.deleteAvailabilityByDate)
    const { users } = useSelector((state) => state.getAllUsers)

    const { userInfo } = useSelector((state) => state.signInUser)
    const { managerInfo } = useSelector((state) => state.signInManager)

    const dispatch = useDispatch()

    // get current date in format YYYY-MM-DD
    const today = moment().format('YYYY-MM-DD')
    const todayDate = today[8] === '0' ? today[9] : today[8] + today[9]

    const [date, setDate] = useState(todayDate)
    const [startTime, setStartTime] = useState('12:00 AM')
    const [endTime, setEndTime] = useState('12:00 AM')
    const [doctorId, setDoctorId] = useState('')
    const [availabilityOps, setAvailabilityOps] = useState('')

    const [show, setShow] = useState(false)
    const [availabilityBy, setAvailabilityby] = useState('date')

    // add availability
    const submitHandler = () => {
        setShow(false)
        const schedule = [
            {
                date: date,
                start: startTime,
                end: endTime,
                title: availabilityOps
            }
        ]

        managerInfo ? dispatch(addAvailability(doctorId, schedule)) : dispatch(addAvailability(userInfo._id, schedule))
    }


    // delete availability
    const deleteHandler = (id,date,start,end) => {
        managerInfo ? dispatch(deleteAvailabilityByDate(id,date,start,end)) : dispatch(deleteAvailabilityByDate(userInfo._id,date,start,end))
    }


    // get availability by date if availabilityBy is date else if it is doctor then call getAvailability by user id
    const getAvailabilityHandler = () => {
        if (availabilityBy === 'date') {

            dispatch(getAvailabilityByDate(date))
        }
        else if (availabilityBy === 'doctor') {
            dispatch(getAvailability(doctorId))
        }
    }


    // get availability for doctor
    useEffect(() => {
        if (userInfo) {
            dispatch(getAvailability(userInfo._id))
        }
    }, [userInfo, dispatch])


    // get all users for manager

    useEffect(() => {
        if (managerInfo) {
            dispatch(getAllUsers())
        }
    }, [managerInfo, dispatch])

    // get availability for user after adding an availability

    useEffect(() => {
        if (userInfo) {
            if (availability) {
                dispatch(getAvailability(userInfo._id))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Availability Added',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [availability, dispatch, userInfo])


    // get availability for user after deleting an availability
    useEffect(() => {
        if (userInfo) {
            if (deleteAvailabilityData) {
                dispatch(getAvailability(userInfo._id))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Availability Deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [deleteAvailabilityData, dispatch, userInfo])

    // get availability for manager after adding an availability
    useEffect(() => {
        if (managerInfo) {
            if (availability) {
                setAvailabilityby('doctor')
                dispatch(getAvailability(doctorId))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Availability Added',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [availability, dispatch, managerInfo, doctorId])

    // get availability for manager after deleting an availability
    useEffect(() => {
        if (managerInfo) {
            if (deleteAvailabilityData) {
                dispatch(getAvailability(doctorId))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Availability Deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [deleteAvailabilityData, dispatch, managerInfo, doctorId])

    // get availability for manager after deleting an availability
    useEffect(() => {
        if (managerInfo) {
            if (deleteAvailabilityData) {
                dispatch(getAvailabilityByDate(date))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Availability Deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [deleteAvailabilityData, dispatch, managerInfo, date])

    



    return {
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        show,
        setShow,
        availabilities,
        managerInfo,
        doctorId,
        setDoctorId,
        availabilityByDate,
        users,
        userInfo,
        submitHandler,
        availabilityOps,
        setAvailabilityOps,
        date,
        setDate,
        availabilityBy,
        setAvailabilityby,
        getAvailabilityHandler,
        deleteHandler
    }
}
