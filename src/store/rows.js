/* eslint-disable import/no-anonymous-default-export */
//Checked
const CHECKED = "CHECKED";
const UNCHECKED = "UNCHECKED";
const SELECT_ALL = "SELECT_ALL";

// Action Creators
export const checked = () => ({
	type: CHECKED,
});

export const unchecked = () => ({
	type: UNCHECKED,
});

export const selectAll = all => ({
	type: SELECT_ALL,
	all,
});

// Reducer
export default (state = 0, action) => {
	switch (action.type) {
		case CHECKED:
			return state + 1;
		case UNCHECKED:
			return state - 1;
		case SELECT_ALL:
			return action.all;
		default:
			return state;
	}
};
