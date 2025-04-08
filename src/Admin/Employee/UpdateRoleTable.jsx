import React, { useEffect, useState } from 'react'
import API_ENDPOINTS from '../../constants/apiEndPoints' // adjust the path if needed

function UpdateRoleTable() {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.employees.viewAllEmployees)
        const data = await response.json()
        setTableData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="p-4">
      <table className="w-full border-collapse text-sm font-medium text-center">
        <thead className="bg-blue-100 text-sky-950">
          <tr>
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Email Address</th>
            <th className="px-3 py-2">Phone Number</th>
            <th className="px-3 py-2">Permanent Work Type</th>
            <th className="px-3 py-2">Temporary Work Type</th>
            <th className="px-3 py-2">Till Time</th>
            <th className="px-3 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="border-y bg-white hover:bg-blue-50"
              style={{ height: '70px' }}
            >
              <td className="px-3 py-2">{row.EmployeeID}</td>
              <td className="px-3 py-2">{row.Name}</td>
              <td className="px-3 py-2">{row.EmailAddress}</td>
              <td className="px-3 py-2">{row.PhoneNumber}</td>
              <td className="px-3 py-2">
                {row.PermanentWorkType ? (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                    {row.PermanentWorkType}
                  </span>
                ) : (
                  <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
                    Null
                  </span>
                )}
              </td>
              <td className="px-3 py-2">
                {row.TemporaryWorkType ? (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                    {row.TemporaryWorkType}
                  </span>
                ) : (
                  <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
                    Null
                  </span>
                )}
              </td>
              <td className="px-3 py-2">{row.TillTime}</td>
              <td className="px-3 py-2">
                <button className="bg-blue-700 text-white px-4 py-1 rounded-full">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UpdateRoleTable
