import * as React from "react";

function FilterSection({ onFilter }) {
  return (
    <div className="flex gap-9 my-[24px] text-base  rounded-none text-zinc-700">
      <form className="overflow-hidden flex-auto gap-1 self-stretch p-3 bg-white rounded border border-solid border-stone-300 min-w-[300px] max-w-[943px] w-full">
        <label htmlFor="searchInput" className="sr-only">
          Search Items
        </label>
        <input
          type="search"
          id="searchInput"
          placeholder="Search Items"
          className="w-full border-none outline-none bg-transparent"
          aria-label="Search Items"
        />
      </form>
      <button
        onClick={onFilter}
        className="object-contain shrink-0 my-auto aspect-square w-[35px] bg-transparent border-none"
        role="presentation"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a8d7e740dcdcd8d610f834cc55a13f5af9b2161438ec012ab1650673b48be6b?apiKey=4b67e31b94e242ca8da7bea04ad48539&"
          alt="Filter"
          className="w-full"
        />
      </button>
    </div>
  );
}

export default FilterSection;
