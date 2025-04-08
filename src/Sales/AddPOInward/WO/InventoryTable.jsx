import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/CustomTable";
import CenteredLoader from "../../../components/LottiLoader";
import { createPO } from "../../../utils/apiServices"; // make sure this exists
import { HEADER_ITEMS } from "../../../constants/tableHeader"; // ensure item_details is defined

function InventoryTable({ quotationId }) {
  const [loading, setLoading] = useState(true);
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await createPO(quotationId);
        if (response && response.item_details) {
          setItemDetails(response.item_details);
        }
      } catch (error) {
        console.error("Error fetching item details:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [quotationId]);

  return (
    <div className="flex flex-col w-full max-md:max-w-full min-h-[500px] bg-white p-4 overflow-auto">
      {loading ? (
        <CenteredLoader />
      ) : (
        <CustomTable
          headers={HEADER_ITEMS.item_details}
          data={itemDetails}
          isAction={false}
        />
      )}
    </div>
  );
}

export default InventoryTable;
