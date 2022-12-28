import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'
import { SpecialRequestLogic } from './SpecialRequestLogic'

const SpecialRequest = () => {
    const classes = useStyles()
    const {
        request,
        setRequest,
        submitHandler,
        specialRequests,
        show,
        setShow
    } = SpecialRequestLogic()
    return (
        <div className={classes.root}
        sx={{
            height:specialRequests?.length >9 ? '90vh' : '100%'
        }}
        >
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                {
                    (show) && (
                        <div className={classes.back}>
                            <Button
                                // variant="contained"
                                //    if addshow is true then setaddshow false else if updateshow is true then setupdateshow false
                                onClick={() => setShow(!show)}
                            >
                                Back
                            </Button>
                        </div>
                    )
                }
                {
                    show ?
                        <div className={classes.form}>
                            <h1>Add Special Request</h1>

                            <div>
                                <label
                                    htmlFor="request"
                                    style={{
                                        display: 'block',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    Request:
                                </label>
                                <textarea
                                    name="request"
                                    id="request"
                                    cols="30"
                                    rows="10"
                                    value={request}
                                    onChange={(e) => setRequest(e.target.value)}
                                />
                            </div>
                            <Button
                                variant="contained"
                                onClick={submitHandler}
                            >
                                Submit
                            </Button>
                        </div>
                        :
                        <>
                            <div className={classes.main__header}>
                                <h1>Special Requests</h1>
                                <div className={classes.main__header__buttons}>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        className={classes.main__header__buttons__add}
                                        onClick={() => setShow(true)}
                                    >
                                        Add Special Request
                                    </Button>
                                </div>
                            </div>
                            <div className={classes.main__content}>
                                {
                                    specialRequests?.length !== 0
                                        ?
                                        (
                                            specialRequests?.map((item, index) => (
                                                <div className={classes.main__content__item} key={index}>
                                                    <div className={classes.main__content__item__left}>


                                                        <p><strong>Request:</strong> {item.request}</p>
                                                    </div>
                                                    <div className={classes.main__content__item__right}>
                                                        <Button variant="contained"
                                                            sx={{
                                                                background: item.requestStatus === "awaiting" ? "#FCEFCF" : item.requestStatus === "approved" ? "#D4FFE7" : "#FEEFED",
                                                                color: item.requestStatus === "awaiting" ? "#F0AB00" : item.requestStatus === "approved" ? "#00B74A" : "#FF0000",
                                                                '&:hover': {
                                                                    background: item.requestStatus === "awaiting" ? "#FCEFCF" : item.requestStatus === "approved" ? "#D4FFE7" : "#FEEFED",
                                                                    color: item.requestStatus === "awaiting" ? "#F0AB00" : item.requestStatus === "approved" ? "#00B74A" : "#FF0000",
                                                                }
                                                            }}
                                                        >{item.requestStatus}</Button>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                        :
                                        (
                                            <div className={classes.main__content__item}>
                                                <div style={{
                                                    textAlign: "center",
                                                    width: "100%"
                                                }}>
                                                    <h2>No Special Requests yet</h2>
                                                </div>
                                            </div>
                                        )

                                }

                            </div>
                        </>
                }


            </div>
        </div>
    )
}

export default SpecialRequest