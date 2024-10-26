import React, { useState } from "react";

function Hogs({ name, image, weight, greased, specialty, highestMedal }) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="ui card" onClick={() => setShowDetails(!showDetails)}>
            <p>{name}</p>
            <img src={image} alt="This is a hog"></img>
            {showDetails && (
                <div>
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    {greased && <p>Greased: True</p>}
                    {!greased && <p>Greased: False</p>}
                    <p>Highest Medal Achieved: {highestMedal}</p>
                </div>
            )}
        </div>
    )
}

export default Hogs;