import React, { useState, useEffect } from "react";

function Filters({ data }) {
    const [formData, setFormData] = useState({
        company_name: "",
        work_order_number: "",
        quotation_number: "",
        work_order_issue_date: "",
        project_engineer: "",
        quality_engineer: "",
        delivery_date: "",
    });

    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data]);

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className="w-full text-sm">
            {/* Order Information Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold flex justify-between items-center">
                <span>Order Information</span>
                <button className="bg-blue-500 text-white p-2 rounded-md shadow hover:bg-blue-600">
                    🖨️
                </button>
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Company Name</label>
                    <input
                        type="text"
                        value={formData.company_name}
                        onChange={(e) => handleChange("company_name", e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Work Order Number</label>
                    <input
                        type="text"
                        value={formData.work_order_number}
                        onChange={(e) => handleChange("work_order_number", e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Quotation Number</label>
                    <input
                        type="text"
                        value={formData.quotation_number}
                        onChange={(e) => handleChange("quotation_number", e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Work Order Issue Date</label>
                    <input
                        type="date"
                        value={formData.work_order_issue_date}
                        onChange={(e) => handleChange("work_order_issue_date", e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Assign Engineers Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Assign Engineers
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[300px]">
                    <label className="text-gray-700">Project Engineer</label>
                    <textarea
                        value={formData.project_engineer}
                        onChange={(e) => handleChange("project_engineer", e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-16"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[300px]">
                    <label className="text-gray-700">Quality Engineer</label>
                    <textarea
                        value={formData.quality_engineer}
                        onChange={(e) => handleChange("quality_engineer", e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-16"
                    />
                </div>
            </div>

            {/* Date of Delivery Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Date of Delivery
            </div>
            <div className="p-4">
                <label className="text-gray-700 px-3">Delivery Date</label>
                <input
                    type="date"
                    value={formData.delivery_date}
                    onChange={(e) => handleChange("delivery_date", e.target.value)}
                    className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full max-w-[300px]"
                />
            </div>

            {/* Item Details Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Item Details
            </div>
        </div>
    );
}

export default Filters;
