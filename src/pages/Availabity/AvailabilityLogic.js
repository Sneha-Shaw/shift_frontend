import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    addAvailability,
    getAvailability,
    deleteAvailabilityByDay
} from '../../redux/actions/userAction';

export const AvailabilityLogic = () => {
    const { availability } = useSelector((state) => state.addAvailability)
    const { availabilities } = useSelector((state) => state.getAvailability)
    const { deleteData } = useSelector((state) => state.deleteAvailabilityByDay)
    const { userInfo } = useSelector((state) => state.signInUser)

    const dispatch = useDispatch()
    
    const [date,setDate] = useState('')
    const [startTime,setStartTime] = useState('00:00')
    const [startMeridian,setStartMeridian] = useState('AM')
    const [endTime,setEndTime] = useState('00:00')
    const [endMeridian,setEndMeridian] = useState('AM')
    const [show, setShow] = useState(false)
   
    const MeridianOptions = [
        'AM', 'PM'
    ];
    const defaultMeridianOption = MeridianOptions[0];

    useEffect(() => {
        dispatch(getAvailability(userInfo._id))
    }, [userInfo._id,dispatch])

    useEffect(() => {
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
    }, [availability,userInfo._id,dispatch])

    useEffect(() => {
        if (deleteData) {
            dispatch(getAvailability(userInfo._id))
        }
    }, [deleteData,userInfo._id,dispatch])

   
    // add availability
    const submitHandler = () => {
        setShow(!show)
        const schedule = [
            {
                date,
                startTime: startTime + ' ' + startMeridian,
                endTime: endTime + ' ' + endMeridian
            }
        ]
        console.log(schedule);
        dispatch(addAvailability(userInfo._id, schedule))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Availability Added',
            showConfirmButton: false,
            timer: 1500
        })
    }

    // delete availability
    const deleteHandler = (date) => {
        dispatch(deleteAvailabilityByDay(userInfo._id, date))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${date} removed from your availibility`,
            showConfirmButton: false,
            timer: 1500
        })
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
        deleteHandler
    }
}
