import API_ENDPOINTS from "../constants/apiEndPoints";

export const fetchPendingWorkOrders = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.poInwards.getPendingWorkOrders);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (Array.isArray(data.pendingPOs)) {
      const formattedData = data.pendingPOs.map((po) => {
        const projectEngineers = po.project_engineers
          ? JSON.parse(po.project_engineers).map((eng) => eng.name).join(", ")
          : "";

        const qualityEngineers = po.quality_engineers
          ? JSON.parse(po.quality_engineers).map((eng) => eng.name).join(", ")
          : "";

        const formattedDeliveryDate = po.delivery_date
          ? new Date(po.delivery_date).toDateString().slice(4)
          : "";

        const formattedPoDate = po.po_date
          ? new Date(po.po_date).toDateString().slice(4)
          : "";

        const convertedPO = Object.fromEntries(
          Object.entries({
            ...po,
            workordernumber: po.workordernumber?.toString() || "",
            project_engineers: projectEngineers,
            quality_engineers: qualityEngineers,
            delivery_date: formattedDeliveryDate,
            po_date: formattedPoDate,
          }).map(([key, value]) => [key, value !== null ? value.toString() : ""])
        );

        return convertedPO;
      });

      return formattedData;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchPendingRFQs = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.rfq.pendingRFQ);
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

      return formattedData;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching RFQs:", error);
    return [];
  }
};

export const fetchAllCustomers = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.customer.viewAllCustomers);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const formattedData = data.map((item) => ({
      id: item.customerid,
      name: item.customerName,
      address: `${item.addressLine1}, ${item.addressLine2}`,
      city: item.city,
      phone: item.phoneNumber,
      email: item.emailAddress,
    }));

    return formattedData;
  } catch (error) {
    console.error("Failed to fetch customers:", error);
  }
};

// ✅ New function to create a PO
export const createPO = async (poData) => {
  try {
    const response = await fetch(API_ENDPOINTS.poInwards.createPO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(poData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating PO:", error);
    throw error;
  }
};
