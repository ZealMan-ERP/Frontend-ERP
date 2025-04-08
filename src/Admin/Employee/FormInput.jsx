import React from 'react';

function FormInput({ label, className = '', value, onChange, type = 'text' }) {
    const inputId = label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className={`flex flex-col min-h-[65px] ${className}`}>
            <label htmlFor={inputId} className="mb-1.5">
                {label}
            </label>
            <input
                type={type}
                id={inputId}
                value={value}
                onChange={onChange}
                className="flex flex-1 gap-1 py-1.5 px-2 w-[285px] bg-white rounded border border-solid border-stone-300 h-[39px]"
            />
        </div>
    );
}

export default FormInput;
