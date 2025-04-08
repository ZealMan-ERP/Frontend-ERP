import React from 'react'

const menuItems = [
  // { name: 'Home', isActive: false },
  { name: "Pending Work Orders", isActive: false },
  { name: 'Approvals', isActive: false },
  { name: 'Employee', isActive: false },
  { name: 'Inventory', isActive: false },
  { name: 'Company Details', isActive: false },
]

function Sidebar({ onTabChange, activeTab }) {
  return (
    <nav className="flex flex-col px-7 pt-6 pb-96 text-base bg-slate-50 text-zinc-700 max-md:pb-24 max-md:pl-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8344e0a63bf2e0845d9fd46e12417b540bc8ccadbfe8c7cb77d1310cdae1dc8?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
        className="object-contain self-center max-w-full rounded-none aspect-[3.53] w-[127px]"
        alt="Company Logo"
      />
      <div className="flex flex-col mt-14 max-md:mt-10">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col mt-8 max-w-full rounded-xl w-[153px]"
          >
            <div
              className={`px-2.5 py-1 rounded-xl cursor-pointer ${activeTab === item.name ? 'bg-blue-100' : 'bg-slate-50'
                } max-md:pr-5`}
              onClick={() => onTabChange(item.name)}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
