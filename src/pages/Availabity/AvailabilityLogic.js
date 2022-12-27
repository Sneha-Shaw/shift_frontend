import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    addAvailability,
    getAvailability
} from '../../redux/actions/userAction';

export const AvailabilityLogic = () => {
    // const {availability}  = useSelector(state => state.addAvailability)
    // const {availabilities} = useSelector(state => state.getAvailability)
    const { userInfo } = useSelector((state) => state.signInUser)

    const dispatch = useDispatch()
    const [startTime, setStartTime] = useState([
        '00:00',
        '00:00',
        '00:00',
        '00:00',
        '00:00',
        '00:00',
        '00:00'
    ])
    const [endTime, setEndTime] = useState([
        '00:00',
        '00:00',
        '00:00',
        '00:00',
        '00:00',
        '00:00',
        '00:00'
    ])
    const [startMeridian, setStartmeridian] = useState([
        'AM',
        'AM',
        'AM',
        'AM',
        'AM',
        'AM',
        'AM'
    ])
    const [endMeridian, setEndmeridian] = useState([
        'AM',
        'AM',
        'AM',
        'AM',
        'AM',
        'AM',
        'AM'
    ])

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

    const handleChange = (event) => {
        setIsDay({ ...isday, [event.target.name]: event.target.checked });
    };

    // check which day is true in day object and return it
    const getDay = () => {
        //    check which keys of day has value true returl all
        const days = Object.keys(isday).filter((key) => isday[key]);
        return days;

    }
    const schedule = {
        day: getDay(),
        // get starttime amnd startemerdiab of same index ex: startTime[0] + ' ' + startMerdian[0]
        startTime: startTime.map((time, index) => time + ' ' + startMeridian[index]),
        endTime: endTime.map((time, index) => time + ' ' + endMeridian[index])
    }
    console.log(schedule);
    const setStartTimeHandler = (value, index) => {
        const newStartTime = [...startTime]
        newStartTime[index] = value
        setStartTime(newStartTime)
    }
    const setEndTimeHandler = (value, index) => {
        const newEndTime = [...endTime]
        newEndTime[index] = value
        setEndTime(newEndTime)
    }
    const setStartmeridianHandler = (value, index) => {
        const newStartMeridian = [...startMeridian]
        newStartMeridian[index] = value
        setStartmeridian(newStartMeridian)
    }
    const setEndmeridianHandler = (value, index) => {
        const newEndMeridian = [...endMeridian]
        newEndMeridian[index] = value
        setEndmeridian(newEndMeridian)
    }
    const submitHandler = () => {
        dispatch(addAvailability(schedule))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Availability Added',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return {
        isday,
        setIsDay,
        // schedule,
        // setSchedule,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        startMeridian,
        setStartmeridian,
        endMeridian,
        setEndmeridian,
        handleChange,
        defaultMeridianOption,
        MeridianOptions,
        setStartTimeHandler,
        setEndTimeHandler,
        setStartmeridianHandler,
        setEndmeridianHandler
    }
}
