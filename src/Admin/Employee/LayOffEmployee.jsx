import React, { useState } from 'react'
import FormInput from './FormInput'
import AddressInput from './AddressInput'
import API_ENDPOINTS from '../../constants/apiEndPoints'

function LayOffEmployee() {
  const [formData, setFormData] = useState({
    EmployeeID: '',
    ReasonForLayoff: '',
    DateOfLayoff: '',
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(API_ENDPOINTS.employees.layoff, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log('Success:', result)
      // optionally reset formData here
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form
      className="w-full h-full max-w-[1033px] mt-14 ml-9 max-md:mt-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row gap-[117px] max-w-full text-sm leading-none text-sky-950 w-[979px]">
        <FormInput
          label="Employee ID"
          onChange={(e) => handleChange('EmployeeID', e.target.value)}
        />
        <FormInput
          label="Date of Layoff"
          type="datetime-local"
          onChange={(e) => handleChange('DateOfLayoff', e.target.value)}
        />
      </div>

      <div className="mt-9 max-w-full w-[979px]">
        <div className="flex flex-row gap-[97px] max-md:flex-col">
          <AddressInput
            label="Reason For Layoff"
            onChange={(e) => handleChange('ReasonForLayoff', e.target.value)}
            additionalInput={{ label: 'City' }}
          />
          <AddressInput
            label="Contribution to Company"
            additionalInput={{ label: 'State' }}
          />
        </div>
      </div>

      <button
        type="submit"
        className="border bg-[#0B57D0] mt-10 px-5 w-[200px] h-[40px] text-white px-3 py-1 rounded-xl"
      >
        Remove
      </button>
    </form>
  )
}

export default LayOffEmployee
