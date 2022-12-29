import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    requestShiftReplace
} from '../../redux/actions/shiftAction';
import {
    getAllUsers
} from '../../redux/actions/userAction'

export const ShiftReplaceLogic = () => {
    const { userInfo } = useSelector((state) => state.signInUser)
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { users } = useSelector((state) => state.getAllUsers)
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

    const nameOptions = users && users.map((user) => {
        return user.name
    })

    const defaultNameOption = nameOptions && nameOptions[0]

    const replacementOptions =
        managerInfo ?
            users && users.map((user) => {
                return user.name
            })
            :
            users && users.filter((user) => {
                return user.name !== userInfo?.name
            }).map((user) => {
                return user.name
            })
    const defaultReplacementOption = replacementOptions && replacementOptions[0]

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        if (replacement === '' || date === '' || start === '' || end === '') {
            Swal.fire({
                icon: 'error',
                title: 'Please fill all the fields',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            userInfo ?
                dispatch(requestShiftReplace(userInfo.name, replacement, date, start + ' ' + startMeridien, end + ' ' + endMeridien))
                :
                dispatch(requestShiftReplace(name, replacement, date, start + ' ' + startMeridien, end + ' ' + endMeridien))
        }
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
    return {
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
        setEndMeridien,
        nameOptions,
        defaultNameOption,
        replacementOptions,
        defaultReplacementOption,
        userInfo

    }
}