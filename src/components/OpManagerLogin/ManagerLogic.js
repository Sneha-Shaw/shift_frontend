import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { signInManager } from '../../redux/actions/managerAction';

export const ManagerLogic = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { managerInfo, error }  = useSelector(state => state.signInManager)

    useEffect(() => {
        if (managerInfo) {
            navigate('/')
        }
    }, [managerInfo, navigate])

    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(signInManager(email, password))
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