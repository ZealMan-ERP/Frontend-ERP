import React, { useState } from 'react'
import FormInput from './FormInput'
import AddressInput from './AddressInput'
import API_ENDPOINTS from '../../constants/apiEndPoints'

function CompanyForm() {
  const [formData, setFormData] = useState({
    company_id: 1, // Adjust this as needed
    company_name: '',
    email_address: '',
    phone_number: '',
    address_line1: '',
    address_line2: '',
    gst_number: '',
    city: '',
    state: '',
    pin_code: '',
    gst_registration_number: '',
    gst_registration_type: '',
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(API_ENDPOINTS.company.update, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log('Company Updated:', result)
    } catch (error) {
      console.error('Update Error:', error)
    }
  }

  return (
    <form
      className="w-full max-w-[1033px] mt-14 max-md:mt-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap gap-10 max-w-full text-sm leading-none text-sky-950 w-[979px]">
        <FormInput label="Company Name" onChange={(e) => handleChange('company_name', e.target.value)} />
        <FormInput label="Email Address" onChange={(e) => handleChange('email_address', e.target.value)} />
        <FormInput label="Phone Number" onChange={(e) => handleChange('phone_number', e.target.value)} />
      </div>

      <div className="mt-9 max-w-full w-[979px]">
        <div className="flex gap-5 max-md:flex-col">
          <AddressInput
            label="Address Line 1"
            onChange={(e) => handleChange('address_line1', e.target.value)}
            additionalInput={{ label: 'City', onChange: (e) => handleChange('city', e.target.value) }}
          />
          <AddressInput
            label="Address Line 2"
            onChange={(e) => handleChange('address_line2', e.target.value)}
            additionalInput={{ label: 'State', onChange: (e) => handleChange('state', e.target.value) }}
          />
          <FormInput label="GST Number" className="h-[80px]" onChange={(e) => handleChange('gst_number', e.target.value)} />
        </div>
      </div>

      <div className="flex flex-wrap gap-10 mt-9 mb-10 max-w-full text-sm leading-none text-sky-950 w-full max-md:mb-2.5">
        <FormInput label="City" onChange={(e) => handleChange('city', e.target.value)} />
        <FormInput label="State" onChange={(e) => handleChange('state', e.target.value)} />
        <FormInput label="Pin Code" onChange={(e) => handleChange('pin_code', e.target.value)} />
        <FormInput label="Gst Registration Number" onChange={(e) => handleChange('gst_registration_number', e.target.value)} />
        <FormInput label="Gst Registration Type" onChange={(e) => handleChange('gst_registration_type', e.target.value)} />
      </div>

      <button
        type="submit"
        className="border mt-5 bg-[#0B57D0] px-5 w-[200px] h-[40px] text-white px-3 py-1 rounded-xl"
      >
        Update
      </button>
    </form>
  )
}

export default CompanyForm
