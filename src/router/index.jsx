import Auth from '@/pages/Auth/Auth'
import Biling from '@/pages/Dashboard/Biling/Biling'
import Dashboard from '../pages/Home'
import Rtl from '@/pages/Dashboard/Rtl/Rtl'
import Table from '@/pages/Dashboard/Tables/Table'
import Login from '../pages/Login'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />}>
          <Route path='home' element={<Dashboard />} />
          <Route path='table' element={<Table />} />
          <Route path='biling' element={<Biling />} />
          <Route path='rtl' element={<Rtl />} />
      <Route path='login' element={<Login />} />
        </Route>
    </Routes >
    </>
  )
}

export default Router