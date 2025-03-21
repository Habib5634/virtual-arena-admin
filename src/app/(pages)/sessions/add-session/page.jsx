import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import CreateSession from './AddSession'

const AddSessionPage = () => {
  return (
    <DashboardLayout pageTitle={'Add Sessions'}>
      <CreateSession/>
    </DashboardLayout>
  )
}

export default AddSessionPage
