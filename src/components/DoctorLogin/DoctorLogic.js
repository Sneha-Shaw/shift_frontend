import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../redux/actions/userAction';
import Swal from 'sweetalert2';

export const DoctorLogic = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { userInfo, error } = useSelector(state => state.signInUser)
    
    useEffect(() => {
        if (userInfo) {
            navigate('/')
            console.log('useEffect');
        }
    }, [userInfo, navigate])

    const loginHandler = () => {
        // e.preventDefault()
        dispatch(signInUser(email, password))
        console.log('loginHandler');
    }

    useEffect(()=>{
        if(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        }
    },[error])

    return { email, setEmail, password, setPassword, loginHandler,navigate }
}