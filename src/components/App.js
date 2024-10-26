import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsList from "./HogsList";
import HogFilter from "./HogFilter";
import HogSort from "./HogSort";

function App() {

	const [hogsData, setHogsData] = useState(hogs);
	const [greasedOnly, setGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("name");

	const filteredHogs = greasedOnly ? hogsData.filter(hog => hog.greased) : hogsData;

	const sortedHogs = [...filteredHogs].sort((a, b) => {
		if (sortBy === "name") {
			return a.name.localeCompare(b.name);
		} else if (sortBy === "weight") {
			return a.weight - b.weight;
		}
		return 0;
	})

	return (
		<div className="App">
			<Nav />
			<HogSort sortBy={sortBy} onSortChange={setSortBy}/>
			<HogFilter greasedOnly={greasedOnly} onClickGreased={() => setGreasedOnly(!greasedOnly)}/>
			<HogsList hogsData={sortedHogs}/>
		</div>
	);
}

export default App;
