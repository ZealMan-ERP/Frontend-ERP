import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function RFQ() {
    const location = useLocation();

    const isActiveTab = (tab) => location.pathname.includes(tab);

    return (
        <div className="mt-3 min-h-screen">
            {/* Navigation Buttons */}
            <div className="flex gap-4">
                <NavLink
                    to="new"
                    className={`px-4 py-2 font-medium rounded ${isActiveTab("new")
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-700"
                        }`}
                >
                    New RFQ
                </NavLink>

                <NavLink
                    to="pending"
                    className={`px-4 py-2 font-medium rounded ${isActiveTab("pending")
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-700"
                        }`}
                >
                    Pending RFQ
                </NavLink>

                <NavLink
                    to="view-all"
                    className={`px-4 py-2 font-medium rounded ${isActiveTab("view-all")
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-700"
                        }`}
                >
                    View All RFQs
                </NavLink>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded shadow m-0">
                <Outlet />
            </div>
        </div>
    );
}

export default RFQ;
