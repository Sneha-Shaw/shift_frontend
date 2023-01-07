import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import useStyles from './styles'

const Archives = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <Sidebar />
        
    </div>
  )
}

export default Archives