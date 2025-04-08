import React from "react";
import Header from "./Header";
import FilterSection from "./Filters";
import SearchBar from "./SearchBar";
import InventoryTable from "./InventoryTable";

function Inventory() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-6 mb-10 bg-slate-50">
            {/* <Sidebar /> */}
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                {/* <Header /> */}
                <div className="flex flex-col items-center px-4 py- w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:max-w-full">
                    <FilterSection />
                    <SearchBar />
                    <InventoryTable />
                </div>
            </div>
        </div>
    );
}

export default Inventory;