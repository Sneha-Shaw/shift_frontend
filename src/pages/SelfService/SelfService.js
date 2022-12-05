import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'

const SelfService = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <Sidebar />
    </div>
  )
}

export default SelfService