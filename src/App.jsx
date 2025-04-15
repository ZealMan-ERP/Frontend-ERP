import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";


// Main Roles
import Admin from "./Admin/Admin";
import Login from "./Login";
import ProjectEngineer from "./Project_Engineer/ProjectEngineer";
import ProjectManager from "./Project_Manager/ProjectManager";
import Store from "./Store/Store";

// Sales Layout
import SalesLayout from "./Sales/Sales";

// Sales - Work Orders
import PendingWorkOrders from "./Sales/PendingWorkOrders/PendingWOsPage";

// Sales - RFQ
import RequestForQuotation from "./Sales/RequestForQuotation/RFQ";
import NewRFQ from "./Sales/RequestForQuotation/NewRFQ/CustomerForm";
import PendingRFQ from "./Sales/RequestForQuotation/PendingRFQ/PendingRFQPage";
import ViewAllRFQ from "./Sales/RequestForQuotation/ViewAllRFQ/ViewAllRFQPage";

// Sales - Customers
import Customer from "./Sales/Customers/Customer";
import AddCustomer from "./Sales/Customers/AddCustomer/CustomerForm";
import ViewAllCustomer from "./Sales/Customers/ViewCustomer/CustomerTable";

// Sales - Quotations
import Quotations from "./Sales/Quotations/Quotations";
import CreateQuotation from "./Sales/Quotations/CreateQuotation/Inventory";
import ViewAllQuotation from "./Sales/Quotations/AllQuotation/QuotationTable";
import ApprovedQuotation from "./Sales/Quotations/ApprovedQuotation/QuotationTable";
import RejectedQuotation from "./Sales/Quotations/RejectQuotation/QuotationTable";

// Sales - Add PO Inward + its nested tabs
import AddPOInward from "./Sales/AddPOInward/AddPOInward3";
import AddPO from "./Sales/AddPOInward/AddPOInward1/Inventory";
import WorkOrders from "./Sales/AddPOInward/WO/Inventory";
import BillOfMaterials from "./Sales/AddPOInward/BOM/Inventory";
import ProductionSlip from "./Sales/AddPOInward/PS/Inventory";

// Sales - Project Status
import ProjectStatus from "./Sales/ProjectStatus/ProjectStatus";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/project-engineer" element={<ProjectEngineer />} />
        <Route path="/project-manager" element={<ProjectManager />} />
        <Route path="/store" element={<Store />} />

        {/* NESTED SALES ROUTES */}
        <Route path="/sales" element={<SalesLayout />}>
          <Route index element={<PendingWorkOrders />} />
          <Route path="pending-work-orders" element={<PendingWorkOrders />} />
          import {Navigate} from "react-router-dom";

          <Route path="request-for-quotations" element={<RequestForQuotation />}>
            <Route index element={<Navigate to="new" replace />} />
            <Route path="new" element={<NewRFQ />} />
            <Route path="pending" element={<PendingRFQ />} />
            <Route path="view-all" element={<ViewAllRFQ />} />
          </Route>


          <Route path="customers" element={<Customer />}>
            <Route index element={<Navigate to="view-all" replace />} />
            <Route path="add" element={<AddCustomer />} />
            <Route path="view-all" element={<ViewAllCustomer />} />
          </Route>

          <Route path="quotations" element={<Quotations />}>
            <Route index element={<Navigate to="view-all" replace />} />
            <Route path="create" element={<CreateQuotation />} />
            <Route path="view-all" element={<ViewAllQuotation />} />
            <Route path="approved" element={<ApprovedQuotation />} />
            <Route path="rejected" element={<RejectedQuotation />} />
          </Route>

          <Route path="add-po-inward" element={<AddPOInward />}>
            <Route path="addpo" element={<AddPO />} />
            <Route path="work-orders" element={<WorkOrders />} />
            <Route path="bill-of-materials" element={<BillOfMaterials />} />
            <Route path="production-slip" element={<ProductionSlip />} />
            <Route index element={<AddPO />} />
          </Route>

          <Route path="project-status" element={<ProjectStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
