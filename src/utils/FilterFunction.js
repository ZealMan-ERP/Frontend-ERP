export function regexFilter(dataArray, query) {
    if (!query) return dataArray; // If no search input, return all

    try {
        const regex = new RegExp(query, "i"); // case-insensitive regex
        return dataArray.filter((item) =>
            Object.values(item).some((value) =>
                regex.test(String(value))
            )
        );
    } catch (error) {
        console.error("Invalid regex:", error.message);
        return dataArray;
    }
}
