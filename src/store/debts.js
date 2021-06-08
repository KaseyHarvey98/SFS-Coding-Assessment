/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import {setError} from "./error";

//set an id since we dont have a db
let id = 11;

// Action types
const GET_DEBTS = "GET_DEBTS";
const ADD_A_DEBT = "ADD_A_DEBT";
const REMOVE_A_DEBT = " REMOVE_A_DEBT";

// Action creators
const getDebts = debts => ({
	type: GET_DEBTS,
	debts,
});
const addADebt = debt => ({
	type: ADD_A_DEBT,
	debt,
});
export const removeDebt = arrOfIds => ({
	type: REMOVE_A_DEBT,
	debts: arrOfIds,
});

//Thunk creators
export function fetchDebts() {
	return async dispatch => {
		try {
			const {data: debts} = await axios.get(
				"https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
			);
			dispatch(getDebts(debts));
		} catch (error) {
			dispatch(setError());
		}
	};
}

export function newDebt(debt) {
	return async dispatch => {
		try {
			// const {data: debts} = await axios.post("/api/newDebt");
			debt.id = id;
			id++;
			dispatch(addADebt(debt));
		} catch (error) {
			dispatch(setError());
		}
	};
}

// export function removeDebt(arrOfIds) {
// 	return async dispatch => {
// 		try {
// 			// const {data: debts} = await axios.put("/api/removeDebt");
// 			dispatch(removeADebt(arrOfIds));
// 		} catch (error) {
// 			dispatch(setError());
// 		}
// 	};
// }
// Debt reducer
export default (state = [], action) => {
	switch (action.type) {
		case GET_DEBTS:
			return action.debts;
		case ADD_A_DEBT:
			return [...state, action.debt];
		case REMOVE_A_DEBT:
			return state.filter(debt => !action.debts.includes(debt.id));
		default:
			return state;
	}
};
