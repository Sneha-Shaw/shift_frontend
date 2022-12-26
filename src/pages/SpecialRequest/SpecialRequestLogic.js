import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    requestSpecial,
    getSpecialRequests
} from '../../redux/actions/userAction';

export const SpecialRequestLogic = ()=>{
    const {userInfo} = useSelector((state) => state.signInUser)
    const {special} = useSelector((state) => state.requestSpecial)
    const {specialRequests} = useSelector((state) => state.getSpecialRequests)
    const [show, setShow] = useState(false)
    const [request, setRequest] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (special) {
            Swal.fire({
                title: 'Success',
                text: 'Request sent',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
    }, [special])

    useEffect(() => {
        dispatch(getSpecialRequests(userInfo._id))
    }, [dispatch, userInfo._id])

    const submitHandler = (e) => {
        setShow(!show)
        dispatch(requestSpecial( userInfo._id,request))
    }
    console.log(specialRequests);

    return {
        request,
        setRequest,
        submitHandler,
        specialRequests,
        show,
        setShow
    }


}