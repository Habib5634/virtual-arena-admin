import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import AllCards from './AllCards'

const AllCardsPage = () => {
  return (
    <DashboardLayout pageTitle={'All Gift Cards'}>
      <AllCards/>
    </DashboardLayout>
  )
}

export default AllCardsPage
