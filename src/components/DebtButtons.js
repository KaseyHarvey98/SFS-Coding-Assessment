import {useDispatch} from "react-redux";
import {updateTotal} from "../store/balance";
import {removeDebt} from "../store/debts";
import {selectAll} from "../store/rows";

export default function DebtButton({open}) {
	const dispatch = useDispatch();
	function handleRemove() {
		const totalCheckboxes = Array.from(
			document.getElementsByClassName("checkbox-row")
		).filter(checkbox => checkbox.checked);
		const arrOfIds = totalCheckboxes.map(checkbox => +checkbox.value);
		dispatch(removeDebt(arrOfIds));
		//update total after removed
		dispatch(updateTotal(0));
		dispatch(selectAll(0));
	}
	return (
		<>
			<div className="buttons">
				<button type="button" className="addDebt" onClick={open}>
					Add Debt
				</button>
				<button type="button" className="removeDebt" onClick={handleRemove}>
					Remove Debt
				</button>
			</div>
		</>
	);
}
