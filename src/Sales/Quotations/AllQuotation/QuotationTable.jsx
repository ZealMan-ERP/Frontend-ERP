import React, { useEffect, useState } from "react";
import FilterSection from "../../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";
import CenteredLoader from "../../../components/LottiLoader";
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
        const response = await fetch(API_ENDPOINTS.quotations.viewAllQuotations);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const formattedQuotations =
          data.quotations?.map((q) => {
            const formattedDeliveryDate = q.deliveryDate
              ? new Date(q.deliveryDate).toLocaleDateString()
              : "";

            let adminApproval = "Hold";
            if (q.AdminApproved === 1) adminApproval = "Approved";
            else if (q.AdminApproved === 0) adminApproval = "Rejected";

            let itemDetails = [];
            try {
              itemDetails = JSON.parse(q.itemDetails);
            } catch (err) {
              console.warn("Invalid itemDetails JSON:", err);
            }

            return {
              quotationid: q.quotationid?.toString() || "",
              customerid: q.customerid?.toString() || "",
              name: q.name || "",
              emailAddress: q.emailAddress || "",
              phoneNumber: q.phoneNumber || "",
              deliveryDate: formattedDeliveryDate,
              AdminApproved: adminApproval,
            };
          }) || [];

        setTableData(formattedQuotations);
        setFilteredData(formattedQuotations);
      } catch (error) {
        console.error("Error fetching quotations:", error);
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
    <div className="flex flex-col min-h-screen bg-white w-full max-md:max-w-full overflow-auto">
      <FilterSection onFilter={handleFilter} />
      <div className="w-full overflow-x-auto">
        {loading ? (
          <CenteredLoader />
        ) : (
          <CustomTable
            headers={HEADER_ITEMS.quotations}
            data={filteredData}
            headerValue={{
              "Admin Approved": {
                approved: "#22c55e", // green
                rejected: "#ff7316", // orange
                hold: "#eab308",     // yellow
              },
            }}
            isAction={true}
            onEdit={() => { }}
          />
        )}
      </div>
    </div>
  );
}

export default QuotationTable;
