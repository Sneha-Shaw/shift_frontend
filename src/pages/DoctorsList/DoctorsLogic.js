import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import {
    addDoctor,
    deleteDoctor,
    updateDoctor,
    getAllDoctors,
    getDoctorById
} from '../../redux/actions/managerAction';

export const DoctorsLogic = () => {
    const { doctorInfo } = useSelector(state => state.addDoctor)
    const {doctorsInfo: doctors } = useSelector(state => state.getAllDoctors)
    
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])
    console.log(doctors?.getAllDoctors);
    // random password generator
    const randomPassword = () => {
        const length = 8;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }


    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('senior')
    const [email, setEmail] = useState('')
    const [phn, setPhn] = useState('')
    const [dutyHoursPerMonth, setDutyHoursPerMonth] = useState(192)
    const [dutyHoursPerDay, setDutyHoursPerDay] = useState(8)

    const designationOptions = [
        'Senior', 'Regular'
    ]
    const defaultdesignationOptions = designationOptions[0];
    const Type = [
        'Permanent', 'Contractual'
    ]

    const defaultType = Type[0];
    const [show, setShow] = useState(false)
    const [employType, setEmploytype] = useState('Permanent')
    // addDoctor
    const addDoctorHandler = () => {
        setShow(!show)
        dispatch(addDoctor(
            name,
            email,
            phn,
            randomPassword(),
            designation,
            employType.toLowerCase(),
            dutyHoursPerMonth,
            dutyHoursPerDay,
            checked
        ))
    }

    return {
        doctorInfo,
        doctors,
        name,
        setName,
        designation,
        setDesignation,
        email,
        setEmail,
        phn,
        setPhn,
        dutyHoursPerMonth,
        setDutyHoursPerMonth,
        addDoctorHandler,
        designationOptions,
        defaultdesignationOptions,
        Type,
        defaultType,
        show,
        setShow,
        employType,
        setEmploytype,
        dutyHoursPerDay,
        setDutyHoursPerDay,
        handleChange,
        checked

    }
}