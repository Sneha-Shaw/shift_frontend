import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    addDomain,
    getAllDomains,
    deleteDomain,
    updateDomain
} from '../../redux/actions/managerAction'
import Swal from 'sweetalert2';

export const AddDomainLogic = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [domain, setDomain] = useState('');
    const [id, setid] = useState('')
    const [addShow, setaddShow] = useState(false)
    const [updateShow, setupdateShow] = useState(false)

    const { domain: domainData } = useSelector(state => state.addDomain);
    const { domains: alldomains } = useSelector(state => state.getAllDomains)
    const { domain: domainDeleteState } = useSelector(state => state.deleteDomain)
    const { domain: domainUpdateState } = useSelector(state => state.updateDomain)

    useEffect(() => {
        if (domainData) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Domain Added Successfully!',
            })
            dispatch(getAllDomains());
        }
    }, [domainData]);

    useEffect(() => {
        if (domainUpdateState) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Domain Updated Successfully!',
            })
            dispatch(getAllDomains());
        }
    }, [domainUpdateState]);

    useEffect(() => {
        dispatch(getAllDomains());
    }, []);

    useEffect(() => {
        if (domainDeleteState) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Domain Deleted Successfully!',
            })
            dispatch(getAllDomains());
        }
    }, [domainDeleteState]);

    const handleAddDomain = () => {
        setaddShow(!addShow)
        if (domain === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })
        }

        dispatch(addDomain(domain));
    }


    // update domain
    const handleUpdateDomain = () => {
        setupdateShow(!updateShow)
        if (domain === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })
        }

        dispatch(updateDomain(id, domain));
    }

    // delete domain
    const handleDeleteDomain = (id) => {
        dispatch(deleteDomain(id));
    }



    return {
        domain,
        setDomain,
        handleAddDomain,
        handleUpdateDomain,
        handleDeleteDomain,
        addShow,
        setaddShow,
        alldomains,
        updateShow,
        setupdateShow,
        setid
    }
}