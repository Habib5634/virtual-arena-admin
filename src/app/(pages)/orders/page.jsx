'use client'
import DashboardLayout from '@/components/DashboardLayout'
import React, { Suspense } from 'react'
import Orders from './Orders'

const OrderPage = () => {
  return (
    <Suspense fallback={"loading..."}>
    <DashboardLayout pageTitle={'Orders'}>
    <Orders/>
  
</DashboardLayout>
    </Suspense>
  )
}

export default OrderPage
