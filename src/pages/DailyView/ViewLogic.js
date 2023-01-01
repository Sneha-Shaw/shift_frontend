import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    getCalender,
    getAllSlots
} from '../../redux/actions/shiftAction'
import {
    getAllDoctors
} from '../../redux/actions/managerAction'

export const ViewLogic = () => {
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { calender } = useSelector((state) => state.getCalender)
    const { slots } = useSelector((state) => state.getAllSlots)
    const { doctorsInfo: doctors } = useSelector(state => state.getAllDoctors)


    var count = null
    const dispatch = useDispatch()
    // get current month
    const currentMonth = useState(new Date().getMonth())

    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])

    // call   dispatch(getCalender(currentMonth[0])) once
    useEffect(() => {
        dispatch(getCalender(currentMonth[0]))
        count = 1
    }, [count])

    const shifts = [
        {

            shiftName: "Untitled",
            shiftStartTime: "12 AM",
            shiftEndTime: "01 AM",
            shiftDuration: 1,
            shiftStartDate: "8/12/2022",
            shiftEndDate: "8/12/2022",
            shiftDay: "Thursday",
            doctors: [
                "Dr. John Doe",
                "Dr. Jane Doe"
            ]
        },
        {
            shiftName: "Untitled",
            shiftStartTime: "12 AM",
            shiftEndTime: "01 AM",
            shiftDuration: 1,
            shiftStartDate: "2/12/2022",
            shiftEndDate: "2/12/2022",
            shiftDay: "Friday",
            doctors: [
                "Dr. John Doe",
                "Dr. Jane Doe"
            ]

        }
    ]


    useEffect(() => {
        dispatch(getAllSlots())
    }, [dispatch])


    return {
        managerInfo,
        calender,
        slots,
        shifts,
        doctors
    }
}