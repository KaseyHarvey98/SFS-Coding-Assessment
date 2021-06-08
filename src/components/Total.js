import React from "react";
import {useSelector} from "react-redux";

export default function Total() {
	const debts = useSelector(state => state.debts);
	const selectedRows = useSelector(state => state.rows);
	const totalBalance = useSelector(state => state.balance);

	return (
		<>
			<div className="total-row">
				<h4 className="total">Total: </h4>
				<h4 className="total-balance">${totalBalance.toFixed(2)}</h4>
			</div>
			<div className="row-info">
				<h4>Total Row Count: {debts.length}</h4>
				<h4>Check Row Count: {selectedRows}</h4>
			</div>
		</>
	);
}
