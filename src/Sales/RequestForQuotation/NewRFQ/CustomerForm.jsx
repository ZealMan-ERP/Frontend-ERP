import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

    const [customers, setCustomers] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const navigate = useNavigate();
    const suggestionsRef = useRef(null); // Reference for the suggestions dropdown

    // Fetch customers and sort alphabetically by name
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch(`${API_ENDPOINTS.customer.viewAllCustomers}`);
                const contentType = response.headers.get("Content-Type");

                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error(`Expected JSON, but got ${contentType}`);
                }

                const data = await response.json();
                const sortedData = data.sort((a, b) =>
                    a.customerName.localeCompare(b.customerName)
                );
                setCustomers(sortedData);
            } catch (err) {
                console.error("Failed to fetch customers", err);
                alert("Error fetching customers.");
            }
        };

        fetchCustomers();
    }, []);

    // Handle autofilling customer ID based on customer name
    useEffect(() => {
        if (formData.customerName && !formData.customerNumber) {
            const match = customers.find(
                (c) => c.customerName.toLowerCase() === formData.customerName.toLowerCase()
            );
            if (match) {
                setFormData((prev) => ({
                    ...prev,
                    customerNumber: match.customerid.toString(),
                }));
            }
        }
    }, [formData.customerName, customers]);

    // Handle autofilling customer name based on customer number
    useEffect(() => {
        if (formData.customerNumber && !formData.customerName) {
            const match = customers.find(
                (c) => c.customerid.toString() === formData.customerNumber
            );
            if (match) {
                setFormData((prev) => ({ ...prev, customerName: match.customerName }));
            }
        }
    }, [formData.customerNumber, customers]);

    // Handle changes in input fields
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

        if (id === "customerName") {
            const suggestions = customers.filter((c) =>
                c.customerName.toLowerCase().startsWith(value.toLowerCase())
            );
            setFilteredSuggestions(suggestions);
            setShowSuggestions(true);
        }
    };

    // Handle selection from the suggestion list
    const handleSuggestionClick = (name, id) => {
        setFormData((prev) => ({
            ...prev,
            customerName: name,
            customerNumber: id.toString(),
        }));
        setShowSuggestions(false);
    };

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        // Attach event listener for clicks outside the dropdown
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
            {
                label: "Deadline to Submit",
                id: "submitDate",
                type: "date",
                placeholder: "dd-mm-yyyy",
            },
        ],
        [
            { label: "Contact Name", id: "contactName" },
            { label: "Contact Email", id: "contactEmail" },
            { label: "Contact Phone Number", id: "contactPhone" },
        ],
    ];

    return (
        <form onSubmit={handleSubmit} className="flex flex-col rounded-none relative">
            <div className="flex flex-col px-20 pt-11 pb-32 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-col w-full max-w-[979px] max-md:max-w-full">
                    <div className="flex gap-5 mb-9 max-md:flex-col items-center relative">
                        {formFields[0].map((field) => (
                            <div key={field.id} className="flex flex-col w-[48%] max-md:w-full relative">
                                <FormField
                                    label={field.label}
                                    id={field.id}
                                    value={formData[field.id]}
                                    onChange={handleChange}
                                    type={field.type || "text"}
                                    placeholder={field.placeholder || ""}
                                />
                                {field.id === "customerName" && showSuggestions && filteredSuggestions.length > 0 && (
                                    <ul
                                        ref={suggestionsRef}
                                        className="absolute z-10 bg-white border border-gray-300 rounded shadow mt-1 max-h-40 overflow-y-auto w-full"
                                    >
                                        {filteredSuggestions.map((s, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSuggestionClick(s.customerName, s.customerid)}
                                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                            >
                                                {s.customerName}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
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

                    {formFields.slice(1).map((row, rowIndex) => (
                        <div key={rowIndex} className="flex gap-5 mb-9 max-md:flex-col">
                            {row.map((field) => (
                                <div key={field.id} className="flex flex-col w-[32%] max-md:w-full">
                                    <FormField
                                        label={field.label}
                                        id={field.id}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                        type={field.type || "text"}
                                        placeholder={field.placeholder || ""}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="flex flex-col justify-center items-center self-center px-5 py-3 mt-20 text-l leading-none text-white bg-blue-700 rounded-xl min-h-[20px] w-[220px] max-md:mt-10"
                    >
                        Add to list
                    </button>
                </div>
            </div>
        </form>
    );
}
