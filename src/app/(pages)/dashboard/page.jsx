'use client' 
import DashboardLayout from '@/components/DashboardLayout'
import React, { Suspense } from 'react'
import Dashboard from './Dashboard'

const DashboardPage = () => {
   
  return (
    <Suspense fallback={'loading..'}>

      <DashboardLayout pageTitle={'Dashboard'}>
        <Dashboard />
      </DashboardLayout>
    </Suspense>
  )
}

export default DashboardPage
