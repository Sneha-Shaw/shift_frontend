import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, } from 'react'
import Swal from 'sweetalert2';
import {
    addAvailability,
    getAvailability,
    deleteAvailabilityByDate,
    getAllAvailability
} from '../../redux/actions/availabilityAction';
import {
    getAllUsers
} from '../../redux/actions/userAction'
import moment from 'moment'

export const AvailabilityLogic = () => {
    const { availability } = useSelector((state) => state.addAvailability)
    const { availabilities } = useSelector((state) => state.getAvailability)
    const { deleteData } = useSelector((state) => state.deleteAvailabilityByDate)
    // const { availability: availabilityByDate } = useSelector((state) => state.getAvailabilityByDate)
    // const { deleteData: deleteAvailabilityData } = useSelector((state) => state.deleteAvailability)
    const { availabilities: allAvailabilities } = useSelector((state) => state.getAllAvailability)
    const { users } = useSelector((state) => state.getAllUsers)

    const { userInfo } = useSelector((state) => state.signInUser)
    const { managerInfo } = useSelector((state) => state.signInManager)

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('00:00:00')
    const [endTime, setEndTime] = useState('00:00:00')
    const [doctorId, setDoctorId] = useState('')
    const [availabilityOps, setAvailabilityOps] = useState('')

    const [show, setShow] = useState(false)

    // const [events, setEvents] = useState([])
    // const [subEvent, setSubevent] = useState([])
    // const [temp, setTemp] = useState({})




    // add availability
    const submitHandler = () => {
        setShow(false)
        setOpen(false);
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
    const deleteHandler = (id, date, start, end) => {
        setShow(false)
        const startTime = moment(start, 'HH:mm').format('hh:mm A')
        const endTime = moment(end, 'HH:mm').format('hh:mm A')
        managerInfo ? dispatch(deleteAvailabilityByDate(id, date, startTime, endTime)) : dispatch(deleteAvailabilityByDate(userInfo._id, date, startTime, endTime))
    }

    // onSelectmodal
    const onSelectEventHandler = (e) => {
        setShow(true)
        setDate(e.start)
        setStartTime(e.start)
        setEndTime(e.end)
        setAvailabilityOps(e.title)
        managerInfo ? setDoctorId(e.doctorId) : setDoctorId(userInfo._id)
    }
    // // custom styles for events
    // const eventStyleGetter = (event) => {
    //     // check if title is available
    //     var backgroundColor = event.title === 'Available' ? '#3174AD' : '#f0ad4e';
    //     // color
    //     var color = event.title === 'Available' ? '#fff' : '#000';
    //     var style = {
    //         backgroundColor: backgroundColor,
    //         borderRadius: '0px',
    //         color: color,
    //         border: '0px',
    //         display: 'block'
    //     };
    //     return {
    //         style: style
    //     };
    // }

    const handleOpen = () => {
        setOpen(true);


    }

    const handleClose = () => setOpen(false);


    // get availability for doctor
    useEffect(() => {
        if (userInfo) {
            dispatch(getAvailability(userInfo._id))
        }
    }, [userInfo, dispatch])


    // get all availability for manager
    useEffect(() => {
        if (managerInfo) {
            dispatch(getAllAvailability())

        }
    }, [managerInfo, dispatch])

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

    // get all availability for manager after adding an availability

    useEffect(() => {
        if (managerInfo) {
            if (availability) {
                dispatch(getAllAvailability())
                // refresh
                window.location.reload()
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

    // get availability for user after deleting an availability

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


    // get all availability for manager after deleting an availability
    useEffect(() => {
        if (managerInfo) {
            if (deleteData) {
                dispatch(getAllAvailability())
                // refresh
                // window.location.reload()
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

  
    return {
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        show,
        setShow,
        availabilities,
        deleteHandler,
        managerInfo,
        doctorId,
        setDoctorId,
        // availabilityByDate,
        allAvailabilities,
        users,
        userInfo,
        submitHandler,
        // events,
        // subEvent,
        // eventStyleGetter,
        open,
        handleOpen,
        handleClose,
        // onEventDrop,
        // onEventResize,
        availabilityOps,
        setAvailabilityOps,
        onSelectEventHandler,
        // temp,
        date,
        setDate
    }
}
