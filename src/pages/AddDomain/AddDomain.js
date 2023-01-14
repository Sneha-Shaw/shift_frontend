import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { AddDomainLogic } from './AddDomainLogic'
import { Button } from '@mui/material'

const AddDomain = () => {
    const classes = useStyles()
    const {
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
    } = AddDomainLogic()
    return (
        <div className={classes.root}>
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                {
                    addShow ? (
                        <h1>
                            Add Domain
                        </h1>
                    ) :
                        updateShow ? (
                            <h1>
                                Update Domain
                            </h1>
                        )
                            :
                            (
                                <div className={classes.header}>
                                    <h1>
                                        Domains
                                    </h1>
                                    <Button
                                        variant="contained"
                                        onClick={() => setaddShow(!addShow)}
                                    >
                                        Add Domain
                                    </Button>

                                </div>
                            )

                }
                {
                    (updateShow || addShow) && (
                        <div className={classes.back}>
                            <Button
                                // variant="contained"
                                onClick={() => {
                                    addShow === true && setaddShow(!addShow)
                                    updateShow === true && setupdateShow(!updateShow)
                                }}
                            >
                                Back
                            </Button>
                        </div>
                    )
                }
                {
                    (updateShow || addShow) ? (
                        <div className={classes.content}>
                            <div className={classes.input}>
                                <label htmlFor="domain">Domain</label>
                                <input
                                    type="text"
                                    name="domain"
                                    id="domain"
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                />
                            </div>
                            {
                                addShow && (
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleAddDomain}
                                    >
                                        Add Domain
                                    </Button>
                                )
                            }
                            {
                                updateShow && (
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => {
                                            handleUpdateDomain()
                                        }}
                                    >
                                        Update Domain
                                    </Button>
                                )
                            }
                        </div>
                    ) : (
                        <div className={classes.content}>
                            <table className={classes.table}>
                                <thead>
                                    <tr>
                                        <th>Domain</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        alldomains && alldomains?.getAllDomains.length === 0 && (
                                            <tr>
                                                <td colSpan="2">No Domains Found</td>
                                            </tr>
                                        )
                                    }
                                    {
                                        alldomains && alldomains?.getAllDomains.map((domain) => (
                                            <tr key={domain._id}>
                                                <td>{domain.domainName}</td>
                                                <td>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => {
                                                            setDomain(domain.domainName)
                                                            setupdateShow(!updateShow)
                                                            setid(domain._id)
                                                        }}
                                                    >
                                                        Update
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        onClick={() => handleDeleteDomain(domain._id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AddDomain