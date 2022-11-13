import React from 'react'
import {NextPage} from "next";
import { Tab } from "../../layout/Tab"
import { Box, Text, Image, Center, SimpleGrid, GridItem,LinkBox, LinkOverlay, Heading ,Grid,   } from '@chakra-ui/react'


const inCart:NextPage = () => {
	return (
		<>
      <Tab />
      <Center paddingTop={"100px"}  width="100%">
				<Text fontSize='5xl' fontFamily="HiraMinProN-W3" color={"blue.400"}>カートの中身</Text>
				<Box>
					{/* TODO: カートの中身情報追加 */}
				</Box>
			</Center>

		</>
	)
}

export default inCart;
