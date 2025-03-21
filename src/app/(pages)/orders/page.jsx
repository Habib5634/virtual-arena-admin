'use client'
import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Orders from './Orders'

const OrderPage = () => {
  return (
    <DashboardLayout pageTitle={'Orders'}>
    <Orders/>
  
</DashboardLayout>
  )
}

export default OrderPage
