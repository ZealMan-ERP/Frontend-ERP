import React, { useEffect, useState } from "react";
import FilterSection from "../../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";
import CustomTable from "../../../components/CustomTable";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import CenteredLoader from "../../../components/LottiLoader";
import { regexFilter } from "../../../utils/FilterFunction";
import { useNavigate } from "react-router-dom";
import { handleEdit } from "@/utils/helperFunction";
function ViewAllRFQTable() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.rfq.viewAllRFQ);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);

        if (Array.isArray(data)) {
          const formattedData = data.map((rfq) => {
            const formattedCreatedAt = rfq.created_at
              ? new Date(rfq.created_at).toLocaleDateString()
              : "";
            const formattedLastDate = rfq.lastDateToSubmit
              ? new Date(rfq.lastDateToSubmit).toLocaleDateString()
              : "";

            let statusText = "Pending";
            if (rfq.status === 0) statusText = "Rejected";
            else if (rfq.status === 1) statusText = "Quoted";

            return {
              rfqid: rfq.rfqid?.toString() || "",
              customer_name: rfq.customer_name || "",
              location: rfq.location || "",
              created_at: formattedCreatedAt,
              typeOfGoods: rfq.typeOfGoods || "",
              requestVia: rfq.requestVia || "",
              lastDateToSubmit: formattedLastDate,
              requestReferenceNumber: rfq.requestReferenceNumber || "",
              contactPerson: rfq.contactPerson || "",
              contactPersonEmail: rfq.contactPersonEmail || "",
              contactPersonNumber: rfq.contactPersonNumber || "",
              status: statusText,
              action: null,
            };
          });

          setTableData(formattedData);
          setFilteredData(formattedData);
        } else {
          setTableData([]);
          setFilteredData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTableData([]);
        setFilteredData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (query) => {
    const filtered = regexFilter(tableData, query);
    setFilteredData(filtered);
  };


  return (
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
      <FilterSection onFilter={handleFilter} />
      {loading ? (
        <CenteredLoader />
      ) : (
        <CustomTable
          headers={HEADER_ITEMS.rfqs}
          data={filteredData}
          headerValue={{
            Status: {
              quoted: "#22c55e",
              pending: "#eab308",
              rejected: "#ff7316",
            },
          }}
          isAction={true}
            onEdit={(rowData) => handleEdit(rowData, "/sales/quotations/create",navigate)}
        />
      )}
    </div>
  );
}

export default ViewAllRFQTable;
