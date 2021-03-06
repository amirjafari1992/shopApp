import { types } from '../actions/types';

const initialState = {
	basket: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case types.GET_ITEMS:
			return {
				...state,
				items: action.payload
			};
		case types.SET_ACTIVE_ITEM:
			return {
				...state,
				activeItem: action.payload
			};
		case types.ADD_TO_BASKET:
			return {
				...state,
				basket: [ ...state.basket, action.payload ]
			};
		case types.UPDATE_BASKET_ITEM:
			return {
				...state,
				basket: action.payload
			};
		case types.UPDATE_STORAGE_ITEM_AMOUNT:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}
