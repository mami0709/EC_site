import React, { useState ,useEffect } from 'react'
import {NextPage} from "next";
import { Tab } from "../../layout/Tab"
import { Box, Text, Image, Center, SimpleGrid, GridItem,LinkBox, LinkOverlay, Heading ,Grid,   } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import cart, { CartState,addCart, deleteCart } from "../../redux/slice/cart";
import { useRouter } from 'next/router';



const inCart:NextPage = () => {

  const cartList:any = useSelector<CartState>((state:any) => state.cart.value);
	// eslint-disable-next-line react-hooks/rules-of-hooks


	return (
		<>
      <Tab />
      <Center paddingTop={"100px"}  width="100%">
				<Text fontSize='5xl' fontFamily="HiraMinProN-W3" color={"blue.400"}>カートの中身</Text>
				{cartList.map((cart: any, index: React.Key ) => (
					<Box key={index}>
						<Text>{cart.result?.title}</Text>
						<Text>{cart.result?.price}</Text>
					</Box>
					))}
			</Center>

		</>
	)
}

export default inCart;
