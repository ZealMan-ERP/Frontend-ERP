import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import CustomTable from "../../components/CustomTable";
import { HEADER_ITEMS } from "../../constants/tableHeader";
import { fetchPendingWorkOrders } from "../../utils/apiServices";
import CenteredLoader from "../../components/LottiLoader";

function PendingWOsTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchPendingWorkOrders();
      setTableData(data);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col w-full max-md:max-w-full min-h-[500px] bg-white p-4 overflow-auto">
      <FilterSection />
      <div className="w-full overflow-x-auto">
        {loading ? (
          <CenteredLoader />
        ) : (
          <CustomTable
            headers={HEADER_ITEMS.pendingPo}
            data={tableData}
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
