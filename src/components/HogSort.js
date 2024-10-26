import React from "react";

function HogSort({ sortBy, onSortChange }) {
    return (
        <div>
            <label>Sort by: </label>
            <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default HogSort;