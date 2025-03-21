import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import AddProduct from './AddProduct'

const AddProductPage = () => {
  return (
    <DashboardLayout pageTitle={'Add Product'}>
      <AddProduct/>
    </DashboardLayout>
  )
}

export default AddProductPage
