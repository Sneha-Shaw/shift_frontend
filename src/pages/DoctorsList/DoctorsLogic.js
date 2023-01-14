import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {
    addDoctor,
    deleteDoctor,
    updateDoctor,
    getAllDoctors,
    getAllDomains
} from '../../redux/actions/managerAction';


export const DoctorsLogic = () => {
    const { doctorInfo } = useSelector((state) => state.addDoctor)
    const { doctorsInfo: doctors } = useSelector((state) => state.getAllDoctors)
    const { doctorInfo: doctorDeleteState } = useSelector((state) => state.deleteDoctor)
    const { doctorInfo: doctorUpdateState } = useSelector((state) => state.updateDoctor)
    const { doctorInfo: searchData } = useSelector((state) => state.searchDoctor)
    const { domains } = useSelector((state) => state.getAllDomains)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDomains())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])
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
    const [designation, setDesignation] = useState('Senior')
    const [domain, setDomain] = useState([])
    const [email, setEmail] = useState('')
    const [phn, setPhn] = useState('')
    const [dutyHoursPerMonth, setDutyHoursPerMonth] = useState(192)
    const [dutyHoursPerDay, setDutyHoursPerDay] = useState(8)
    const [id, setId] = useState('')
    const [checked, setChecked] = useState(false);
    // domain dropdown
    const [domaindrop, setDomainDrop] = useState(
        [{
            domainName: ''
        }]
    )
    
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    // domains && domains?.getAllDomains
    const domainOptions = domains && domains?.getAllDomains?.map((domain) => domain.domainName)

    const designationOptions = [
        'Senior', 'Regular'
    ]
    const defaultdesignationOptions = designationOptions[0];
    const Type = [
        'Permanent', 'Contractual'
    ]


    const defaultType = Type[0];
    const [addShow, setaddShow] = useState(false)
    const [updateShow, setupdateShow] = useState(false)
    const [employType, setEmploytype] = useState('Permanent')

    // inc no of inputs in domaindrop
    const addDomainDropdown = () => {
        setDomainDrop([...domaindrop, { domainName: '' }])
    }

    // dec no of inputs in domaindrop
    const removeDomainDropdown = (index) => {
        const list = [...domaindrop];
        list.splice(index, 1);
        setDomainDrop(list);
    }


    // addDoctor
    const addDoctorHandler = () => {
        setaddShow(!addShow)


        dispatch(addDoctor(
            name,
            email,
            phn,
            randomPassword(),
            designation,
            domain,
            employType.toLowerCase(),
            dutyHoursPerMonth,
            dutyHoursPerDay,
            checked
        ))
    }

    useEffect(() => {
        if (doctorInfo) {
            Swal.fire({
                icon: 'success',
                title: 'Doctor Added Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch(getAllDoctors())
        }
    }, [doctorInfo, dispatch])


    // delete doctor
    const deleteDoctorHandler = (name, email) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteDoctor(email))
                    Swal.fire(
                        'Deleted!',
                        `${name} has been removed.`,
                        'success'
                    )
                }
            });

    }
    useEffect(() => {
        if (doctorDeleteState) {
            dispatch(getAllDoctors())
        }
    }, [doctorDeleteState, dispatch])

    // update doctor
    const updateDoctorHandler = (id) => {
        setupdateShow(!updateShow)

        dispatch(updateDoctor(
            name,
            email,
            phn,
            designation,
            domain,
            employType.toLowerCase(),
            dutyHoursPerMonth,
            dutyHoursPerDay,
            checked,
            id
        ))
    }
    useEffect(() => {
        if (doctorUpdateState) {
            Swal.fire({
                icon: 'success',
                title: 'Doctor Updated Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            // update name, email and set it to nuill
            setName('')
            setEmail('')
            setPhn('')
            setDesignation('')
            setEmploytype('')
            setDutyHoursPerMonth('')
            setDutyHoursPerDay('')
            setChecked(false)
            setId('')

            dispatch(getAllDoctors())
        }
    }, [doctorUpdateState, dispatch])


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
        addShow,
        setaddShow,
        updateShow,
        setupdateShow,
        employType,
        setEmploytype,
        dutyHoursPerDay,
        setDutyHoursPerDay,
        handleChange,
        checked,
        deleteDoctorHandler,
        updateDoctorHandler,
        setChecked,
        id,
        setId,
        searchData,
        domain,
        setDomain,
        domainOptions,
        domaindrop,
        setDomainDrop,
        addDomainDropdown,
        removeDomainDropdown

    }
}