import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const TABS = {
  "Pending Work Orders": "pending-work-orders",
  "Request For Quotations": "request-for-quotations",
  "Customer's": "customers",
  "Quotation's": "quotations",
  "Add PO Inward": "add-po-inward",
  "Project Acceptance Status": "project-status",
};

function Sales() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (tabName) => {
    const route = TABS[tabName];
    if (route) {
      navigate(`/sales/${route}`);
    }
  };

  const currentPath = location.pathname.split("/")[2]; // e.g., 'quotations'
  const activeTab = Object.keys(TABS).find((key) => TABS[key] === currentPath) || "Pending Work Orders";

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar onTabChange={handleTabChange} activeTab={activeTab} />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Sales;
