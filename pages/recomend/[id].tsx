import React, { useEffect } from 'react'
import {NextPage} from "next";
import { useRouter } from 'next/router';
import {  ProductsData } from "../../definitions/productData"
import { useSelector, useDispatch } from "react-redux";
import { setProducts, ProductState } from "../../redux/slice/products";
import { useState } from "react";
import { Tab } from "../../layout/Tab"
import { Box, Text, Image, Center, SimpleGrid, GridItem,LinkBox, LinkOverlay, Heading ,Grid, TableContainer, Table , Tr, Th, Thead, Tbody,   } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'



const Test: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
  const taskList:any = useSelector<ProductState>((state:any) => state.products.value);

	//queryで取得したIDをもとにtaskListから呼び出し。resultに格納
	const result = taskList.find((task: any) => {
    return String(task.id) == id;
	})

	return (
		<div>
      <Tab />
      <Center paddingTop={"100px"}  width="80%" margin= "0px auto">
				<Box display={"flex"}>
					{/* eslint-disable-next-line jsx-a11y/alt-text */}
					<Image src={`../${result?.image}`} boxSize='300px' objectFit='cover' />
					<Box>
						<Text fontSize='4xl' fontFamily="HiraMinProN-W3">{result?.title}</Text>
						<Text fontSize='3xl' fontFamily="HiraMinProN-W3">¥{result?.price}</Text>

						<TableContainer>
							<Table>
								<Tbody>
									<Tr>
										<Th>{result?.color1}</Th>
										<Th>残10点</Th>
										<Th><AiOutlineShoppingCart /></Th>
									</Tr>
									<Tr>
										<Th>{result?.color2}</Th>
										<Th>残8点</Th>
										<Th><AiOutlineShoppingCart /></Th>
									</Tr>
									<Tr>
										<Th>{result?.color3}</Th>
										<Th>残5点</Th>
										<Th><AiOutlineShoppingCart /></Th>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
						<Text fontSize='1xl' fontFamily="HiraMinProN-W3">¥{result?.message}</Text>
					</Box>


				</Box>
			</Center>
		</div>

	)
}
export default Test;