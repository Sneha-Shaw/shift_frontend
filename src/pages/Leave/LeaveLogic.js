import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    getLeaves,
    requestLeave
} from '../../redux/actions/userAction';

export const LeaveLogic = () => {
    const { leaves } = useSelector((state) => state.getLeaves)
    const { userInfo } = useSelector((state) => state.signInUser)
    const { leave } = useSelector((state) => state.requestLeave)

    const [leaveType, setLeaveType] = useState('Casual')
    const [leaveReason, setLeaveReason] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const options = [
        'Casual', 'Sick'
    ];
    const defaultOption = options[0];

    useEffect(() => {
        dispatch(getLeaves(userInfo._id))
    }, [dispatch,userInfo._id])

    useEffect(() => {
        if (leave) {
            dispatch(getLeaves(userInfo._id))
        }
    }, [leave,userInfo._id,dispatch])

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // extract date, month and year from yyyy-mm-dd
    const extractDate = (date) => {
        const dateArray = date.split('-')
        const year = dateArray[0]
        const month = months[parseInt(dateArray[1]) - 1]
        const day = dateArray[2]
        return {
            day,
            month,
            year
        }
    }

    // add leave
    const addLeave = (e) => {
        setShow(!show)
        // get day and month from date
        const { day: startDay, month: startMonth, year: startYear } = extractDate(startDate)
        // match month with month in months array
        var startindex=0;
        months.forEach((month, index) => {
            if (startMonth === month) {
                startindex = index + 1
            }
        })
        const finalStartDate = `${startDay}/${startindex}/${startYear}`
        const { day: endDay, month: endMonth, year: endYear } = extractDate(endDate)
        var endindex=0;
        months.forEach((month, index) => {
            if (endMonth === month) {
                endindex = index + 1
            }
        })
        const finalEndDate = `${endDay}/${endindex}/${endYear}`
        dispatch(requestLeave(userInfo._id, leaveType.toLowerCase(), leaveReason, finalStartDate, finalEndDate))
        Swal.fire({
            icon: 'success',
            title: 'Leave Added Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
  
    
    return {
        leaves,
        show,
        setShow,
        options,
        defaultOption,
        leaveType,
        setLeaveType,
        leaveReason,
        setLeaveReason,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        addLeave

    }

}