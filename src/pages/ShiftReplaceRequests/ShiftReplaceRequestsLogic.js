import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import {
    getAllShiftReplaceRequests
} from '../../redux/actions/shiftAction';

export const ShiftReplaceRequestsLogic = () => {
    const { requests } = useSelector((state) => state.getAllShiftReplaceRequests)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllShiftReplaceRequests())
    }, [dispatch])

   console.log(requests);
 return{
    requests
 }   
}