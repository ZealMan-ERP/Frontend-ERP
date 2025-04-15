import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FormField } from "./FormField";
import API_ENDPOINTS from "../../../constants/apiEndPoints";

export default function CustomerForm() {
    const [formData, setFormData] = useState({
        customerName: "",
        customerNumber: "",
        location: "",
        country: "",
        requestVia: "",
        referenceNumber: "",
        goodType: "",
        submitDate: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
    });

    const navigate = useNavigate(); // Initialize navigate

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            customerid: parseInt(formData.customerNumber),
            location: formData.location,
            country: formData.country,
            requestVia: formData.requestVia,
            requestReferenceNumber: formData.referenceNumber,
            typeOfGoods: formData.goodType,
            lastDateToSubmit: formData.submitDate,
            contactPerson: formData.contactName,
            contactPersonNumber: formData.contactPhone,
            contactPersonEmail: formData.contactEmail,
            status: null,
        };

        if (isNaN(payload.customerid)) {
            alert("Customer Number must be a valid number.");
            return;
        }

        try {
            const response = await fetch(API_ENDPOINTS.rfq.createRFQ, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Failed to create RFQ: ${response.status}`);
            }

            const result = await response.json();
            console.log("RFQ Created:", result);
            alert("RFQ submitted successfully!");

            // Clear form after successful submission
            setFormData({
                customerName: "",
                customerNumber: "",
                location: "",
                country: "",
                requestVia: "",
                referenceNumber: "",
                goodType: "",
                submitDate: "",
                contactName: "",
                contactEmail: "",
                contactPhone: "",
            });
        } catch (error) {
            console.error("Error submitting RFQ:", error);
            alert("Error submitting RFQ");
        }
    };

    const formFields = [
        [
            { label: "Customer Name (for display)", id: "customerName" },
            { label: "Customer ID / Number", id: "customerNumber" },
        ],
        [
            { label: "Site Location", id: "location" },
            { label: "Country", id: "country" },
            { label: "Request Received Via", id: "requestVia" },
        ],
        [
            { label: "Reference Number", id: "referenceNumber" },
            { label: "Type of Goods", id: "goodType" },
            { label: "Deadline to Submit (YYYY-MM-DD)", id: "submitDate" },
        ],
        [
            { label: "Contact Name", id: "contactName" },
            { label: "Contact Email", id: "contactEmail" },
            { label: "Contact Phone Number", id: "contactPhone" },
        ],
    ];

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col rounded-none">
                <div className="flex flex-col px-20 pt-11 pb-32 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <div className="flex flex-col w-full max-w-[979px] max-md:max-w-full">
                        <div className="flex gap-5 mb-9 max-md:flex-col items-center">
                            {formFields[0].map((field) => (
                                <div key={field.id} className="flex flex-col w-[48%] max-md:w-full">
                                    <FormField
                                        label={field.label}
                                        id={field.id}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            {/* Add New Customer Button aligned in the same row */}
                            <button
                                type="button"
                                onClick={() => navigate("/sales/customers/add")}
                                className="flex gap-1.5 items-center text-base text-sky-950 w-[200px] ml-4"
                                aria-label="Add New Customer"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3624e78c8dd2ba88c42a4bada2454b24455bafa522e11a10ecc52df4f238ce10?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539"
                                    className="object-contain w-9 rounded-none"
                                    alt="Add Customer"
                                />
                                <span className="my-auto w-[141px]">Add New Customer</span>
                            </button>
                        </div>

                        {/* Other Fields */}
                        {formFields.slice(1).map((row, rowIndex) => (
                            <div key={rowIndex} className="flex gap-5 mb-9 max-md:flex-col">
                                {row.map((field) => (
                                    <div key={field.id} className="flex flex-col w-[32%] max-md:w-full">
                                        <FormField
                                            label={field.label}
                                            id={field.id}
                                            value={formData[field.id]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex flex-col justify-center items-center self-center px-5 py-3 mt-20 text-l leading-none text-white bg-blue-700 rounded-xl min-h-[20px] w-[220px] max-md:mt-10"
                        >
                            Add to list
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
