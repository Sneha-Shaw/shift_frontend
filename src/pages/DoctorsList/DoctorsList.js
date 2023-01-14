import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import SubSidebar from '../../components/SubSidebar/SubSidebar'
import { Button } from '@mui/material'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { DoctorsLogic } from './DoctorsLogic'
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const DoctorsList = () => {
    const classes = useStyles()

    const {
        // doctorInfo,
        deleteDoctorHandler,
        updateDoctorHandler,
        addShow,
        setaddShow,
        updateShow,
        setupdateShow,
        doctors,
        name,
        setName,
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
        designation,
        Type,
        defaultType,
        employType,
        setEmploytype,
        dutyHoursPerDay,
        setDutyHoursPerDay,
        handleChange,
        checked,
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
    } = DoctorsLogic()
    return (
        <div className={classes.root}
            style={{
                height:
                    doctors?.getAllDoctors > 6 ? "100vh" : "100%",
            }}
        >
            <Sidebar />
            <SubSidebar />
            <div className={classes.main}>
                {/* header */}
                {
                    (!addShow && !updateShow) && (
                        <div className={classes.header}>
                            <h1>Doctors</h1>
                            <Button
                                variant="contained"
                                onClick={() => setaddShow(!addShow)}
                            >
                                Add Doctor
                            </Button>
                        </div>
                    )
                }
                {
                    (addShow || updateShow) && (
                        <div className={classes.back}>
                            <Button
                                // variant="contained"
                                //    if addshow is true then setaddshow false else if updateshow is true then setupdateshow false
                                onClick={() => {
                                    addShow ? setaddShow(!addShow) : setupdateShow(!updateShow);
                                    setName('')
                                    setDesignation('')
                                    setDomain('')
                                    setEmail('')
                                    setPhn('')
                                    setEmploytype('')
                                    setDutyHoursPerDay('')
                                    setDutyHoursPerMonth('')
                                    setChecked(false)
                                    setId('')
                                }}
                            >
                                Back
                            </Button>
                        </div>
                    )
                }
                {
                    (addShow || updateShow) ?
                        (<div className={classes.form}>
                            {/* header */}
                            <div className={classes.header}>
                                {
                                    // if add doctor is clicked then addShow add doctor else if update doctor is clicked then addShow update doctor
                                    addShow ? <h1 style={{ margin: "0 auto 2rem" }}>Add Doctor</h1> : <h1 style={{ margin: "0 auto 2rem" }}>Update Doctor</h1>
                                }
                            </div>

                            <div className={classes.formItem}>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>

                            <div className={classes.formItem}>
                                <label htmlFor="designation">Designation:</label>
                                <Dropdown options={designationOptions} placeholder="Select an option"
                                    onChange={(e) => setDesignation(e.value)}
                                    value={designation ? designation : defaultdesignationOptions}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="domain">Domain:</label>

                                <div>
                                    {
                                        // show dropdown as many time as the length of domaindrop
                                        domaindrop.map((item, index) => {
                                            return (
                                                <div key={index} className={classes.domain}>
                                                    <div style={{
                                                        width: "80%",
                                                        margin: "1rem 0"
                                                    }}>
                                                        <Dropdown options={domainOptions} placeholder="Select an option"
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                            //  store in domain array
                                                            onChange={(e) => {
                                                                let domainArray = [...domain]
                                                                domainArray[index] = e.value
                                                                setDomain(domainArray)
                                                            }}
                                                            value={domain[index] ? domain[index].toUpperCase() : ""}
                                                        />
                                                    </div>
                                                    {
                                                        // domaindrop length is less tan domainOptions length
                                                        domaindrop.length < domainOptions.length && (
                                                            <div className={classes.circle}>
                                                                <AddIcon
                                                                    onClick={() => addDomainDropdown()}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        // domaindrop length is greater than 1
                                                        domaindrop.length > 1 && (
                                                            <div className={classes.circle}>
                                                                <RemoveIcon
                                                                    onClick={() => removeDomainDropdown(index)}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                    }

                                    {/* <div className={classes.circle}>
                                        <AddIcon />
                                    </div> */}
                                </div>
                            </div>

                            <div className={classes.formItem}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="phn">Mobile:</label>
                                <input type="text" name="phn" id="phn"
                                    onChange={(e) => setPhn(e.target.value)}
                                    value={phn}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="type">Type:</label>
                                <Dropdown options={Type} placeholder="Select an option"
                                    onChange={(e) => setEmploytype(e.value)}
                                    // if employType has value then employType else defaultType
                                    value={employType ? (employType.charAt(0).toUpperCase() + employType.slice(1)) : defaultType}
                                />
                            </div>
                            {
                                employType === 'Contractual' && (
                                    <div className={classes.formItem}>
                                        <label htmlFor="duration">Duty hours per month:</label>
                                        <input type="text" name="duration" id="duration"
                                            onChange={(e) => setDutyHoursPerMonth(e.target.value)}
                                            value={dutyHoursPerMonth}
                                        />
                                    </div>
                                )
                            }
                            <div className={classes.formItem}>
                                <label htmlFor="duration">Duty hours per day:</label>
                                <input type="text" name="duration" id="duration"
                                    onChange={(e) => setDutyHoursPerDay(e.target.value)}
                                    value={dutyHoursPerDay}
                                />
                            </div>
                            <div className={classes.formItem}>
                                <label htmlFor="nightDuty">Night Duty:</label>
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={classes.formItem}>
                                {
                                    // if addShow is true then add doctor button else if updateShow is true then update doctor button
                                    addShow ?
                                        <Button
                                            variant="contained"
                                            onClick={addDoctorHandler}
                                        >
                                            Add Doctor
                                        </Button>
                                        :
                                        <Button
                                            variant="contained"
                                            onClick={() => updateDoctorHandler(id)}
                                        >
                                            Update Doctor
                                        </Button>
                                }

                            </div>
                        </div>)
                        :
                        (
                            <div className={classes.tableDiv}>
                                <table className={classes.table}>
                                    <thead className={classes.tableHeader}>
                                        <tr>
                                            <th className={classes.tableHeaderItem}>Name</th>
                                            <th className={classes.tableHeaderItem}>Designation</th>
                                            <th className={classes.tableHeaderItem}>Domain</th>
                                            <th className={classes.tableHeaderItem}>Email</th>
                                            <th className={classes.tableHeaderItem}>Mobile</th>
                                            <th className={classes.tableHeaderItem}>Type</th>
                                            <th className={classes.tableHeaderItem}>DutyHoursPerDay</th>
                                            <th className={classes.tableHeaderItem}>DutyHoursPerMonth</th>
                                            <th className={classes.tableHeaderItem}>Night Duty</th>
                                            <th className={classes.tableHeaderItem}>Actions</th>
                                        </tr>
                                    </thead>

                                    {
                                        // if searchData is not null then map searchData else map doctors
                                        searchData ?
                                            searchData && searchData?.searchDoctor?.map((doctor, index) => (
                                                <tbody className={classes.tableRow} key={index}>
                                                    <tr>
                                                        <td className={classes.tableRowItem}>{doctor.name}</td>
                                                        <td className={classes.tableRowItem}>{doctor.designation}</td>
                                                        <td className={classes.tableRowItem}>
                                                            {
                                                                doctor?.domain?.map((domainItem) => {
                                                                    return domainItem.toUpperCase() + ' '
                                                                })}
                                                        </td>

                                                        <td className={classes.tableRowItem}>{doctor.email}</td>
                                                        <td className={classes.tableRowItem}>{doctor.mobile}</td>
                                                        <td className={classes.tableRowItem}>
                                                            {doctor.type.charAt(0).toUpperCase() + doctor.type.slice(1)}
                                                        </td>
                                                        <td className={classes.tableRowItem}>{doctor.dutyHoursPerDay}</td>
                                                        <td className={classes.tableRowItem}>{doctor.dutyHoursPerMonth}</td>
                                                        <td className={classes.tableRowItem}>{doctor.nightDuty ? 'Yes' : 'No'}</td>
                                                        <td className={classes.tableRowItem}>
                                                            <Button
                                                                variant="contained"
                                                                sx={{
                                                                    backgroundColor: "#f44336",
                                                                    '&:hover': {
                                                                        backgroundColor: "#f44336"
                                                                    }
                                                                }}
                                                                onClick={() => deleteDoctorHandler(doctor.name, doctor.email)}
                                                            >
                                                                Delete
                                                            </Button>
                                                            <Button
                                                                variant="contained"
                                                                sx={{

                                                                }}
                                                                onClick={() => {
                                                                    setaddShow(false)
                                                                    setupdateShow(true)
                                                                    setName(doctor.name)
                                                                    setDesignation(doctor.designation)
                                                                    setDomain(doctor.domain)
                                                                    // setDomainDrop([...domaindrop, { domainName: '' }]) until domaindrop length is equal to doctor.domain length
                                                                    domaindrop?.length < doctor.domain?.length && setDomainDrop([...domaindrop, { domainName: '' }])
                                                                    setEmail(doctor.email)
                                                                    setPhn(doctor.mobile)
                                                                    setEmploytype(doctor.type)
                                                                    setDutyHoursPerDay(doctor.dutyHoursPerDay)
                                                                    setDutyHoursPerMonth(doctor.dutyHoursPerMonth)
                                                                    setChecked(doctor.nightDuty)
                                                                    setId(doctor._id)
                                                                }}
                                                            >
                                                                Edit
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            ))
                                            :
                                            doctors && doctors.getAllDoctors.map((doctor, index) => (
                                                <tbody className={classes.tableRow} key={index}>
                                                    <tr>
                                                        <td className={classes.tableRowItem}>{doctor.name}</td>
                                                        <td className={classes.tableRowItem}>{doctor.designation}</td>
                                                        <td className={classes.tableRowItem}>
                                                            {
                                                                doctor?.domain?.map((domainItem) => {
                                                                    return domainItem.toUpperCase() + ' '

                                                                })}
                                                        </td>

                                                        <td className={classes.tableRowItem}>{doctor.email}</td>
                                                        <td className={classes.tableRowItem}>{doctor.mobile}</td>
                                                        <td className={classes.tableRowItem}>
                                                            {doctor.type.charAt(0).toUpperCase() + doctor.type.slice(1)}
                                                        </td>
                                                        <td className={classes.tableRowItem}>{doctor.dutyHoursPerDay}</td>
                                                        <td className={classes.tableRowItem}>{doctor.dutyHoursPerMonth}</td>
                                                        {
                                                            doctor.nightDuty ?
                                                                <td className={classes.tableRowItem}>Yes</td>
                                                                :
                                                                <td className={classes.tableRowItem}>No</td>
                                                        }
                                                        <td className={classes.tableRowItem}>
                                                            <Button
                                                                variant="contained"
                                                                sx={{
                                                                    backgroundColor: "#f44336",
                                                                    '&:hover': {
                                                                        backgroundColor: "#f44336"
                                                                    }
                                                                }}
                                                                onClick={() => deleteDoctorHandler(doctor.name, doctor.email)}
                                                            >
                                                                Delete
                                                            </Button>
                                                            <Button
                                                                variant="contained"
                                                                sx={{

                                                                }}
                                                                onClick={() => {
                                                                    setaddShow(false)
                                                                    setupdateShow(true)
                                                                    setName(doctor.name)
                                                                    setDesignation(doctor.designation)
                                                                    // set array of doctor domain to domain
                                                                    setDomain(doctor.domain)
                                                                    // setDomainDrop([...domaindrop, { domainName: '' }]) until domaindrop length is equal to doctor.domain length
                                                                    domaindrop?.length < doctor.domain?.length && setDomainDrop([...domaindrop, { domainName: '' }])
                                                                    setEmail(doctor.email)
                                                                    setPhn(doctor.mobile)
                                                                    setEmploytype(doctor.type)
                                                                    setDutyHoursPerDay(doctor.dutyHoursPerDay)
                                                                    setDutyHoursPerMonth(doctor.dutyHoursPerMonth)
                                                                    setChecked(doctor.nightDuty)
                                                                    setId(doctor._id)
                                                                }}
                                                            >
                                                                Edit
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>

                                            ))
                                    }

                                </table>
                            </div>)
                }

            </div>
        </div>
    )
}

export default DoctorsList