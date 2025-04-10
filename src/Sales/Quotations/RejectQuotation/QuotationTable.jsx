import React, { useEffect, useState } from "react";
import FilterSection from "../../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import CustomTable from "../../../components/CustomTable";
import { regexFilter } from "../../../utils/FilterFunction";

function QuotationTable() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await fetch(
          API_ENDPOINTS.quotations.rejectedQuotations
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const quotationsList = data.rejectedQuotation || [];

        if (Array.isArray(quotationsList)) {
          const formattedQuotations = quotationsList.map((q) => {
            const formattedDeliveryDate = q.deliveryDate
              ? new Date(q.deliveryDate).toLocaleDateString()
              : "";

            let adminApproval = "Hold";
            if (q.AdminApproved === 1) adminApproval = "Approved";
            else if (q.AdminApproved === 0) adminApproval = "Rejected";

            let itemDetails = [];
            try {
              itemDetails = JSON.parse(q.itemDetails);
            } catch (err) { }

            return {
              quotationid: q.quotationid?.toString() || "",
              customerid: q.customerid?.toString() || "",
              name: q.name || "",
              emailAddress: q.emailAddress || "",
              phoneNumber: q.phoneNumber || "",
              deliveryDate: formattedDeliveryDate,
              AdminApproved: adminApproval,
              itemDetails: itemDetails,
            };
          });

          setTableData(formattedQuotations);
          setFilteredData(formattedQuotations);
        } else {
          setTableData([]);
          setFilteredData([]);
        }
      } catch (error) {
        setTableData([]);
        setFilteredData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotations();
  }, []);

  const handleFilter = (query) => {
    const filtered = regexFilter(tableData, query);
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
      <FilterSection onFilter={handleFilter} />
      {loading ? (
        <p className="text-center text-gray-600 my-4">Loading data...</p>
      ) : (
        <CustomTable
          headers={HEADER_ITEMS.quotations}
          data={filteredData}
          headerValue={{
            "Admin Approved": {
              approved: "#22c55e",
              rejected: "#ff7316",
              hold: "#eab308",
            },
          }}
          isAction={true}
          onEdit={() => { }}
        />
      )}
    </div>
  );
}

export default QuotationTable;
