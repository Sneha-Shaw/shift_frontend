import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    getAllSlots,
    updateSlot
} from '../../redux/actions/slotAction'

export const UpdateSlotLogic = () => {
    const { slots } = useSelector((state) => state.getAllSlots)
    const { slot: updateSlotState } = useSelector((state) => state.updateSlot)
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()


    const slotOptions =
        slots && slots?.getAllSlots?.map((slot) => {
            return slot.slotTime
        })

    const [slot, setSlot] = useState('')
    const [date, setDate] = useState('')
    const [doctorsNeeded, setDoctorsNeeded] = useState(0)
    const [seniorNeeded, setSeniorNeeded] = useState(0)
    const [searchslot, setSearchslot] = useState('')

    const submitHandler = (e) => {
        setShow(!show)
        setDoctorsNeeded(parseInt(doctorsNeeded))
        setSeniorNeeded(parseInt(seniorNeeded))

        if (doctorsNeeded > seniorNeeded) {
            const allotment = [
                {
                    date,
                    DoctorsNeeded: doctorsNeeded,
                    SeniorNeeded: seniorNeeded
                }
            ]
            dispatch(updateSlot(allotment, slot))

        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Doctors Needed should be greater than Senior Needed',
            })
        }

    }

    useEffect(() => {
        if (updateSlotState) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Slot Updated Successfully',
                showConfirmButton: false,
                timer: 1000
            })
            dispatch(getAllSlots())
        }
    }, [updateSlotState, dispatch])

    useEffect(() => {
        dispatch(getAllSlots())
    }, [dispatch])


    return {
        show,
        setShow,
        slots,
        slotOptions,
        slot,
        setSlot,
        date,
        setDate,
        setDoctorsNeeded,
        setSeniorNeeded,
        doctorsNeeded,
        seniorNeeded,
        submitHandler,
        searchslot,
        setSearchslot
    }
}
