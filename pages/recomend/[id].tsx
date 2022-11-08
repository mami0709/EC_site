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


	const result = taskList.find((task: any) => {
    return String(task.id) == id;
	})

	return (
		<div>
			<h1>Hello</h1>
			{result?.title}
			{result?.price}
		</div>
	)
}
export default Test;