import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Payments from './Payments'

const PaymentPage = () => {
  return (
    <DashboardLayout pageTitle={"Payment Details"}>
      <Payments/>
    </DashboardLayout>
  )
}

export default PaymentPage
