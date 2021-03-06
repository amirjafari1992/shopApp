import { types } from './types';
const API = 'data.json';

export const handleGetItems = () => (dispatch) => {
	fetch(API, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
		.then((res) => res.json())
		.then((data) =>
			dispatch({
				type: types.GET_ITEMS,
				payload: data
			})
		);
};

export const handleSetActiveItem = (data) => (dispatch) => {
	dispatch({
		type: types.SET_ACTIVE_ITEM,
		payload: data
	});
};

export const handleAddToBasket = (data, reservedItems) => (dispatch) => {
	const item = {
		id: data.id,
		name: data.name,
		amount: reservedItems
	};
	dispatch({
		type: types.ADD_TO_BASKET,
		payload: item
	});
};

export const handleUpdateBasketItem = (items, id, amount) => (dispatch) => {
	let allItems = items.filter((item) => item.id !== id);
	let newItem = items.find((item) => item.id === id);
	newItem.amount = amount;
	allItems.unshift(newItem);

	dispatch({
		type: types.UPDATE_BASKET_ITEM,
		payload: allItems
	});
};

export const handleRemoveBasketItem = (items, id) => (dispatch) => {
	const newItems = items.filter((item) => item.id !== id);

	dispatch({
		type: types.UPDATE_BASKET_ITEM,
		payload: newItems
	});
};

export const handleUpdateStorageItemAmount = (items, id, isAdd) => (dispatch) => {
	let allItems = items.filter((item) => item.id !== id);
	let newItem = items.find((item) => item.id === id);
	newItem.amount = isAdd ? newItem.amount - 1 : newItem.amount + 1;
	allItems.unshift(newItem);

	dispatch({
		type: types.UPDATE_STORAGE_ITEM_AMOUNT,
		payload: allItems
	});
};
