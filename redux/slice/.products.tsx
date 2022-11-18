import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../definitions/productData";

export interface ProductState {
	id: number;
	name: string;
	price: number;
	// taskList: unknown;
}

export const ProductsSlice = createSlice({
	name: "products",
	initialState: { value: ProductsData},
	reducers: {
		setProducts: (state, action) => {  //setProducts=productsの情報を取ってくる関数(いらないかも)
			state.value = action.payload;
		},
	}
});

export const { setProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;