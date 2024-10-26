import React from "react";
import Hogs from "./Hogs";

function HogsList({ hogsData }) {


    return (
        <div className="ui cards">
            {hogsData.map((hog) => (
                <Hogs key={hog.name} {...hog} highestMedal={hog["highest medal achieved"]}/>
            ))}
            
        </div>
    )
}

export default HogsList;