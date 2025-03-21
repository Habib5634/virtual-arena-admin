import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Sessions from './Sessions'

const AllSessionPage = () => {
  return (
    <DashboardLayout pageTitle={'All Sessions'}>
      <Sessions/>
    </DashboardLayout>
  )
}

export default AllSessionPage
