import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    // getAllShifts,
    getCalender,
    getShiftsByDomain,
    generateShiftsManually,
    updateShift,
    createShift,
    deleteShift
} from '../../redux/actions/shiftAction'
import {
    getAllSlots
} from '../../redux/actions/slotAction'
import {
    getAllDoctors,
    getAllDomains,
    searchDoctor
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
    const { shift: updatedShift } = useSelector(state => state.updateShift)
    const { shift: createdShift } = useSelector(state => state.createShift)
    const { shift: deletedShift } = useSelector(state => state.deleteShift)
    const { doctorInfo: searchData } = useSelector((state) => state.searchDoctor)

    var count = null
    const dispatch = useDispatch()
    // get current month
    const currentMonth = useState(new Date().getMonth())
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [domainOp, setDomainOp] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [domain, setDomain] = useState("")
    const [temp, setTemp] = useState({})
    const [editdoctors, setDoctors] = useState([])
    const [createDomain, setcreateDomain] = useState("")
    const [createDate, setcreateDate] = useState("")
    const [createSlot, setcreateSlot] = useState("")
    const [createId, setcreateId] = useState("")
    const [shiftDay, setShiftDay] = useState("")

    const [name, setName] = useState('')


    // handle open modal
    const handleOpen = (date, slot, doctors, id) => {
        setShow3(!show3)
        // get mm from DD-MM-YYYY format and then parse int then check if its less than 10 than add 0
        const mm = parseInt(date.split("-")[1]) < 10 ? "0" + parseInt(date.split("-")[1]) : parseInt(date.split("-")[1])
        const dd = parseInt(date.split("-")[0]) < 10 ? "0" + parseInt(date.split("-")[0]) : parseInt(date.split("-")[0])
        const yyyy = date.split("-")[2]
        const date2 = yyyy + "-" + mm + "-" + dd


        setTemp({
            domain: domainOp,
            date: date2,
            slot: slot,
            doctors: doctors,
            id: id
        })

    }

    // update
    const handleUpdate = () => {
        dispatch(updateShift(temp.id, temp.doctors))
        setShow3(false)
    }

    // create
    const handleCreate = () => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]
        const shiftDate = new Date(createDate)
        setShiftDay(days[shiftDate.getDay()])
      
        // check if dd contains 0 ex: if(dd in 2023-01-27 includes 0 then remove 0 and result should be 2023-1-27
        const dd = parseInt(createDate.split("-")[2]) < 10 ? parseInt(createDate.split("-")[2]).toString().replace("0", "") : parseInt(createDate.split("-")[2])
        const mm = parseInt(createDate.split("-")[1]) < 10 ? parseInt(createDate.split("-")[1]).toString().replace("0", "") : parseInt(createDate.split("-")[1])
        const yyyy = createDate.split("-")[0]
        const date2 = yyyy + "-" + mm + "-" + dd
       
        var domain = createDomain.toLowerCase()
        //  doctors, shiftDate, shiftDay, shiftTime, shiftDomain, slotId 
        dispatch(createShift(editdoctors, date2, days[new Date(createDate).getDay()], createSlot, domain, createId))
        setShow(false)
    }

    // handle add doctors in edit doctors
    const handleAddDoctors = (id) => {

        setDoctors([...editdoctors, id])
        // edit in temp.doctors
        temp.doctors.push(id)
    }

    // handleRemoveDoctors
    const handleRemoveDoctors = (id) => {

        setDoctors(editdoctors.filter((doctor) => doctor !== id))
        // edit in temp.doctors
        temp.doctors = temp.doctors.filter((doctor) => doctor !== id)
    }

    // generate shifts manually
    const generateShiftManually = () => {
        dispatch(generateShiftsManually(domain, startDate, endDate))
    }

    // handle delete shift
    const handleDelete = (id) => {
        dispatch(deleteShift(id))
    }

    // searchDoctor
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchDoctor(name))
    }

    // generate shift automatically
    const generateShiftAutomatically = () => {
        // get start Date of current month in format YYYY-MM-DD
        const startDate = new Date().toISOString().slice(0, 7) + '-01'
        // get end Date of current month in format YYYY-MM-DD
        const endDate = new Date().toISOString().slice(0, 7) + '-31'
         // for each domain dispatch generateShiftsManually(domain, startDate, endDate)
         alldomains && alldomains.getAllDomains.forEach(domain => {
            dispatch(generateShiftsManually(domain.domainName, startDate, endDate))
         });
    }

    useEffect(() => {
        if (deletedShift) {
            var domain = domainOp.toLowerCase()
            dispatch(getShiftsByDomain(domain))
            Swal.fire({
                icon: 'success',
                title: 'Shift Deleted Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }, [deletedShift,dispatch,domainOp])

    useEffect(() => {
        if (updatedShift) {
            var domain = domainOp.toLowerCase()
            dispatch(getShiftsByDomain(domain))
            Swal.fire({
                icon: 'success',
                title: 'Shift Updated Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }, [updatedShift,dispatch,domainOp])

    useEffect(() => {
        if (createdShift) {
            setDomainOp(createDomain)
            var domain = createDomain.toLowerCase()
            dispatch(getShiftsByDomain(domain))
            Swal.fire({
                icon: 'success',
                title: 'Shift Created Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }, [createdShift,dispatch,createDomain])


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
    }, [generateShiftsState,dispatch,domain])

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
        // get current year
        const year = new Date().getFullYear()
        dispatch(getCalender(currentMonth[0],year))
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
        alldomains,
        handleOpen,
        temp,
        handleAddDoctors,
        handleRemoveDoctors,
        setDoctors,
        editdoctors,
        handleUpdate,
        handleCreate,
        setcreateDomain,
        createDomain,
        setcreateDate,
        createDate,
        setcreateSlot,
        createSlot,
        setcreateId,
        createId,
        setShiftDay,
        shiftDay,
        handleDelete,
        handleSearch,
        setName,
        name,
        searchData,
        generateShiftAutomatically
    }
}