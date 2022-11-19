import React from 'react'
import {NextPage} from "next";
import { Tab } from "../../layout/Tab"
import { Box, Text, Center, Button,    } from '@chakra-ui/react'
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import cart, { CartState,clearCart } from "../../redux/slice/cart";




const End:NextPage = () => {
	const dispatch = useDispatch();
  const cartList:any = useSelector<CartState>((state:any) => state.cart.value);

	return (
		<>
			<Tab />
      
			<Center paddingTop={"120px"}  width="100%" fontFamily="HiraMinProN-W3">
				<Box textAlign={"center"} paddingTop={10}>
					<Text fontSize='4xl'>ご注文いただきありがとうございました😌</Text>
					<Text fontSize='4xl'>またのご利用、お待ちしております</Text>
					<Link href='/' >
						<Button size='lg' marginTop={10} colorScheme='green'
							onClick={() => dispatch(clearCart())}>トップページへ戻る</Button>
					</Link>
				</Box>
			</Center>
		</>
	)
}

export default End;