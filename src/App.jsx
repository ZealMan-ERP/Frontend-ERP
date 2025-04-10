import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import Login from "./Login";
import ProjectEngineer from "./Project_Engineer/ProjectEngineer";
import ProjectManager from "./Project_Manager/ProjectManager";
import Store from "./Store/Store";

import SalesLayout from "./Sales/Sales"; // NEW LAYOUT
import PendingWorkOrders from "./Sales/PendingWorkOrders/PendingWOsPage";
import RequestForQuotation from "./Sales/RequestForQuotation/RFQ";
import Customer from "./Sales/Customers/Customer";
import Quotations from "./Sales/Quotations/Quotations";
import AddPOInward from "./Sales/AddPOInward/AddPOInward3";
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
          <Route path="request-for-quotations" element={<RequestForQuotation />} />
          <Route path="customers" element={<Customer />} />
          <Route path="quotations" element={<Quotations />} />
          <Route path="add-po-inward" element={<AddPOInward />} />
          <Route path="project-status" element={<ProjectStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
