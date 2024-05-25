import { CircularProgress } from '@mui/material'
import "./Loader.css"
import React from 'react'

const Loader = () => {
  return (
    <div className="loader-background">
    <CircularProgress />
  </div>
  )
}

export default Loader