/* eslint-disable no-unused-expressions */
import React from "react";
import {useDispatch} from "react-redux";
import {addTotal, subtractTotal} from "../store/balance";
import {checked, unchecked} from "../store/rows";

export default function Row({debt}) {
	const dispatch = useDispatch();
	return (
		<>
			<tr>
				<td className="checkbox">
					<input
						type="checkbox"
						className="checkbox-row"
						value={debt.id}
						//if checked, add to total balance and checked rows
						//else subtract from total balance and checked rows
						onChange={e => {
							e.target.checked
								? dispatch(checked()) & dispatch(addTotal(debt.balance))
								: dispatch(unchecked()) & dispatch(subtractTotal(debt.balance));
						}}
					/>
				</td>
				<td>{debt.creditorName}</td>
				<td>{debt.firstName}</td>
				<td>{debt.lastName}</td>
				<td className="num">{debt.minPaymentPercentage.toFixed(2)}%</td>
				<td className="num">{debt.balance.toFixed(2)}</td>
			</tr>
		</>
	);
}
