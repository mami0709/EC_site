
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
	id: number;
	name: string;
	totalPrice: string;
	push: boolean;
}



export const CartSlice = createSlice({
	name: "cart",
	initialState: {value: []},
	reducers: {
		addCart: (state,action) => {
			state.value.push(action.payload);
			// debugger;  
		},
		deleteCart: (state,action) => {
			// debugger;
			// console.log('before', current(state))  //この時点のStateの中身を見たい場合はcurrentを使う。
			state.value = state.value.filter((cart) => cart.id !== action.payload.id);
			// console.log('after', current(state))
		},
		clearCart: (state) => {
			return {value: []};
		}
	},
});

export const { addCart, deleteCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;