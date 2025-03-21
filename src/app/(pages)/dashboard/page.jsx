'use client'
import DashboardLayout from '@/components/DashboardLayout'
import React, { Suspense } from 'react'

const DashboardPage = () => {
  return (
    <Suspense fallback={"loading..."}>
    <DashboardLayout pageTitle={'Dashboard'}>
    <h1 className='text-white'>Dashboard</h1>
    <p className='text-white'>Welcome to the dashboard!</p>
  </DashboardLayout>
    </Suspense>
  )
}

export default DashboardPage
