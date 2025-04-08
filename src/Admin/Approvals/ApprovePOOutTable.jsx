import React from 'react'


function QuotationTable() {
  const tableData = [
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    {
      annexureNumber: '0001',
      process: 'Mechanical Box',
      typeOfGoods: '1120 061 436 64',
      vendor: '1',
      reason: '1120 061 436 64',
    },
    // Add more rows as needed
  ]

  return (
    <div className="p-4 mt-2 flex flex-col gap-4">
      <table className="w-full border-collapse text-sm font-medium text-center">
        <thead className="bg-blue-100 text-sky-950">
          <tr>
            <th className="px-3 py-4">Annexure Number</th>
            <th className="px-3 py-4">Process</th>
            <th className="px-3 py-4">Type of Goods</th>
            <th className="px-3 py-4">Vendor</th>
            <th className="px-3 py-4">Status</th>
            <th className="px-3 py-4">View</th>
            <th className="px-3 py-4">Reason</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="border-y-2 border-blue-100 bg-white hover:bg-blue-50"
              style={{ height: '50px' }}
            >
              <td className="px-4 py-4">{row.annexureNumber}</td>
              <td className="px-4 py-4">{row.process}</td>
              <td className="px-4 py-4">{row.typeOfGoods}</td>
              <td className="px-4 py-4">{row.vendor}</td>
              <td className="px-4 py-4 flex justify-center gap-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded-3xl">
                  Approve
                </button>
                <button className="border border-red-500 text-red-500 px-3 py-1 rounded-3xl">
                  Reject
                </button>
              </td>
              <td className="px-4 py-4">
                <button className="bg-blue-700 text-white px-3 py-1 rounded-3xl">
                  Open
                </button>
              </td>
              <td className="px-4 py-4">{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuotationTable
