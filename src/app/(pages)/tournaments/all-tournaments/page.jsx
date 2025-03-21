import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Tournaments from './Tournaments'

const AllTournamentPage = () => {
  return (
    <DashboardLayout pageTitle={'All Tournament'}>
      <Tournaments/>
    </DashboardLayout>
  )
}

export default AllTournamentPage
