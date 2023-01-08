import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    getAllSlots,
    updateSlot
} from '../../redux/actions/shiftAction'

export const UpdateSlotLogic = () => {
    const { slots } = useSelector((state) => state.getAllSlots)
    const { slot: updateSlotState } = useSelector((state) => state.updateSlot)
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
   

    const slotOptions =
        slots && slots?.getAllSlots?.map((slot) => {
            return slot.slotTime
        })
    const defaultSlotOption = slotOptions && slotOptions[0]

    const [slot, setSlot] = useState('')
    const [date, setDate] = useState('')
    const [doctorsNeeded, setDoctorsNeeded] = useState(0)
    const [seniorNeeded, setSeniorNeeded] = useState(0)
    const [searchslot,setSearchslot] = useState('')

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
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Slot Updated Successfully',
            })
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
        defaultSlotOption,
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
