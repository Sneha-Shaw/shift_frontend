import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    addAvailability,
    getAvailability,
    deleteAvailabilityByDate,
    // getAvailabilityByDate,
    // deleteAvailability,
    getAllAvailability
} from '../../redux/actions/shiftAction';
import {
    getAllUsers
} from '../../redux/actions/userAction'

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
    const [startTime, setStartTime] = useState('00:00')
    const [endTime, setEndTime] = useState('00:00')
    const [doctorId, setDoctorId] = useState('')
    const [availabilityOps, setAvailabilityOps] = useState('')

    const [show, setShow] = useState(false)

    const [events, setEvents] = useState([])
    const [subEvent, setSubevent] = useState([])
    const [temp, setTemp] = useState({})

    useEffect(() => {
        if (userInfo) {
            dispatch(getAvailability(userInfo._id))
        }
    }, [userInfo, dispatch])

    useEffect(() => {
        if (availabilities) {
            setEvents(
                availabilities && availabilities[0]?.schedule.map((availability) => {
                    return {
                        //   map availability.schdule
                        start: new Date(availability.start),
                        end: new Date(availability.end),
                        title: availability.title,
                        doctor: availabilities[0].user
                    }
                })
            )
        }
    }, [availabilities])
    useEffect(() => {
        if (managerInfo) {
            dispatch(getAllAvailability())
        }
    }, [managerInfo, dispatch])

    useEffect(() => {
        if (allAvailabilities) {
            if (subEvent.length < allAvailabilities.length) {
                //    map allavailabilities then map schedule then store all the elements of subarray in subevents
                allAvailabilities && allAvailabilities.map((availability, index) => {
                    availability.schedule.map((sub) => {
                        setSubevent((prev) => {
                            return [
                                ...prev,
                                {
                                    start: new Date(sub.start),
                                    end: new Date(sub.end),
                                    title: sub.title,
                                    doctor: availability.user
                                }
                            ]
                        })
                    })
                }
                )
            }
        }
    }, [allAvailabilities])

    useEffect(() => {
        if (managerInfo) {
            dispatch(getAllUsers())
        }
    }, [managerInfo, dispatch])


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



    // add availability
    const submitHandler = () => {
        setOpen(false);
        const schedule = [
            {
                start: startTime,
                end: endTime,
                title: availabilityOps
            }
        ]

        managerInfo ? dispatch(addAvailability(doctorId, schedule)) : dispatch(addAvailability(userInfo._id, schedule))
    }


    // delete availability
    const deleteHandler = (id, start,end) => {
        managerInfo ? dispatch(deleteAvailabilityByDate(id, start,end)) : dispatch(deleteAvailabilityByDate(userInfo._id, start,end))
    }

    // onSelectmodal
    const onSelectEventHandler = (e) => {
        setShow(true)  
        setTemp({
            start: e.start,
            end: e.end,
            title: e.title,
            doctor: e.doctor
        })
        console.log(e.doctor);
    }
  
    // custom styles for events
    const eventStyleGetter = (event) => {
        // check if title is available
        var backgroundColor = event.title === 'Available' ? '#3174AD' : '#f0ad4e';
        // color
        var color = event.title === 'Available' ? '#fff' : '#000';
        var style = {
            backgroundColor: backgroundColor,
            borderRadius: '0px',
            color: color,
            border: '0px',
            display: 'block'
        };
        return {
            style: style
        };
    }

    const handleOpen = (slots) => {
        const { start, end } = slots;
        setStartTime(start)
        setEndTime(end)
        console.log(startTime, endTime);
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    const onEventDrop = ({ event, start, end }) => {
        // setstartTime,endtime
        // setEndTime(end)
        // setStartTime(start)
        // submitHandler()

    };

    const onEventResize = ({ event, start, end }) => {
        const idx = events.indexOf(event);
        const updatedEvents = [...events];
        updatedEvents.splice(idx, 1, {
            ...event,
            start,
            end
        });
        setEvents(updatedEvents);
    };

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
        events,
        subEvent,
        eventStyleGetter,
        open,
        handleOpen,
        handleClose,
        onEventDrop,
        onEventResize,
        setAvailabilityOps,
        onSelectEventHandler,
    }
}
