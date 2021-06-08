import "./App.css";
import {useState} from "react";
import Table from "./components/Table";
import Total from "./components/Total";
import DebtButtons from "./components/DebtButtons";
import AddDebt from "./components/AddDebt";

function App() {
	const [popUp, setPopUp] = useState(false);
	// made functions b/c would loop infinitely otherwise
	const open = () => {
		setPopUp(true);
	};
	const close = () => {
		setPopUp(false);
	};
	return (
		<div className="App">
			<Table />
			{popUp ? <AddDebt close={close} /> : null}
			<DebtButtons open={open} />
			<Total />
		</div>
	);
}

export default App;
