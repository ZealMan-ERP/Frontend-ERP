import React, { useState } from 'react'
import FilterSection from '../Components/FilterSection'
import ApproveQuotationTable from './ApproveQuotationTable'
import ApprovePOOutTable from './ApprovePOOutTable'
import ApprovePOOutwardsTable from './ApprovePOOutwardsTable'

function ValidateQuotations() {
  const [activeTab, setActiveTab] = useState('Approve Quotations') // State to track active tab

  return (
    <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
      {/* <Sidebar /> */}
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <main className="flex flex-col pb-10 w-full bg-white shadow-[4px 4px 40px 0px ] max-md:max-w-full">
          <FilterSection />
          <nav className="flex flex-row items-start max-w-full text-base tracking-wide w-[498px]">
            <div
              onClick={() => setActiveTab('Approve Quotations')}
              className={`flex-1 shrink gap-2.5 self-stretch px-7 py-6 text-blue-700 bg-white border-b-[3px] h-[65px] min-w-[240px] max-md:px-5 cursor-pointer ${activeTab === 'Approve Quotations'
                  ? 'border-blue-700'
                  : 'border-transparent text-zinc-700'
                }`}
            >
              Approve Quotations
            </div>
            <div
              onClick={() => setActiveTab('Approve PO out')}
              className={`flex-1 shrink gap-2.5 self-stretch px-7 py-6 bg-white min-w-[240px] h-[65px] max-md:px-5 cursor-pointer ${activeTab === 'Approve PO out'
                  ? 'border-blue-700 text-blue-700 border-b-[3px]'
                  : 'border-transparent text-zinc-700'
                }`}
            >
              Approve PO out
            </div>
            <div
              onClick={() => setActiveTab('Approve Purchase Order - Outwards')}
              className={`flex-1 shrink gap-2.5 self-stretch px-7 py-6 bg-white min-w-[240px] h-[65px] max-md:px-5 cursor-pointer ${activeTab === 'Approve Purchase Order - Outwards'
                  ? 'border-blue-700 text-blue-700 border-b-[3px]'
                  : 'border-transparent text-zinc-700'
                }`}
            >
              Approve PO Outwards
            </div>
          </nav>

          {activeTab === 'Approve Quotations' && (
            <>
              <ApproveQuotationTable />
            </>
          )}
          {activeTab === 'Approve PO out' && (
            <>
              <ApprovePOOutTable />

            </>
          )}
          {activeTab === 'Approve Purchase Order - Outwards' && (
            <>
              <ApprovePOOutwardsTable />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default ValidateQuotations
