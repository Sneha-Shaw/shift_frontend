import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import {
    getAllLeaves,
    approveDenyLeave,
    getAllSpecialRequests,
    approveDenySpecialRequest
} from '../../redux/actions/managerAction';

export const ApprovalLogic = () => {
    const { leaves } = useSelector(state => state.getAllLeaves);
    const { specialRequests } = useSelector(state => state.getAllSpecialRequests);
    const { leaves: approveLeave } = useSelector(state => state.approveDenyLeave);
    const { specialRequests: approveSpecialRequest } = useSelector(state => state.approveDenySpecialRequest);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLeaves());
        dispatch(getAllSpecialRequests());
    }, [dispatch]);

    const approveLeaveHandler = (id) => {
        dispatch(approveDenyLeave(id, "approved"));
    }
    // deny leave
    const denyLeaveHandler = (id) => {
        dispatch(approveDenyLeave(id, "declined"));
    }
    // approve special request
    const approveSpecialRequestHandler = (id) => {
        dispatch(approveDenySpecialRequest(id, "approved"
        ));
    }
    // deny special request
    const denySpecialRequestHandler = (id) => {
        dispatch(approveDenySpecialRequest(id,"declined"));
    }

    useEffect(() => {
        if (approveLeave) {
            dispatch(getAllLeaves());
        }
    }, [approveLeave, dispatch]);

    useEffect(() => {
        if (approveSpecialRequest) {
            dispatch(getAllSpecialRequests());
        }
    }, [approveSpecialRequest, dispatch]);


    return {
        leaves,
        specialRequests,
        approveLeaveHandler,
        denyLeaveHandler,
        approveSpecialRequestHandler,
        denySpecialRequestHandler
    }
}

