import React, { useState, useEffect } from "react";

function Filters2({ data }) {
    const [formData, setFormData] = useState({
        delivery_instruction: "",
        critical_note: "",
        approver_name: "",
        approver_phone: "",
    });

    useEffect(() => {
        if (data) {
            setFormData({
                delivery_instruction: data.delivery_instruction || "",
                critical_note: data.critical_note || "",
                approver_name: data.approver_name || "",
                approver_phone: data.approver_phone || "",
            });
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="w-full text-sm">
            {/* Notes */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Notes
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Instructions For Delivery</label>
                    <textarea
                        name="delivery_instruction"
                        value={formData.delivery_instruction}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-20"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Critical Notes</label>
                    <textarea
                        name="critical_note"
                        value={formData.critical_note}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-20"
                    />
                </div>
            </div>

            {/* Approval Status */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Approval Status
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Name</label>
                    <input
                        type="text"
                        name="approver_name"
                        value={formData.approver_name}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        name="approver_phone"
                        value={formData.approver_phone}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Signature</label>
                    <div className="border border-gray-300 rounded w-full h-20 flex items-center justify-center">
                        <span className="text-gray-500">(Signature here)</span>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            {/* <div className="flex justify-between px-4 py-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
                    Previous
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
                    Next
                </button>
            </div> */}
        </div>
    );
}

export default Filters2;
