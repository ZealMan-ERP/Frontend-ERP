import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import PendingPOsPage from './PendingWorkOrders/PendingWorkOrder'
import ApprovalsPage from './Approvals/Approvals'
import ValidateQuotations from './Employee/Employee'
import ViewInventory from './Inventory/Inventory'
import CompanyDetails from './CompanyDetails/CompanyDetails'
// import Dashboard from './Home/Dashboard'

function Admin() {
  const [activeTab, setActiveTab] = useState('Home')

  const renderContent = () => {
    switch (activeTab) {
      case 'Pending Work Orders':
        return <PendingPOsPage />
      case 'Approvals':
        return <ApprovalsPage />
      case 'Employee':
        return <ValidateQuotations />
      case 'Inventory':
        return <ViewInventory />
      case 'Company Details':
        return <CompanyDetails />
      default:
        return <PendingPOsPage />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sticky Sidebar */}
      <div className="w-64 flex-shrink-0 bg-white ">
        <Sidebar onTabChange={setActiveTab} activeTab={activeTab} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pt-20">
        {renderContent()}
      </div>
    </div>
  )
}

export default Admin
