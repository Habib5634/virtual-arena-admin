import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Registrations from './AllRegistrations'

const RegistrationsPage = () => {
  return (
    <DashboardLayout  pageTitle={'Tournament Registrations'}>
      <Registrations/>
    </DashboardLayout>
  )
}

export default RegistrationsPage
