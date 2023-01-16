import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react'
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
    const [startTime, setStartTime] = useState('00:00')
    const [endTime, setEndTime] = useState('00:00')
    const [doctorId, setDoctorId] = useState('')
    const [availabilityOps, setAvailabilityOps] = useState('')

    const [show, setShow] = useState(false)

    const [events, setEvents] = useState([])
    const [subEvent, setSubevent] = useState([])
    const [temp, setTemp] = useState({})




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
        // 06:30 PM to 18:30
        // convert 12 hr format to 24 hrex:6:30 PM to 18:30
        const startTime = moment(start, 'hh:mm A').format('HH:mm:ss')
        const endTime = moment(end, 'hh:mm A').format('HH:mm:ss')
        managerInfo ? dispatch(deleteAvailabilityByDate(id, date, startTime, endTime)) : dispatch(deleteAvailabilityByDate(userInfo._id, date, startTime, endTime))
    }

    // onSelectmodal
    const onSelectEventHandler = (e) => {
        const { start, end } = e;
        console.log(start, end);
        setShow(true)
        // stringify start
        const startString = JSON.stringify(start)
        // stringify end
        const endString = JSON.stringify(end)
        // convert 24 hr format to 12 hrex:18:00:00 to 6:00 PM
        const startTime = moment(startString.slice(12, 20), 'HH:mm:ss').format('hh:mm A')
        const endTime = moment(endString.slice(12, 20), 'HH:mm:ss').format('hh:mm A')
        setTemp({
            date: startString.slice(1, 11),
            startTime: startTime,
            endTime: endTime,
            title: e.title,
            doctor: e.doctor
        })
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
        setOpen(true);

        const { start, end } = slots;
        console.log(start, end, "hi");
        const startString = JSON.stringify(start)
        console.log(startString, "start");
        // stringify end
        const endString = JSON.stringify(end)
        //    get time in 24 hr format and setstattime
        setStartTime(startString.slice(12, 20))
        // get time in 24 hr format and set endtime
        setEndTime(endString.slice(12, 20))
        // get date in yyyy-mm-dd format and set date
        setDate(startString.slice(1, 11))
        console.log(startTime, endTime, date);
    }

    const handleClose = () => setOpen(false);

    const onEventDrop = ({ event, start, end }) => {


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

    useEffect(() => {
        if (managerInfo) {
            if (allAvailabilities) {
                if (subEvent.length < allAvailabilities.length) {
                    //    map allavailabilities then map schedule then store all the elements of subarray in subevents
                    allAvailabilities && allAvailabilities.map((availability) => {
                        availability.schedule.map((sub) => {
                            setSubevent((prev) => {
                                return [
                                    // console.log(new Date(sub.date + " " + sub.start)),
                                    ...prev,
                                    {
                                        start: new Date(sub.date + " " + sub.start),
                                        end: new Date(sub.date + " " + sub.end),
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
        }
    }, [managerInfo, allAvailabilities, subEvent])
    // set availability to event to show in calender
    useEffect(() => {
        if (userInfo) {
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
        }
    }, [availabilities, userInfo])


console.log(subEvent, "subEvent");
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
        availabilityOps,
        setAvailabilityOps,
        onSelectEventHandler,
        temp,
        date,
        setDate
    }
}
