import React, { useState } from 'react'
import FormInput from './FormInput'
import AddressInput from './AddressInput'
import API_ENDPOINTS from '../../constants/apiEndPoints'

function RecruitEmployee() {
  const [formData, setFormData] = useState({
    Name: '',
    EmailAddress: '',
    PhoneNumber: '',
    PermanentWorkType: '',
    TemporaryWorkType: null,
    WorkType: '',
    TillTime: '2025-12-31T11:30:25Z',
    AddressLine1: '',
    AddressLine2: '',
    ReasonForLayoff: 'Company restructuring',
    ContributionToCompany: 'Led multiple successful projects',
    City: '',
    State: '',
    PinCode: '',
    DateOfJoining: '2024-03-10',
    DateOfLeaving: null,
    created_at: '2025-03-14T11:30:25Z',
    updated_at: '2025-03-14T11:30:25Z',
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(API_ENDPOINTS.employees.recruit, {
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
          label="Engineer Name"
          onChange={(e) => handleChange('Name', e.target.value)}
        />
        <FormInput
          label="Email Address"
          onChange={(e) => handleChange('EmailAddress', e.target.value)}
        />
        <FormInput
          label="Phone Number"
          onChange={(e) => handleChange('PhoneNumber', e.target.value)}
        />
      </div>

      <div className="mt-9 max-w-full w-[979px]">
        <div className="flex flex-row gap-[97px] max-md:flex-col">
          <AddressInput
            label="Address Line 1"
            onChange={(e) => handleChange('AddressLine1', e.target.value)}
            additionalInput={{
              label: 'City',
              onChange: (e) => handleChange('City', e.target.value),
            }}
          />
          <AddressInput
            label="Address Line 2"
            onChange={(e) => handleChange('AddressLine2', e.target.value)}
            additionalInput={{
              label: 'State',
              onChange: (e) => handleChange('State', e.target.value),
            }}
          />
          <FormInput
            label="Work Type"
            onChange={(e) => handleChange('WorkType', e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row gap-[117px] mt-9 max-w-full text-sm leading-none text-sky-950 w-full max-md:mb-2.5">
        {/* <FormInput
          label="City"
          onChange={(e) => handleChange('City', e.target.value)}
        />
        <FormInput
          label="State"
          onChange={(e) => handleChange('State', e.target.value)}
        /> */}
        <FormInput
          label="Pin Code"
          onChange={(e) => handleChange('PinCode', e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="border bg-[#0B57D0] mt-10 px-5 w-[200px] h-[40px] text-white px-3 py-1 rounded-xl"
      >
        Update
      </button>
    </form>
  )
}

export default RecruitEmployee
