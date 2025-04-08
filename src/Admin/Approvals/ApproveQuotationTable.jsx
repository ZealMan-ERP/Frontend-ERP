import React from 'react'

function ApproveQuotationTable() {
  const tableData = [
    {
      workOrderNo: '#20462',
      poNumber: 'Hat',
      customer: 'Matt Dickerson',
      poDate: '13/05/2022',
      projectEngineer: 'Tranfer Bank',
      qualityEngineer: 'Tranfer Bank',
      deliveryDate: '13/05/2022',
      status: 'Delivered',
      remarks: 'Tranfer Bank',
    },
    {
      workOrderNo: '#20462',
      poNumber: 'Hat',
      customer: 'Matt Dickerson',
      poDate: '13/05/2022',
      projectEngineer: 'Tranfer Bank',
      qualityEngineer: 'Tranfer Bank',
      deliveryDate: '13/05/2022',
      status: 'Delivered',
      remarks: 'Tranfer Bank',
    },
    {
      workOrderNo: '#20462',
      poNumber: 'Hat',
      customer: 'Matt Dickerson',
      poDate: '13/05/2022',
      projectEngineer: 'Tranfer Bank',
      qualityEngineer: 'Tranfer Bank',
      deliveryDate: '13/05/2022',
      status: 'Delivered',
      remarks: 'Tranfer Bank',
    },
    {
      workOrderNo: '#20462',
      poNumber: 'Hat',
      customer: 'Matt Dickerson',
      poDate: '13/05/2022',
      projectEngineer: 'Tranfer Bank',
      qualityEngineer: 'Tranfer Bank',
      deliveryDate: '13/05/2022',
      status: 'Delivered',
      remarks: 'Tranfer Bank',
    },
    {
      workOrderNo: '#20462',
      poNumber: 'Hat',
      customer: 'Matt Dickerson',
      poDate: '13/05/2022',
      projectEngineer: 'Tranfer Bank',
      qualityEngineer: 'Tranfer Bank',
      deliveryDate: '13/05/2022',
      status: 'Delivered',
      remarks: 'Tranfer Bank',
    },
    {
      workOrderNo: '#20462',
      poNumber: 'Hat',
      customer: 'Matt Dickerson',
      poDate: '13/05/2022',
      projectEngineer: 'Tranfer Bank',
      qualityEngineer: 'Tranfer Bank',
      deliveryDate: '13/05/2022',
      status: 'Delivered',
      remarks: 'Tranfer Bank',
    },
    {
      workOrderNo: '#20462',
      poNumber: 'Hat',
      customer: 'Matt Dickerson',
      poDate: '13/05/2022',
      projectEngineer: 'Tranfer Bank',
      qualityEngineer: 'Tranfer Bank',
      deliveryDate: '13/05/2022',
      status: 'Delivered',
      remarks: 'Tranfer Bank',
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
            <th className="px-3 py-4">Customer</th>
            <th className="px-3 py-4">Po Date</th>
            <th className="px-3 py-4">Project Engineer</th>
            <th className="px-3 py-4">Quality Engineer</th>
            <th className="px-3 py-4">Delivery Date</th>
            <th className="px-3 py-4">Status</th>
            <th className="px-3 py-4">Remarks</th>
            <th className="px-3 py-4">View</th>
            <th className="px-3 py-4">Approval</th>
            <th className="px-3 py-4">Action</th>
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
              <td className="px-4 py-4">{row.customer}</td>
              <td className="px-4 py-4">{row.poDate}</td>
              <td className="px-4 py-4">{row.projectEngineer}</td>
              <td className="px-4 py-4">{row.qualityEngineer}</td>
              <td className="px-4 py-4">{row.deliveryDate}</td>
              <td className="px-4 py-4">
                <span
                  className={`px-2 py-1 rounded-full ${row.status === 'Delivered'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                    }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-4">{row.remarks}</td>
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
              <td className="px-4 py-4">
                <button className="text-blue-500 hover:underline">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b927a60f8772abac0087201a4aca97ce8701ca514440f12a349586774018b389?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                    alt=""
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApproveQuotationTable
