import React, { useState } from 'react'
// import FilterSection from '../Components/FilterSection'
// import QuotationTable from './QuotationTable'
import UpdateRoleTable from './UpdateRoleTable'
import RecruitEmployee from './RecruitEmployee'
import LayOffEmployee from './LayOffEmployee'


function ValidateQuotations() {
  const [activeTab, setActiveTab] = useState('Recruit Employee') // State to track active tab

  return (
    <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
      {/* <Sidebar /> */}
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <main className="flex flex-col pb-10 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:max-w-full">
          <nav className="flex flex-row items-start max-w-full text-base tracking-wide w-[498px]">
            <div
              onClick={() => setActiveTab('Recruit Employee')}
              className={`flex-1 shrink gap-2.5 self-stretch px-7 py-6 text-blue-700 bg-white border-b-[3px] min-w-[240px] max-md:px-5 cursor-pointer ${activeTab === 'Recruit Employee'
                ? 'border-blue-700'
                : 'border-transparent text-zinc-700'
                }`}
            >
              Recruit Employee
            </div>
            <div
              onClick={() => setActiveTab('Lay Off Employee')}
              className={`flex-1 shrink gap-2.5 self-stretch px-7 py-6 bg-white min-w-[240px] max-md:px-5 cursor-pointer ${activeTab === 'Lay Off Employee'
                ? 'border-blue-700 text-blue-700 border-b-[3px]'
                : 'border-transparent text-zinc-700'
                }`}
            >
              Lay Off Employee
            </div>
            <div
              onClick={() => setActiveTab('Update Role')}
              className={`flex-1 shrink gap-2.5 self-stretch px-7 py-6 bg-white min-w-[240px] max-md:px-5 cursor-pointer ${activeTab === 'Update Role'
                ? 'border-blue-700 text-blue-700 border-b-[3px]'
                : 'border-transparent text-zinc-700'
                }`}
            >
              Update Role
            </div>
          </nav>

          {activeTab === 'Recruit Employee' && (
            <>
              <RecruitEmployee />
              <div className="flex justify-center items-center mt-20 gap-4">
                {/* <button className="border bg-[#0B57D0] px-5 w-[200px] h-[40px] text-white px-3 py-1 rounded-xl">
                  Update
                </button> */}
              </div>
            </>
          )}
          {activeTab === 'Lay Off Employee' && (
            <>
              <LayOffEmployee />
              <div className="flex justify-center items-center mt-20 gap-4">
                {/* <button className="border bg-[#0B57D0] px-5 w-[200px] h-[40px] text-white px-3 py-1 rounded-xl">
                  Remove
                </button> */}
              </div>
            </>
          )}
          {activeTab === 'Update Role' && (
            <>
              <UpdateRoleTable />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default ValidateQuotations
