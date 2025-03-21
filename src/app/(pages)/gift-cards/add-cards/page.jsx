import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import GiftCards from './giftCards'

const AddCardPage = () => {
  return (
    <DashboardLayout pageTitle={'Add Gift Cards'}>
      <GiftCards/>
    </DashboardLayout>
  )
}

export default AddCardPage
