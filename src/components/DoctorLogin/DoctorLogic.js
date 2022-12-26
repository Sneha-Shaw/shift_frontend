import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import { signInUser } from '../../redux/actions/userAction';

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

        console.log('loginHandler');
    }

    return { email, setEmail, password, setPassword, loginHandler, error }
}