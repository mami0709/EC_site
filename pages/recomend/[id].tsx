import React, { useEffect } from 'react'
import {NextPage} from "next";
import { useRouter } from 'next/router';
import {  ProductsData } from "../../definitions/productData"
import { useSelector, useDispatch } from "react-redux";
import { setProducts, ProductState } from "../../redux/slice/products";
import { useState } from "react";
import { Tab } from "../../layout/Tab"
import { Box, Text, Image, Center, SimpleGrid, GridItem,LinkBox, LinkOverlay, Heading ,Button, TableContainer, Table , Tr, Th, Thead, Tbody,   } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { addCart, deleteCart } from '../../redux/slice/cart'
import { title } from 'process';



const Test: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const dispatch = useDispatch();
  const taskList:any = useSelector<ProductState>((state:any) => state.products.value);

	//queryで取得したIDをもとにtaskListから呼び出し。resultに格納
	const result = taskList.find((task: any) => {
    return String(task.id) == id;
	})

	// TODO: handleClickがエラーになってるから直す。
	const handleClick = () => {
    dispatch(
      addCart({
        id: taskList.length + 1,
				title: title
      })
    );
	};


	return (
		<div>
      <Tab />
      <Center paddingTop={"100px"}  width="80%" margin= "0px auto">
				<Box display={"flex"}>
					{/* eslint-disable-next-line jsx-a11y/alt-text */}
					<Image src={`../${result?.image}`} boxSize='600px' objectFit='cover' />
					<Box marginLeft={20}>
						<Text fontSize='5xl' fontFamily="HiraMinProN-W3" color={"blue.400"} marginBottom={5}>
							{result?.title}
						</Text>
						<Text fontSize='4xl' fontFamily="HiraMinProN-W3" marginBottom={5}>
							¥{result?.price}
						</Text>

						<TableContainer>
							<Table marginBottom={10}>
								<Tbody>
									<Tr>
										<Th fontSize='2xl'>{result?.color1}</Th>
										<Th fontSize='2xl'>残10点</Th>
										<Th><Button onClick={() => handleClick()} size='lg'><AiOutlineShoppingCart /></Button></Th>
									</Tr>
									<Tr>
										<Th fontSize='2xl'>{result?.color2}</Th>
										<Th fontSize='2xl'>残8点</Th>
										<Th><Button onClick={() => handleClick()} size='lg'><AiOutlineShoppingCart /></Button></Th>
									</Tr>
									<Tr>
										<Th fontSize='2xl'>{result?.color3}</Th>
										<Th fontSize='2xl'>残5点</Th>
										<Th><Button onClick={() => handleClick()} size='lg'><AiOutlineShoppingCart /></Button></Th>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
						<Text fontSize='2xl' fontFamily="HiraMinProN-W3" >{result?.message}</Text>
					</Box>


				</Box>
			</Center>
		</div>

	)
}
export default Test;