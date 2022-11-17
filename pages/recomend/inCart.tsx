import React, { useState ,useEffect } from 'react'
import {NextPage} from "next";
import { Tab } from "../../layout/Tab"
import { Box, Text, Image, Center, SimpleGrid, GridItem,LinkBox, LinkOverlay, Heading ,Grid,Button, TableContainer, Table , Tr, Th, Thead, Tbody,    } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import cart, { CartState,addCart, deleteCart } from "../../redux/slice/cart";
import { useRouter } from 'next/router';
import { DeleteIcon } from '@chakra-ui/icons'



const inCart:NextPage = () => {
	const dispatch = useDispatch();
  const cartList:any = useSelector<CartState>((state:any) => state.cart.value);


	return (
		<>
      <Tab />
      <Center paddingTop={"120px"}  width="100%" fontFamily="HiraMinProN-W3">
			<Box display={"flex"} flexFlow={"column"} marginBottom={100}>
			<Text fontSize='5xl' color={"blue.400"} textAlign={"center"}>カートの中身</Text>
					{cartList.map((cart: any, index: React.Key ) => (
						// TODO: ゴミ箱ボタンの背景がついていない箇所修正。
						<Box key={index} display={"flex"} bg='white' padding={"20px 20px 20px 20px"} marginTop={10}  borderWidth='1px' borderRadius='lg' boxShadow='base'>
							{/* eslint-disable-next-line jsx-a11y/alt-text */}
							<Image src={`../${cart.image}`} boxSize='200px' objectFit='cover' />
							<Box>
								<Text fontSize='4xl' padding={"30px 400px 10px 70px"} >
									{cart.title}
								</Text>
								<Text fontSize='3xl' padding={"10px 400px 10px 70px"}>
									¥{cart.price}
								</Text>
							</Box>
							<Button marginTop={20} size='lg'
								onClick={() => dispatch(deleteCart({ id: cart.id }))}>
								<DeleteIcon />
							</Button>
						</Box>
						))}
			</Box>
			</Center>

		</>
	)
}

export default inCart;
