import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    // getAllShifts,
    getCalender,
    getAllSlots,
    getShiftsByDomain,
    generateShiftsManually
} from '../../redux/actions/shiftAction'
import {
    getAllDoctors,
    getAllDomains
} from '../../redux/actions/managerAction'
import {
    getSingleUser
} from '../../redux/actions/userAction'

import Swal from 'sweetalert2';

export const ViewLogic = () => {
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { userInfo } = useSelector((state) => state.signInUser)
    const { user } = useSelector((state) => state.getSingleUser)
    const { calender } = useSelector((state) => state.getCalender)
    const { slots } = useSelector((state) => state.getAllSlots)
    const { doctorsInfo: doctors } = useSelector((state) => state.getAllDoctors)
    const { shifts } = useSelector((state) => state.getShiftsByDomain)
    const { shifts: generateShiftsState } = useSelector((state) => state.generateShiftsManually)
    const { domains: alldomains } = useSelector(state => state.getAllDomains)

    var count = null
    const dispatch = useDispatch()
    // get current month
    const currentMonth = useState(new Date().getMonth())
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [domainOp, setDomainOp] = useState("")
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [domain, setDomain] = useState()


    // generate shifts manually
    const generateShiftManually = () => {
        dispatch(generateShiftsManually(domain, startDate, endDate))
    }


    useEffect(() => {
        if (generateShiftsState) {
            setShow2(false)
            setDomainOp(domain)
            dispatch(getShiftsByDomain(domain))
            Swal.fire({
                icon: 'success',
                title: 'Shifts Generated Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }, [generateShiftsState])

    // get all domains
    useEffect(() => {
        dispatch(getAllDomains())
    }, [dispatch])

    // call   dispatch(getAllDoctors()) once
    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])

    // call   dispatch(getCalender(currentMonth[0])) once
    useEffect(() => {
        dispatch(getCalender(currentMonth[0]))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        count = 1
    }, [count])


    useEffect(() => {
        dispatch(getAllSlots())
    }, [dispatch])

    const getShifts = (domain) => {
        // uncapitalize domain
        domain = domain.toLowerCase()
        dispatch(getShiftsByDomain(domain))
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
        currentMonth,
        show,
        setShow,
        show2,
        setShow2,
        show3,
        setShow3,
        user,
        domainOp,
        setDomainOp,
        getShifts,
        generateShiftManually,
        setStartDate,
        startDate,
        endDate,
        setEndDate,
        domain,
        setDomain,
        alldomains
    }
}