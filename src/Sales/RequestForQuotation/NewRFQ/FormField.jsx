import * as React from "react";

export function FormField({ label, id, value, onChange, type = "text", placeholder }) {
    return (
        <div className="flex flex-col flex-1 min-h-[65px]">
            <label htmlFor={id} className="leading-none">{label}</label>

            {type === "date" ? (
                <div className="relative w-full">
                    <input
                        id={id}
                        type="date"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full py-1.5 mt-1 px-3 pr-4 rounded border border-neutral-200 bg-white appearance-none text-gray-500 min-h-[39px]"
                        aria-label={label}
                    />
                </div>
            ) : (
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="flex flex-1 gap-1 py-1.5 mt-1 w-full bg-white rounded border border-neutral-200 min-h-[39px] "
                    aria-label={label}
                />
            )}
        </div>
    );
}
