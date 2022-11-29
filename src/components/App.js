import React, {useState} from "react";
import Nav from "./Nav";
import OtherDetails from "./OtherDetails";
import Filter from "./Filter";
import Sort from "./Sort";

import hogs from "../porkers_data";
import { render } from "@testing-library/react";

function App() {
	const [details, setDetails] = useState(false);
	const renderHogs = hogs.map((hog) => {
		return (
		<div onClick={() => setDetails((details) => !details)}>
		<h2>{hog.name}</h2>
		<img src={hog.image}/>
		{details ? <OtherDetails hog={hog}/> : null}
		</div>
		)
	})
	
	
	return (
		<div className="App">
			<Nav />
			{renderHogs}
		</div>
	);
}

export default App;
