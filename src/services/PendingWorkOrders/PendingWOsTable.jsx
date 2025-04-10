import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import CustomTable from "../../components/CustomTable";
import { HEADER_ITEMS } from "../../constants/tableHeader";
import { fetchPendingWorkOrders } from "../../utils/apiServices";
import CenteredLoader from "../../components/LottiLoader";
import { regexFilter } from "../../utils/FilterFunction";

function PendingWOsTable() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchPendingWorkOrders();
      setTableData(data);
      setFilteredData(data);
      setLoading(false);
    };

    getData();
  }, []);

  const handleFilter = (query) => {
    const filtered = regexFilter(tableData, query);
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col w-full max-md:max-w-full min-h-[500px] bg-white p-4 overflow-auto">
      <FilterSection onFilter={handleFilter} />
      <div className="w-full overflow-x-auto">
        {loading ? (
          <CenteredLoader />
        ) : (
          <CustomTable
            headers={HEADER_ITEMS.pendingPo}
            data={filteredData}
            headerValue={{
              Status: {
                delivered: "#22c55e", // green
                pending: "#f97316", // orange
                hold: "#eab308", // yellow
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

export default PendingWOsTable;
