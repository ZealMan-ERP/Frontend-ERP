import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../components/FilterSection";
import API_ENDPOINTS from "../../constants/apiEndPoints";
import { HEADER_ITEMS } from "@/constants/tableHeader";
import CustomTable from "@/components/CustomTable";
import { regexFilter } from "@/utils/FilterFunction";

function ProjectStatusTable() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = API_ENDPOINTS.poInwards.customerAcceptance;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const formattedQuotations = data.customerAcceptance?.map((q) => {
          const formattedSlipDate = q.slip_date
            ? new Date(q.slip_date).toLocaleDateString()
            : "";

          let acceptanceStatus = "Hold";
          if (q.customer_acceptance_status === 1) {
            acceptanceStatus = "Accepted";
          } else if (q.customer_acceptance_status === 0) {
            acceptanceStatus = "Rejected";
          }

          return {
            workordernumber: q.workordernumber?.toString() || "",
            customername: q.customer || "",
            customer_acceptance_status: acceptanceStatus,
            reason_for_rejection: q.reason_for_rejection ?? "N/A",
            slip_date: formattedSlipDate,
            slip_number: q.slip_number?.toString() || "",
            special_instruction: q.special_instruction || "",
          };
        }) || [];

        setTableData(formattedQuotations);
        setFilteredData(formattedQuotations);
      } catch (error) {
        console.error("Error fetching table data:", error);
        setTableData([]);
        setFilteredData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  const handleFilter = (query) => {
    const filtered = regexFilter(tableData, query);
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="pb-[24px]">
        <FilterSection className="my-[24px] mb-[24px]" onFilter={handleFilter} />

        {loading ? (
          <div className="text-center text-gray-500 p-4">Loading...</div>
        ) : filteredData.length > 0 ? (
          <CustomTable
            headers={HEADER_ITEMS.acceptanceStatus}
            data={filteredData}
            headerValue={{
              "Customer Acceptance Status": {
                accepted: "#22c55e", // green
                rejected: "#ff7316", // orange
                hold: "#eab308",     // yellow
              },
            }}
            isAction={true}
            onEdit={() => { }}
          />
        ) : (
          <div className="text-center text-gray-500 p-4">No data available.</div>
        )}
      </div>
    </div>
  );
}

export default ProjectStatusTable;
