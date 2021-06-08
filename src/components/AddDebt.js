import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {newDebt} from "../store/debts";

export default function AddDebt({close}) {
	const dispatch = useDispatch();
	const [creditorName, setCreditorName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [minPaymentPercentage, setMinPayPerc] = useState(0);
	const [balance, setBalance] = useState(0);

	function handleChange(setFunc) {
		return function (e) {
			setFunc(e.target.value);
		};
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(
			newDebt({
				creditorName,
				firstName,
				lastName,
				minPaymentPercentage: +minPaymentPercentage,
				balance: +balance,
			})
		);
		close();
	}

	return (
		<form onSubmit={handleSubmit} className="debt-form">
			<label htmlFor="creditorName">Creditor</label>
			<input
				type="text"
				name="creditorName"
				onChange={handleChange(setCreditorName)}
				value={creditorName}
			></input>
			<label htmlFor="firstName">First Name</label>
			<input
				type="text"
				name="firstName"
				onChange={handleChange(setFirstName)}
				value={firstName}
			></input>
			<label htmlFor="lastName">Last Name</label>
			<input
				type="text"
				name="lastName"
				onChange={handleChange(setLastName)}
				value={lastName}
			></input>
			<label htmlFor="minPaymentPercentage">Minimum Pay Percentage</label>
			<input
				type="number"
				name="minPaymentPercentage"
				onChange={handleChange(setMinPayPerc)}
				value={minPaymentPercentage}
			></input>
			<label htmlFor="balance">Balance</label>
			<input
				type="number"
				name="balance"
				onChange={handleChange(setBalance)}
				value={balance}
			></input>
			<button type="submit">Add New Debt</button>
		</form>
	);
}
