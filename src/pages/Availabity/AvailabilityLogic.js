import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    addAvailability,
    getAvailability,
    deleteAvailabilityByDate,
    getAvailabilityByDate,
    deleteAvailability,
    getAllAvailability
} from '../../redux/actions/shiftAction';
import {
    getAllUsers
} from '../../redux/actions/userAction'

export const AvailabilityLogic = () => {
    const { availability } = useSelector((state) => state.addAvailability)
    const { availabilities } = useSelector((state) => state.getAvailability)
    const { deleteData } = useSelector((state) => state.deleteAvailabilityByDate)
    const { availability: availabilityByDate } = useSelector((state) => state.getAvailabilityByDate)
    const { deleteData: deleteAvailabilityData } = useSelector((state) => state.deleteAvailability)
    const { availabilities: allAvailabilities } = useSelector((state) => state.getAllAvailability)
    const { users } = useSelector((state) => state.getAllUsers)

    const { userInfo } = useSelector((state) => state.signInUser)
    const { managerInfo } = useSelector((state) => state.signInManager)

    const dispatch = useDispatch()

    const [date, setDate] = useState('')
    const [searchDate, setSearchdate] = useState('')
    const [startTime, setStartTime] = useState('00:00')
    const [startMeridian, setStartMeridian] = useState('AM')
    const [endTime, setEndTime] = useState('00:00')
    const [endMeridian, setEndMeridian] = useState('AM')
    const [doctorId, setDoctorId] = useState('')

    const [show, setShow] = useState(false)

    const MeridianOptions = [
        'AM', 'PM'
    ];
    const defaultMeridianOption = MeridianOptions[0];

    useEffect(() => {
        if (userInfo) {
            dispatch(getAvailability(userInfo._id))
        }
    }, [userInfo, dispatch])

    useEffect(() => {
        if (managerInfo) {
            dispatch(getAllAvailability())
        }
    }, [managerInfo, dispatch])

    useEffect(() => {
        if (managerInfo) {
            dispatch(getAllUsers())
        }
    }, [managerInfo, dispatch])

    // getAvailabilityByDate
    const getAvailabilityByDateHandler = (date) => {
        setSearchdate(date)
        dispatch(getAvailabilityByDate(date))
    }

    // deleteAvailability
    const deleteAvailabilityHandler = (id) => {
        dispatch(deleteAvailability(id))
    }

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

    useEffect(() => {
        if (managerInfo) {
            if (availability) {
                dispatch(getAllAvailability())
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Availability Added',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [availability, dispatch, managerInfo])

    useEffect(() => {
        if (userInfo) {
            if (deleteData) {
                dispatch(getAvailability(userInfo._id))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Date removed from your availibility`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [deleteData, userInfo, dispatch])

    useEffect(() => {
        if (managerInfo) {
            if (deleteData) {
                dispatch(getAllAvailability())
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Date removed from availibility`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [deleteData, managerInfo, dispatch])

    useEffect(() => {
        if (managerInfo) {
            if (deleteAvailabilityData) {
                dispatch(getAllAvailability())
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `User removed from availibility`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }, [deleteAvailabilityData, managerInfo, dispatch])

    // add availability
    const submitHandler = () => {
        setShow(!show)
        const schedule = [
            {
                date,
                start: startTime + ' ' + startMeridian,
                end: endTime + ' ' + endMeridian
            }
        ]

        managerInfo ? dispatch(addAvailability(doctorId, schedule)) : dispatch(addAvailability(userInfo._id, schedule))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Availability Added',
            showConfirmButton: false,
            timer: 1500
        })
    }
    // tabs
    const [tab, setTab] = useState(2)
    // changetab
    const changeTab = (index) => {
        setTab(index)
    }
    // delete availability
    const deleteHandler = (id, date) => {
        managerInfo ? dispatch(deleteAvailabilityByDate(id, date)) : dispatch(deleteAvailabilityByDate(userInfo._id, date))
    }
    return {
        date,
        setDate,
        startTime,
        setStartTime,
        startMeridian,
        setStartMeridian,
        endTime,
        setEndTime,
        endMeridian,
        setEndMeridian,
        defaultMeridianOption,
        MeridianOptions,
        submitHandler,
        show,
        setShow,
        availabilities,
        deleteHandler,
        managerInfo,
        getAvailabilityByDateHandler,
        deleteAvailabilityHandler,
        doctorId,
        setDoctorId,
        availabilityByDate,
        searchDate,
        allAvailabilities,
        tab,
        changeTab,
        users
    }
}
