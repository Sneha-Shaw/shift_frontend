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
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    // array of months
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    const [month, setMonth] = useState(months[currentMonth])
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
            shiftStartTime: "01 AM",
            shiftEndTime: "02 AM",
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
            shiftStartTime: "02 AM",
            shiftEndTime: "03 AM",
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
            shiftStartTime: "03 AM",
            shiftEndTime: "04 AM",
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
            shiftStartTime: "04 AM",
            shiftEndTime: "05 AM",
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
            shiftStartTime: "05 AM",
            shiftEndTime: "06 AM",
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
            shiftStartTime: "06 AM",
            shiftEndTime: "07 AM",
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
            shiftStartTime: "07 AM",
            shiftEndTime: "08 AM",
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
            shiftStartTime: "08 AM",
            shiftEndTime: "09 AM",
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
            shiftStartTime: "09 AM",
            shiftEndTime: "10 AM",
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
            shiftStartTime: "10 AM",
            shiftEndTime: "11 AM",
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
            shiftStartTime: "11 AM",
            shiftEndTime: "12 PM",
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
            shiftStartTime: "12 PM",
            shiftEndTime: "01 PM",
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
            shiftStartTime: "01 PM",
            shiftEndTime: "02 PM",
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
            shiftStartTime: "02 PM",
            shiftEndTime: "03 PM",
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
            shiftStartTime: "03 PM",
            shiftEndTime: "04 PM",
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
            shiftStartTime: "04 PM",
            shiftEndTime: "05 PM",
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
            shiftStartTime: "05 PM",
            shiftEndTime: "06 PM",
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
            shiftStartTime: "06 PM",
            shiftEndTime: "07 PM",
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
            shiftStartTime: "07 PM",
            shiftEndTime: "08 PM",
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
            shiftStartTime: "08 PM",
            shiftEndTime: "09 PM",
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
            shiftStartTime: "09 PM",
            shiftEndTime: "10 PM",
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
            shiftStartTime: "10 PM",
            shiftEndTime: "11 PM",
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
            shiftStartTime: "11 PM",
            shiftEndTime: "12 AM",
            shiftDuration: 1,
            shiftStartDate: "8/12/2022",
            shiftEndDate: "8/12/2022",
            shiftDay: "Thursday",
            doctors: [
                "Dr. John Doe",
                "Dr. Jane Doe"
            ]

        },
        // {
        //     shiftName: "Untitled",
        //     shiftStartTime: "12 AM",
        //     shiftEndTime: "01 AM",
        //     shiftDuration: 1,
        //     shiftStartDate: "2/12/2022",
        //     shiftEndDate: "2/12/2022",
        //     shiftDay: "Friday",
        //     doctors: [
        //         "Dr. John Doe",
        //         "Dr. Jane Doe"
        //     ]

        // }
    ]
    useEffect(() => {
        if (currentMonth)
            dispatch(getCalender(currentMonth))
    }, [dispatch])

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