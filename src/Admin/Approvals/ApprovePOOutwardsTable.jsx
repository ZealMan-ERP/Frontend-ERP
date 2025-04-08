import React from 'react'

function QuotationTable() {
  const tableData = [
    {
      workOrderNo: '#20462',
      poNumber: 'Hat',
      vendor: 'Matt Dickerson',
      poDate: '13/05/2022',
      deliveryDate: '13/05/2022',
      remarks: 'Delivery on time',
    },
    // Repeat objects as needed
  ]

  return (
    <div className="p-4 mt-2 flex flex-col gap-4">
      <table className="w-full border-collapse text-sm font-medium text-center">
        <thead className="bg-blue-100 text-sky-950">
          <tr>
            <th className="px-3 py-4">Work Order Number</th>
            <th className="px-3 py-4">PO Number</th>
            <th className="px-3 py-4">Vendor</th>
            <th className="px-3 py-4">PO Date</th>
            <th className="px-3 py-4">Delivery Date</th>
            <th className="px-3 py-4">View</th>
            <th className="px-3 py-4">Approve</th>
            <th className="px-3 py-4">Remarks</th>
            <th className="px-3 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="border-y-2 border-blue-100 bg-white hover:bg-blue-50"
              style={{ height: '50px' }}
            >
              <td className="px-4 py-4">{row.workOrderNo}</td>
              <td className="px-4 py-4">{row.poNumber}</td>
              <td className="px-4 py-4">{row.vendor}</td>
              <td className="px-4 py-4">{row.poDate}</td>
              <td className="px-4 py-4">{row.deliveryDate}</td>
              <td className="px-4 py-4">
                <button className="bg-blue-700 text-white px-3 py-1 rounded-3xl">
                  Open
                </button>
              </td>
              <td className="px-4 py-4 flex justify-center gap-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded-3xl">
                  Approve
                </button>
                <button className="border border-red-500 text-red-500 px-3 py-1 rounded-3xl">
                  Reject
                </button>
              </td>
              <td className="px-4 py-4">{row.remarks}</td>
              <td className="px-4 py-4">
                <button className="text-blue-500 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuotationTable
