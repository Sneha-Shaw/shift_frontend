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
    const [schedule, setSchedule] = useState([])
    const [show, setShow] = useState(false)
    const [isday, setIsDay] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    });

    const MeridianOptions = [
        'AM', 'PM'
    ];
    const defaultMeridianOption = MeridianOptions[0];

    useEffect(() => {
        dispatch(getAvailability(userInfo._id))
    }, [])

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
    }, [availability])

    useEffect(() => {
        if (deleteData) {
            dispatch(getAvailability(userInfo._id))
        }
    }, [deleteData])

    const handleChange = (event) => {
        setIsDay({ ...isday, [event.target.name]: event.target.checked });
        if (event.target.checked) {
            setSchedule([...schedule, { day: event.target.name, start: '', end: '' }])
        }
    };
    // add availability
    const submitHandler = () => {
        setShow(!show)
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
    const deleteHandler = (day) => {
        dispatch(deleteAvailabilityByDay(userInfo._id, day))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${day} removed from your availibility`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    return {
        isday,
        setIsDay,
        schedule,
        setSchedule,
        handleChange,
        defaultMeridianOption,
        MeridianOptions,
        submitHandler,
        show,
        setShow,
        availabilities,
        deleteHandler
    }
}
