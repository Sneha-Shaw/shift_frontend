import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import useStyles from './styles'

const Archives = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <Sidebar />
        <div className={classes.main}>
            <h1>Archives</h1>
            
        </div>
    </div>
  )
}

export default Archives