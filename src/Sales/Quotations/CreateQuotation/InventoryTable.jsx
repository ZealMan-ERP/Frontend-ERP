import React from 'react'
import DeleteIcon  from '../../../assets/delete'

function InventoryTable() {
  const inventoryItems = [
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Transfer Bank',
    },
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Transfer Bank',
    },
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Transfer Bank',
    },
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Transfer Bank',
    },
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Transfer Bank',
    },
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Transfer Bank',
    },
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Transfer Bank',
    },
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Transfer Bank',
    }

    // Add more inventory items here
  ]

  const headers = [
    { title: 'Sl No.', width: '80px' },
    { title: 'Part', width: '100px' },
    { title: 'Item Description', width: '200px' },
    { title: 'Hsn Number', width: '150px' },
    { title: 'Unit Of Mesure', width: '150px' },
    { title: 'Qty Nos', width: '100px' },
    { title: 'Unit Rate in INR', width: '150px' },
    { title: 'Total Amount in INR', width: '200px' },
    { title: 'Delete', width: '80px' },
  ]

  return (
    <div className="w-full mt-12">
      {/* Header Row */}
      <div className="flex bg-blue-100 font-bold text-black py-3">
        {headers.map((header, index) => (
          <div
            key={index}
            className="text-center"
            style={{
              width: header.width,
              textAlign: 'center',
              padding: '0 10px',
            }}
          >
            {header.title}
          </div>
        ))}
      </div>

      {/* Data Rows */}
      {inventoryItems.map((item, index) => (
        <div
          key={item.id}
          className="flex items-center border-b border-gray-200 text-sm text-sky-950 py-3"
        >
          <div className="text-center" style={{ width: headers[0].width }}>
            {index + 1}
          </div>
          <div className="text-center" style={{ width: headers[1].width }}>
            {item.part}
          </div>
          <div className="text-center" style={{ width: headers[2].width }}>
            {item.description}
          </div>
          <div className="text-center" style={{ width: headers[3].width }}>
            {item.hsnNumber}
          </div>
          <div className="text-center" style={{ width: headers[4].width }}>
            {item.unitOfMeasure}
          </div>
          <div className="text-center" style={{ width: headers[5].width }}>
            {item.qtyNos}
          </div>
          <div className="text-center" style={{ width: headers[6].width }}>
            {item.unitRate}
          </div>
          <div className="text-center" style={{ width: headers[7].width }}>
            {item.totalAmount}
          </div>
          <div className="flex justify-center items-center" style={{ width: headers[8].width }}>
            <DeleteIcon />
          </div>

        </div>
      ))}
    </div>
  )
}

export default InventoryTable
