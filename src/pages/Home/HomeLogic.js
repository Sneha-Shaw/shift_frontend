
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import {
    getAllDoctors,
    getAllLeaves
} from '../../redux/actions/managerAction'
export const HomeLogic = ()=>{
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { userInfo } = useSelector((state) => state.signInUser)
    const { doctorsInfo: doctors } = useSelector(state => state.getAllDoctors)
    const { leaves } = useSelector(state => state.getAllLeaves);

    // get user name
    const user = userInfo ? userInfo.name : managerInfo.name
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllLeaves())
    }, [dispatch])


    return{
        user,
        navigate,
        managerInfo,
        doctors,
        leaves
    }
}