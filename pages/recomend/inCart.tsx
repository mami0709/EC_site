import React from 'react'
import {NextPage} from "next";
import { Tab } from "../../layout/Tab"
import { Box, Text, Image, Center, SimpleGrid, GridItem,LinkBox, LinkOverlay, Heading ,Grid,   } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import cart, { CartState,addCart, deleteCart } from "../../redux/slice/cart";
import { useRouter } from 'next/router';



const inCart:NextPage = () => {


  const cartList:any = useSelector<CartState>((state:any) => state.cart.value);

	console.log(cartList)
	

	return (
		<>
      <Tab />
      <Center paddingTop={"100px"}  width="100%">
				<Text fontSize='5xl' fontFamily="HiraMinProN-W3" color={"blue.400"}>カートの中身</Text>
				<Box>
				{/* {cartList.map((result:any) => (
					// eslint-disable-next-line react/jsx-key
					<Text>{result?.title}</Text>
					))} */}
					{/* @ts-nocheck */}
					

					{/* TODO: カートの中身情報追加 */}
					{cartList?.result?.title}
					{cartList?.title}
					{cartList?.cart?.title}
				</Box>
			</Center>

		</>
	)
}

export default inCart;
