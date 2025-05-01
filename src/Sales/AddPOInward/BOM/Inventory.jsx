import React, { useState } from "react";

const Inventory = () => {
  const [documents, setDocuments] = useState([]);

  const [collectionInput, setCollectionInput] = useState({
    designation: "",
    partNumber: "",
    qty: "",
    unit: "",
    typeOfPart: "",
  });

  const [collectionList, setCollectionList] = useState([]);

  // Handle document selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    selectedFiles.forEach((file) => {
      // Check if the file is a PDF or image
      if (file.type === "application/pdf" || file.type.startsWith("image/")) {
        setDocuments((prev) => [...prev, { file: file.name, view: false }]);
      }
    });
  };

  const handleCollectionChange = (e) => {
    const { name, value } = e.target;
    setCollectionInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCollection = () => {
    const { designation, partNumber, qty, unit, typeOfPart } = collectionInput;

    if (!designation || !partNumber || !qty || !unit || !typeOfPart) return;

    setCollectionList((prev) => [...prev, collectionInput]);
    setCollectionInput({
      designation: "",
      partNumber: "",
      qty: "",
      unit: "",
      typeOfPart: "",
    });
  };

  const handleDeleteCollection = (index) => {
    setCollectionList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteDocument = (index) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 bg-white">
      <h2 className="text-sm text-gray-600 font-medium">
        1) Box Assembly / 1.1) FOAM-1/
      </h2>

      {/* Add Collection */}
      <div className="space-y-4 border-t pt-4">
        <h3 className="text-sm font-semibold text-blue-700">Add Collection</h3>
        <div className="grid grid-cols-6 gap-4">
          <input
            name="designation"
            placeholder="Designation"
            value={collectionInput.designation}
            onChange={(e) => handleCollectionChange(e)}
            className="border rounded px-2 py-1 col-span-1"
          />
          <input
            name="partNumber"
            placeholder="Part Number"
            value={collectionInput.partNumber}
            onChange={(e) => handleCollectionChange(e)}
            className="border rounded px-2 py-1 col-span-1"
          />
          <input
            name="qty"
            placeholder="QTY"
            value={collectionInput.qty}
            onChange={(e) => handleCollectionChange(e)}
            className="border rounded px-2 py-1 col-span-1"
          />
          <input
            name="unit"
            placeholder="Unit"
            value={collectionInput.unit}
            onChange={(e) => handleCollectionChange(e)}
            className="border rounded px-2 py-1 col-span-1"
          />
          <input
            name="typeOfPart"
            placeholder="Type Of Part"
            value={collectionInput.typeOfPart}
            onChange={(e) => handleCollectionChange(e)}
            className="border rounded px-2 py-1 col-span-1"
          />
          <button
            onClick={handleAddCollection}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 col-span-1"
          >
            + Add Collection
          </button>
        </div>

        {/* Dynamic Table */}
        <table className="w-full text-sm mt-4 border">
          <thead className="bg-blue-100 text-left">
            <tr>
              <th className="px-2 py-2">Item No</th>
              <th className="px-2 py-2">Designation</th>
              <th className="px-2 py-2">Part No</th>
              <th className="px-2 py-2">QTY</th>
              <th className="px-2 py-2">Unit</th>
              <th className="px-2 py-2">Type Of Part</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {collectionList.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="px-2 py-1">{String(i + 1).padStart(4, "0")}</td>
                <td className="px-2 py-1">{item.designation}</td>
                <td className="px-2 py-1">{item.partNumber}</td>
                <td className="px-2 py-1">{item.qty}</td>
                <td className="px-2 py-1">{item.unit}</td>
                <td className="px-2 py-1">{item.typeOfPart}</td>
                <td className="px-2 py-1">
                  <button
                    onClick={() => handleDeleteCollection(i)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Documents */}
      <div className="border-t pt-4 space-y-4">
        <h3 className="text-sm font-semibold text-blue-700">Add Documents</h3>
        <div className="flex items-center justify-between bg-blue-100 text-sm px-4 py-2 rounded">
          <input
            type="file"
            accept=".pdf,image/*"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="bg-blue-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-700"
          >
            + Add Document
          </label>
        </div>

        {/* Files List */}
        {documents.map((doc, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-4 py-2 border rounded"
          >
            <span>{doc.file}</span>
            <div className="flex items-center gap-3">
              <button
                className="text-red-500 hover:text-red-700 text-lg"
                onClick={() => handleDeleteDocument(i)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Previous
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default Inventory;
