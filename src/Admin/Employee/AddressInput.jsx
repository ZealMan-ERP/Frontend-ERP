import React from 'react';
import FormInput from './FormInput';

function AddressInput({ label, value, onChange, additionalInput = {}, additionalValue, onAdditionalChange }) {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col w-[285px] mr-5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <label htmlFor={inputId} className="text-base text-sky-950">
          {label}
        </label>
        <textarea
          name={inputId}
          id={inputId}
          value={value}
          onChange={onChange}
          className="px-2 py-2 mt-1 w-[285px] h-[74px] overflow-hidden bg-white rounded border border-solid border-stone-300 left-0 top-0 max-md:pl-5"
        />
      </div>

      {additionalInput.label && (
        <FormInput
          label={additionalInput.label}
          value={additionalValue}
          onChange={onAdditionalChange}
          className="mt-9"
        />
      )}
    </div>
  );
}

export default AddressInput;
