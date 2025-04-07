import { Outlet } from 'react-router-dom';
import Mainbar from '../components/Mainbar';
import React from 'react'

const MainLayout = () => {
  return (
    <>
    <Mainbar />
    <Outlet /> 
    </>
  )
}

export default MainLayout