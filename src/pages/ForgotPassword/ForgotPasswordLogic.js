import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    forgotPassword
} from '../../redux/actions/passwordAction'

export const ForgotPasswordLogic = () => {
    const { data: sentState, error } = useSelector((state) => state.forgotPassword)
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (sentState) {
            Swal.fire({
                icon: 'success',
                title: 'Email Sent Successfully',
                // check your email
                text: "Please check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.",
                showConfirmButton: true
                // timer: 2000
            })
        }
    }, [sentState])
    console.log(sentState);
    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
            })
        }
    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(forgotPassword(email))
    }

    return {
        email,
        setEmail,
        handleSubmit
    }
}