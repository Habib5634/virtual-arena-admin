'use client'
import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import AllNotifications from './AllNotification'

const NotificationPage = () => {
  return (
    <DashboardLayout pageTitle={"All Notifications"}>
      <AllNotifications/>
    </DashboardLayout>
  )
}

export default NotificationPage
