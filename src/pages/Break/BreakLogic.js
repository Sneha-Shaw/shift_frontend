import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    addBreaks,
    getAllBreaks,
    updateBreaksStatus,
    deleteBreaks
} from '../../redux/actions/managerAction';

export const BreakLogic = () => {

    const { breaks } = useSelector(state => state.getAllBreaks)
    const { breaks: breaksDeleteState } = useSelector(state => state.deleteBreaks)
    const { breaks: breaksUpdateState } = useSelector(state => state.updateBreaksStatus)
    const { breaks: breaksAddState } = useSelector(state => state.addBreaks)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBreaks())
    }, [dispatch])

    const [breakName, setBreakName] = useState('')
    const [breakDuration, setBreakDuration] = useState('00:00')
    const [duration, setDuration] = useState('')
    const [startTime, setStartTime] = useState('00:00')
    const [endTime, setEndTime] = useState('00:00')
    const [breakType, setBreakType] = useState('Manual')
    const [startMeridian, setStartmeridian] = useState('AM');
    const [endMeridian, setEndmeridian] = useState('AM');
    const [show, setShow] = useState(false)

    const MeridianOptions = [
        'AM', 'PM'
    ];
    const defaultMeridianOption = MeridianOptions[0];

    const options = [
        'Manual', 'Automatic'
    ];
    const defaultOption = options[0];

    const addUnits = (value) => {
        // check breakduration if only hour is entered then add hr then store in duration ex: 1hr
        if (value[0] === '0' && value[1] === '0') {
            if (value[3] === '0' && value[4] === '0') {
                setDuration('00:00')
            } else {
                setDuration(value[3] + value[4] + ' min')
            }
        } else if (value[0] === '0' && value[1] !== '0') {
            if (value[3] === '0' && value[4] === '0') {
                setDuration(value[1] + ' hr')
            } else {
                setDuration(value[1] + ' hr ' + value[3] + value[4] + ' min')
            }
        } else if (value[0] !== '0' && value[1] === '0') {
            if (value[3] === '0' && value[4] === '0') {
                setDuration(value[0] + '0 hr')
            } else {
                setDuration(value[0] + value[1] + ' hr ' + value[3] + value[4] + ' hr')
            }
        } else {
            if (value[3] === '0' && value[4] === '0') {
                setDuration(value[0] + value[1] + ' hr')
            } else {
                setDuration(value[0] + value[1] + ' hr ' + value[3] + value[4] + ' min')
            }
        }
    }

    // add break
    const addBreak = () => {
        setShow(!show)
        dispatch(addBreaks(
            breakName,
            startTime + ' ' + startMeridian,
            endTime + ' ' + endMeridian,
            duration,
            breakType,
            false
        ))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Break Added Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    // update break status
    const updateBreakStatus = (id, status) => {
        dispatch(updateBreaksStatus(id, status))
    }

    // delete break
    const deleteBreak = (id) => {
        dispatch(deleteBreaks(id))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Break Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    useEffect(() => {
        if (breaksAddState) {
            dispatch(getAllBreaks())
        }
    }, [breaksAddState, dispatch])

    useEffect(() => {
        if (breaksUpdateState) {
            dispatch(getAllBreaks())
        }
    }, [breaksUpdateState, dispatch])

    useEffect(() => {
        if (breaksDeleteState) {
            dispatch(getAllBreaks())
        }
    }, [breaksDeleteState, dispatch])




    return {
        breaks,
        show,
        setShow,
        defaultOption,
        options,
        addBreak,
        breakName,
        setBreakName,
        breakDuration,
        setBreakDuration,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        breakType,
        setBreakType,
        startMeridian,
        setStartmeridian,
        endMeridian,
        setEndmeridian,
        MeridianOptions,
        defaultMeridianOption,
        addUnits,
        updateBreakStatus,
        deleteBreak
    }
}