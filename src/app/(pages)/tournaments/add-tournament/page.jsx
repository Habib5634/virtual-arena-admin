import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import AddTournament from './AddTournament'

const AddTournamentPage = () => {
  return (
    <DashboardLayout pageTitle={'Add Tournament'}>
      <AddTournament/>
    </DashboardLayout>
  )
}

export default AddTournamentPage
