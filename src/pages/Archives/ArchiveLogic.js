import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    // getAllShifts,
    getCalender,
    getShiftsByDomain
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
    const { shifts } = useSelector((state) => state.getShiftsByDomain)
    const { domains: alldomains } = useSelector(state => state.getAllDomains)
    const { doctorInfo: searchData } = useSelector((state) => state.searchDoctor)

    var count = null
    const dispatch = useDispatch()
    // get current month
    const currentMonth = useState(new Date().getMonth())
    const [domainOp, setDomainOp] = useState("")



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
        user,
        domainOp,
        setDomainOp,
        getShifts,
        alldomains
    }
}