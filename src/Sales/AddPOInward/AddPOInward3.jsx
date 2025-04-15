import React from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";

function AddPOInward3() {
    const location = useLocation();
    const navigate = useNavigate();

    const tabs = [
        { label: "Add PO Inward", path: "addpo" },
        { label: "Work Orders", path: "work-orders" },
        { label: "Bill Of Materials", path: "bill-of-materials" },
        { label: "Production Slip", path: "production-slip" },
    ];

    return (
        <div className="p-4 mt-4 min-h-screen">
            {/* Tab Buttons */}
            <div className="flex gap-4 mb-4">
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        className={({ isActive }) =>
                            `px-4 py-2 font-medium rounded ${isActive
                                ? "border-b-4 border-blue-500 text-blue-500"
                                : "text-gray-700"
                            }`
                        }
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white p-4 rounded shadow">
                <Outlet />
            </div>
        </div>
    );
}

export default AddPOInward3;
