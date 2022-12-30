import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    getCalender,
    getAllSlots
} from '../../redux/actions/shiftAction'

export const ViewLogic = () => {
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { calender } = useSelector((state) => state.getCalender)
    const { slots } = useSelector((state) => state.getAllSlots)

    const dispatch = useDispatch()
    // get current month
    const [currentMonth] = useState(new Date().getMonth())
    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    // array of months
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    const [month] = useState(months[currentMonth])
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
        if (currentMonth)
            dispatch(getCalender(currentMonth))
    }, [dispatch,currentMonth])

    useEffect(() => {
        dispatch(getAllSlots())
    }, [dispatch])


    return {
        managerInfo,
        calender,
        month,
        slots,
        shifts
    }
}