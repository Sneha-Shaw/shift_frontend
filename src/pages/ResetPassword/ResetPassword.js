import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import {
    resetPassword
} from '../../redux/actions/passwordAction'
import {
    logoutUser
} from '../../redux/actions/userAction'
import {
    logoutManager
} from '../../redux/actions/managerAction'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const classes = useStyles()
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)

    const { userInfo } = useSelector((state) => state.signInUser)
    const { managerInfo } = useSelector((state) => state.signInManager)

    const { error, data: successReset } = useSelector((state) => state.resetPassword)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()


    useEffect(() => {
        if (successReset) {
            Swal.fire({
                icon: 'success',
                title: 'Password Reset Successfully',
                showConfirmButton: false,
                timer: 1000
            })
            if (userInfo) {
                dispatch(logoutUser())
            }
            if (managerInfo) {
                dispatch(logoutManager())
            }
            navigate('/login')
        }
    }, [successReset, dispatch])

    // show error
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
        dispatch(resetPassword(id, password))
    }

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h1>Reset Password</h1>
                    <div className={classes.formBody}>
                        <div className={classes.input}>
                            <label htmlFor="password">Password:</label>
                            <div className={classes.inputBox}>
                                <input type={showPass ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className={classes.showPass} onClick={handleShowPass}>
                                    {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.btn} onClick={handleSubmit}>Reset Password</Button>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword