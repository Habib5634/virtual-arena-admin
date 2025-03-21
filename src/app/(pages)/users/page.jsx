import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Users from './Users'

const UsersPage = () => {
    return (
        <DashboardLayout pageTitle={'Users'}>

<Users/>
        </DashboardLayout>
    )
}

export default UsersPage
