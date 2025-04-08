//use state item details(unique key), pass empty list, convert details into json and push into list, render in the table below
import React, { useState } from "react";

function Filters() {
    const [formData, setFormData] = useState({
        workOrderNumber: "",
        customerName: "",
        quotationNumber: "",
        quotationDate: "",
        projectName: "",
        purchaseOrderNumber: "",
        deliveryDate: "",
        itemDescription: "",
        partNumber: "",
        hsnNumber: "",
        unitMeasure: "",
        qtyNos: "",
        unitRate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddToList = () => {
        // Save to localStorage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Print to console
        console.log("Saved Form Data:", formData);
    };

    return (
        <div className="w-full text-sm">
            {/* Work Order Number */}
            <div className="flex flex-col px-4 py-2 flex-1 min-w-[200px]">
                <label className="text-gray-700">Work Order Number</label>
                <input
                    name="workOrderNumber"
                    type="text"
                    value={formData.workOrderNumber}
                    onChange={handleChange}
                    className="px-3 py-1.5 mt-1.5 mb-4 border border-gray-300 rounded outline-none w-1/3"
                />
            </div>

            {/* Select Quotation */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Select Quotation
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Customer Name</label>
                    <input
                        name="customerName"
                        type="text"
                        value={formData.customerName}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Quotation Number</label>
                    <input
                        name="quotationNumber"
                        type="text"
                        value={formData.quotationNumber}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Quotation Issue Date</label>
                    <input
                        name="quotationDate"
                        type="date"
                        value={formData.quotationDate}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Fill Purchase Order Details */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Fill Purchase Order Details
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Project Name</label>
                    <input
                        name="projectName"
                        type="text"
                        value={formData.projectName}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Purchase Order Number</label>
                    <input
                        name="purchaseOrderNumber"
                        type="text"
                        value={formData.purchaseOrderNumber}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Delivery Date</label>
                    <input
                        name="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Item Details */}
            {/* Item Details */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Item Details
            </div>
            <div className="p-4">
                <label className="text-gray-700">Item Description</label>
                <textarea
                    name="itemDescription"
                    value={formData.itemDescription}
                    onChange={handleChange}
                    className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-20"
                ></textarea>

                <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex flex-col max-w-[150px] w-full">
                        <label className="text-gray-700 mb-1">Part#</label>
                        <input
                            name="partNumber"
                            type="text"
                            value={formData.partNumber}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-1.5 w-full"
                        />
                    </div>
                    <div className="flex flex-col max-w-[150px] w-full">
                        <label className="text-gray-700 mb-1">HSN Number</label>
                        <input
                            name="hsnNumber"
                            type="text"
                            value={formData.hsnNumber}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-1.5 w-full"
                        />
                    </div>
                    <div className="flex flex-col max-w-[150px] w-full">
                        <label className="text-gray-700 mb-1">Unit of Measure</label>
                        <input
                            name="unitMeasure"
                            type="text"
                            value={formData.unitMeasure}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-1.5 w-full"
                        />
                    </div>
                    <div className="flex flex-col max-w-[150px] w-full">
                        <label className="text-gray-700 mb-1">Qty Nos</label>
                        <input
                            name="qtyNos"
                            type="number"
                            value={formData.qtyNos}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-1.5 w-full"
                        />
                    </div>
                    <div className="flex flex-col max-w-[150px] w-full">
                        <label className="text-gray-700 mb-1">Unit Rate in INR</label>
                        <input
                            name="unitRate"
                            type="number"
                            value={formData.unitRate}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-1.5 w-full"
                        />
                    </div>

                </div>

                {/* Add to List Button */}
                <div className="flex justify-end mt-4">
                    <button
                        type="button"
                        onClick={handleAddToList}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 flex items-center gap-2"
                    >
                        <span className="text-lg">+</span> Add to list
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filters;
