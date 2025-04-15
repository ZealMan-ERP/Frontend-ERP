import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function Customer() {
    const navigate = useNavigate();
    const location = useLocation();

    const currentTab = location.pathname.includes("add") ? "add" : "view";

    return (
        <div className="min-h-screen">
            <div className="flex gap-4">
                <button
                    className={`px-4 py-2 font-medium rounded ${currentTab === "view"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => navigate("view-all")}
                >
                    View Customers
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${currentTab === "add"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => navigate("add")}
                >
                    Add Customer
                </button>
            </div>
            <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default Customer;
