import React, { useEffect, useState } from "react";
import FilterSection from "../../../components/FilterSection";
import CustomTable from "../../../components/CustomTable";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import { fetchAllCustomers } from "../../../utils/apiServices";
import CenteredLoader from "../../../components/LottiLoader";
import { regexFilter } from "../../../utils/FilterFunction"; // ✅

function ViewAllCustomersTable() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchAllCustomers();
      setTableData(data);
      setFilteredData(data); // ✅ init filtered data
      setLoading(false);
    };

    getData();
  }, []);

  const handleFilter = (query) => {
    const filtered = regexFilter(tableData, query);
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col w-full max-md:max-w-full bg-white p-4 overflow-auto">
      <FilterSection onFilter={handleFilter} />

      {loading ? (
        <CenteredLoader />
      ) : (
        <CustomTable
          headers={HEADER_ITEMS.customers}
          data={filteredData} // ✅ filtered view
          isAction={false}
        />
      )}
    </div>
  );
}

export default ViewAllCustomersTable;
