import React, { useEffect } from 'react'
import {NextPage} from "next";
import { useRouter } from 'next/router';
import {  ProductsData } from "../../definitions/productData"
import { useSelector, useDispatch } from "react-redux";
import { setProducts, ProductState } from "../../redux/slice/products";
import { useState } from "react";



const Test: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
  const taskList:any = useSelector<ProductState>((state:any) => state.products.value);

	const result = taskList.filter(function(value: any) {
		return value == id ;
	})

	
	console.log(id)
	console.log(result)
	// console.log(taskList)

	return (
		<div>
			<h1>Hello</h1>
			{id}
			{result.title}
			{result?.price}
		</div>
	)
}
export default Test;