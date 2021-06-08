/* eslint-disable import/no-anonymous-default-export */
// Action type
const SET_ERROR = "SET_ERROR";

// Action creator
export const setError = () => ({
	type: SET_ERROR,
});

// Store reducer
export default (state = false, action) => {
	switch (action.type) {
		case SET_ERROR:
			return true;
		default:
			return state;
	}
};
