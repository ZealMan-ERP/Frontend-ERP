import React from "react";
import FilterSection from "./Filters";
import InventoryTable from "./InventoryTable";
import NextButton from "./NextButton";
import { useLocation } from "react-router-dom";

function Inventory() {
    const location = useLocation();
    const data = location.state?.data;

    return (
        <div className="flex overflow-hidden flex-wrap gap-6 mb-10 bg-slate-50">
            {/* <Sidebar /> */}
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                {/* <Header /> */}
                <div className="flex flex-col items-center py- w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:max-w-full">
                    <FilterSection dataToFill={data} />
                    <InventoryTable />
                    <NextButton />
                </div>
            </div>
        </div>
    );
}
export default Inventory;