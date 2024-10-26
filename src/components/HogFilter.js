import React from "react";

function HogFilter({ onClickGreased, greasedOnly }) {
    return (
        <div>
            <label>
                <input 
                    type="checkbox"
                    checked={greasedOnly}
                    onChange={onClickGreased}
                    />
                Show Greased Only
            </label>
        </div>
    )
}

export default HogFilter;