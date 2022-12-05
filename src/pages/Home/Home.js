import React from 'react'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
      <Sidebar />
    </div>
  )
}

export default Home