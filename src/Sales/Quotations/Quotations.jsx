import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

function Quotations() {
    const location = useLocation();
    const navigate = useNavigate();

    const getActiveTab = () => {
        if (location.pathname.includes("create")) return "create";
        if (location.pathname.includes("approved")) return "approved";
        if (location.pathname.includes("rejected")) return "rejected";
        return "view-all"; // default
    };

    const activeTab = getActiveTab();

    const handleTabClick = (path) => {
        navigate(path);
    };

    return (
        <div className="mt-4 min-h-screen">
            <div className="flex gap-4">
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "create"
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-700"
                        }`}
                    onClick={() => handleTabClick("create")}
                >
                    Create Quotation
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "view-all"
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-700"
                        }`}
                    onClick={() => handleTabClick("view-all")}
                >
                    View All Quotations
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "approved"
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-700"
                        }`}
                    onClick={() => handleTabClick("approved")}
                >
                    Approved Quotations
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "rejected"
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-700"
                        }`}
                    onClick={() => handleTabClick("rejected")}
                >
                    Rejected Quotations
                </button>
            </div>

            {/* Child route content will render here */}
            <div className="bg-white p-4 rounded shadow">
                <Outlet />
            </div>
        </div>
    );
}

export default Quotations;
