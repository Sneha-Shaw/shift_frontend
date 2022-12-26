import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    requestShiftReplace
} from '../../redux/actions/userAction';

export const ShiftReplaceLogic=() =>{
    const {userInfo} = useSelector((state) => state.signInUser)
    const { shiftReplace } = useSelector((state) => state.requestShiftReplace)

    const dispatch = useDispatch()

    const options = [
        'AM', 'PM'
      ];
      const defaultOption = options[0];

    const [name, setName] = useState('')
    const [replacement, setReplacement] = useState('')
    const [date, setDate] = useState('')
    const [start, setStart] = useState('00:00')
    const [startMeridien, setStartMeridien] = useState(options[0])
    const [end, setEnd] = useState('00:00')
    const [endMeridien, setEndMeridien] = useState(options[0])

    const submitHandler = (e) => {
        dispatch(requestShiftReplace(
            userInfo._id,
            name, 
            replacement, 
            date, 
            start + ' ' + startMeridien, 
            end + ' ' + endMeridien
            ))
    }

    useEffect(() => {
        if (shiftReplace) {
            Swal.fire({
                icon: 'success',
                title: 'Shift Replacement Request Sent!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }, [shiftReplace])
    return{
        name,
        setName,
        replacement,
        setReplacement,
        date,
        setDate,
        start,
        setStart,
        end,
        setEnd,
        submitHandler,
        options,
        defaultOption,
        startMeridien,
        setStartMeridien,
        endMeridien,
        setEndMeridien

    }
}