'use client'
import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Bookings from './Bookings'

const AllBookingsPage = () => {
  return (
    <DashboardLayout pageTitle={'All Bookings'}>
      <Bookings/>
    </DashboardLayout>
  )
}

export default AllBookingsPage
