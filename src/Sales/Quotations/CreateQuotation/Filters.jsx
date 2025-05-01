import React, { useState, useEffect } from "react";

function Filters({ dataToFill }) {
    const [customerName, setCustomerName] = useState("");
    const [customerNumber, setCustomerNumber] = useState("");
    const [contactName, setContactName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [rfqReference, setRfqReference] = useState("");
    const [rfqDate, setRfqDate] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [partNumber, setPartNumber] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unitRate, setUnitRate] = useState("");

    useEffect(() => {
        if (dataToFill) {
            setCustomerName(dataToFill?.customer_name || "");
            setCustomerNumber(dataToFill?.customer_number || "");
            setContactName(dataToFill?.contactPerson || "");
            setEmailAddress(dataToFill?.contactPersonEmail || "");
            setPhoneNumber(dataToFill?.contactPersonNumber || "");
            setRfqReference(dataToFill?.requestReferenceNumber || "");
            if (dataToFill.lastDateToSubmit) {
                const [day, month, year] = dataToFill.lastDateToSubmit.split("/");
                const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                setRfqDate(formattedDate);
                console.log("formatted date", rfqDate);
            } else {
                setRfqDate("");
            }

        }
    }, [dataToFill]);

    return (
        <div className="w-full text-sm">
            {/* Select Customer Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Select Customer
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="customerName" className="text-gray-700">
                        Customer Name
                    </label>
                    <input
                        id="customerName"
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="customerNumber" className="text-gray-700">
                        Customer Number
                    </label>
                    <input
                        id="customerNumber"
                        type="text"
                        value={customerNumber}
                        onChange={(e) => setCustomerNumber(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex items-center">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
                        <span className="text-lg">+</span> Add New Customer
                    </button>
                </div>
            </div>

            {/* Contact Person Details Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Contact Person Details
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="contactName" className="text-gray-700">
                        Name
                    </label>
                    <input
                        id="contactName"
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="emailAddress" className="text-gray-700">
                        Email Address
                    </label>
                    <input
                        id="emailAddress"
                        type="email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="phoneNumber" className="text-gray-700">
                        Phone Number
                    </label>
                    <input
                        id="phoneNumber"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Enquiry Details Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Enquiry Details
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="rfqReference" className="text-gray-700">
                        RFQ Reference Number
                    </label>
                    <input
                        id="rfqReference"
                        type="text"
                        value={rfqReference}
                        onChange={(e) => setRfqReference(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="rfqDate" className="text-gray-700">
                        RFQ Date
                    </label>
                    <input
                        id="rfqDate"
                        type="date"
                        value={rfqDate}
                        onChange={(e) => {
                            setRfqDate(() => e.target.value)
                            console.log("changed date", e.target.value)
                        }}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Item Details Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Item Details
            </div>
            <div className="p-4">
                <label htmlFor="itemDescription" className="text-gray-700">
                    Item Description
                </label>
                <textarea
                    id="itemDescription"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-24"
                ></textarea>
            </div>

            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label htmlFor="partNumber" className="text-gray-700">
                        Part#
                    </label>
                    <input
                        id="partNumber"
                        type="text"
                        value={partNumber}
                        onChange={(e) => setPartNumber(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label htmlFor="quantity" className="text-gray-700">
                        Qty Nos
                    </label>
                    <input
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label htmlFor="unitRate" className="text-gray-700">
                        Unit Rate In INR
                    </label>
                    <input
                        id="unitRate"
                        type="text"
                        value={unitRate}
                        onChange={(e) => setUnitRate(e.target.value)}
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            <div className="p-4 flex justify-end">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
                    Add to list
                </button>
            </div>
        </div>
    );
}

export default Filters;
