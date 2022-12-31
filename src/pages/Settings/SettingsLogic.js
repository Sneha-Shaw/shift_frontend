import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    getSingleUser,
    updateUser
} from '../../redux/actions/userAction'
import {
    getManagerInfo,
    updateManager
} from '../../redux/actions/managerAction'

export const SettingsLogic = () => {
    const { userInfo, error } = useSelector((state) => state.signInUser)
    const { user } = useSelector((state) => state.getSingleUser)
    const { updateData } = useSelector((state) => state.updateUser)
    const { manager } = useSelector((state) => state.getManagerInfo)
    const { manager: managerState } = useSelector((state) => state.updateManager)
    const { managerInfo, error: managerError } = useSelector((state) => state.signInManager)

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [about, setAbout] = useState('')
    const [nightDuty, setNightDuty] = useState(false)
    const [designation, setDesignation] = useState('')

    const designationOptions = [
        'Senior', 'Regular'
    ]
    const defaultdesignationOptions = designation;

    useEffect(() => {
        if (userInfo) {
            dispatch(getSingleUser(userInfo._id))
        }
    }, [userInfo, dispatch])

    useEffect(() => {
        if (managerInfo) {
            dispatch(getManagerInfo(managerInfo._id))
        }
    }, [managerInfo, dispatch])

    useEffect(() => {
        if (updateData) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Profile Updated Successfully',
            })
        }
    }, [updateData])

    useEffect(() => {
        if (managerState) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Profile Updated Successfully',
            })
        }
    }, [managerState])

    useEffect(() => {
        if (user) {
            setEmail(user?.email)
            setName(user?.name)
            setPhone(user?.mobile)
            setAddress(user?.address)
            setCity(user?.city)
            setState(user?.state)
            setZip(user?.pincode)
            setAbout(user?.about)
            setDesignation(user?.designation)
            setNightDuty(user?.nightDuty)
        }

    }, [user, userInfo])

    useEffect(() => {
        if (manager) {
            setEmail(manager?.admin?.email)
            setName(manager?.admin?.name)
            setPhone(manager?.admin?.mobile)
            setAddress(manager?.admin?.address)
            setCity(manager?.admin?.city)
            setState(manager?.admin?.state)
            setZip(manager?.admin?.pincode)
        }
    }, [manager, managerInfo])

  
    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        }
        if (managerError) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: managerError,
            })
        }
    }, [error, managerError])


    const updateHandler = () => {
        if (userInfo) {
            dispatch(updateUser(
                userInfo._id,
                name,
                email,
                phone,
                address,
                city,
                state,
                zip,
                about,
                designation,
                nightDuty
            ))
        }
        if (managerInfo) {
            dispatch(updateManager(
                managerInfo._id,
                name,
                email,
                phone,
                address,
                city,
                state,
                zip,
                about,
                designation,
                nightDuty
            ))
        }
    }

    return {
        email,
        setEmail,
        name,
        setName,
        phone,
        setPhone,
        address,
        setAddress,
        city,
        setCity,
        state,
        setState,
        zip,
        setZip,
        about,
        setAbout,
        managerInfo,
        nightDuty,
        setNightDuty,
        updateHandler,
        designation,
        setDesignation,
        designationOptions,
        defaultdesignationOptions
    }
}