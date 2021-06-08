/* eslint-disable import/no-anonymous-default-export */
// Action types
const ADD_TOTAL = "ADD_TOTAL";
const SUBTRACT_TOTAL = "SUBTRACT_TOTAL";
const UPDATE_TOTAL = "UPDATE_TOTAL";
const CLEAR_TOTAL = " CLEAR_TOTAL";

// Action creators
export const updateTotal = total => ({
	type: UPDATE_TOTAL,
	total,
});
export const addTotal = amount => ({
	type: ADD_TOTAL,
	amount,
});
export const subtractTotal = amount => ({
	type: SUBTRACT_TOTAL,
	amount,
});

// balance reducer
export default (state = 0, action) => {
	switch (action.type) {
		case ADD_TOTAL:
			return state + action.amount;
		case SUBTRACT_TOTAL:
			return state - action.amount;
		case CLEAR_TOTAL:
			return 0;
		case UPDATE_TOTAL:
			return action.total;
		default:
			return state;
	}
};
