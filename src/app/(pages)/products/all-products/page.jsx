import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Products from './Products'

const AllProductPage = () => {
  return (
    <DashboardLayout pageTitle={'Products'}>
        <Products/>
      
    </DashboardLayout>
  )
}

export default AllProductPage
