import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterSection from "../../components/FilterSection";
import CustomTable from "../../../components/CustomTable";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import { fetchPendingRFQs } from "../../../utils/apiServices";
import CenteredLoader from "../../../components/LottiLoader";
import { regexFilter } from "../../../utils/FilterFunction"; // 👈 import your utility

function PendingRFQTable() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleEdit = (rowData) => {
    const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
    console.log(rowData);
    // navigate to the create quotation page and also pass the row data
    navigate(`/sales/quotations/create`, {
      state: {
        data: rowData,
      },
      replace: true,
    });
  };
  

  useEffect(() => {
    const getRFQData = async () => {
      setLoading(true);
      const data = await fetchPendingRFQs();
      setTableData(data);
      setFilteredData(data);
      setLoading(false);
    };

    getRFQData();
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
          // onEdit will return the row data
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default PendingRFQTable;
