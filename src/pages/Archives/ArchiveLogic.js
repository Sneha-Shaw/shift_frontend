import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    // getAllShifts,
    getCalender,
    getShiftsByMonth
} from '../../redux/actions/shiftAction'
import {
    getAllSlots
} from '../../redux/actions/slotAction'
import {
    getAllDoctors,
    getAllDomains
} from '../../redux/actions/managerAction'
import {
    getSingleUser
} from '../../redux/actions/userAction'


export const ArchiveLogic = () => {
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { userInfo } = useSelector((state) => state.signInUser)
    const { user } = useSelector((state) => state.getSingleUser)
    const { calender } = useSelector((state) => state.getCalender)
    const { slots } = useSelector((state) => state.getAllSlots)
    const { doctorsInfo: doctors } = useSelector((state) => state.getAllDoctors)
    const { shifts } = useSelector((state) => state.getShiftsByMonth)
    const { domains: alldomains } = useSelector(state => state.getAllDomains)

    var count = null
    const dispatch = useDispatch()
    const [domainOp, setDomainOp] = useState("")

    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)
    // month array
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    //   get list of years
    const years = []
    for (let i = 2000; i <= 2050; i++) {
        years.push(i)
    }

    // get all domains
    useEffect(() => {
        dispatch(getAllDomains())
    }, [dispatch])

    // call   dispatch(getAllDoctors()) once
    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllSlots())
    }, [dispatch])

    const getShifts = (domain) => {
        // uncapitalize domain
        domain = domain.toLowerCase()
        dispatch(getShiftsByMonth(month + 1, year, domainOp))
    }

    // get calender
    const getCalendar = (month) => {
        // by month and year
        dispatch(getCalender(month))
    }

    useEffect(() => {
        if (userInfo)
            dispatch(getSingleUser(userInfo._id))
    }, [dispatch, userInfo])

    // if user.domain is ecg set domain ecg
    useEffect(() => {
        if (user && user.ecg === true) {
            setDomainOp("ecg")
        }
    }, [user])

    // if user.domain is echo set domain echo
    useEffect(() => {
        if (user && user.echo === true) {
            setDomainOp("echo")
        }
    }, [user])
    return {
        managerInfo,
        calender,
        slots,
        shifts,
        doctors,
        user,
        domainOp,
        setDomainOp,
        getShifts,
        alldomains,
        month,
        setMonth,
        months,
        year,
        setYear,
        years,
        getCalendar
    }
}