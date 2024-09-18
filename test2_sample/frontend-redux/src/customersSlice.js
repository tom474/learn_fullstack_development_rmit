import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	favCustomers: [],
};

const customersSlice = createSlice({
	name: "customers",
	initialState,
	reducers: {
		toggleFavorite(state, action) {
			const { customer_id } = action.payload;
			const index = state.favCustomers.findIndex((fav_customer) => fav_customer === customer_id);
			if (index == -1) {
				state.favCustomers.push(customer_id);
			} else {
				state.favCustomers.splice(index, 1);
			}
		},
	},
});

export const { toggleFavorite } = customersSlice.actions;

export const getFavoriteCustomers = (state) => state.customers.favCustomers;

export const isFavorite = (state, customer_id) =>
	state.customers.favCustomers.find((fav_customer) => fav_customer === customer_id) != undefined;

export default customersSlice.reducer;
