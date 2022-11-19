import React from 'react'
import {NextPage} from "next";
import { Tab } from "../../layout/Tab"
import { Box, Text, Image, Center, Button,    } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { CartState,deleteCart } from "../../redux/slice/cart";
import { DeleteIcon } from '@chakra-ui/icons'
import Link from "next/link";




const inCart:NextPage = () => {
	const dispatch = useDispatch();
  const cartList:any = useSelector<CartState>((state:any) => state.cart.value);

	//カート内の合計値取得(初期値０)
	const total = cartList.reduce((sum: number,num: { price: number; }) => sum + num.price, 0 );
	//カート内が０か確認
	const noCart = total === 0 ;




	return (
		<>
      <Tab />
      <Center paddingTop={"120px"}  width="100%" fontFamily="HiraMinProN-W3">

				<>
					{/* カート内が０だったときの処理 */}
					{noCart ? (
						<>
							<Box display={"flex"} flexFlow={"column"} textAlign={"center"}>
								<Text fontSize='5xl' color={"blue.400"} textAlign={"center"}>カートの中身</Text>
								<Text fontSize='4xl' paddingTop={30}>カートの中身はなにもありません。</Text>
								<Link href='/' >
									<Button size='lg' marginTop={10} colorScheme='green'>
										トップページへ戻る
									</Button>
								</Link>
							</Box>
						</>

					) : ( 
						<>
							{/* カート内が０以上だったときの処理 */}
							<Box>
								<Text fontSize='5xl' color={"blue.400"} textAlign={"center"}>カートの中身</Text>

								<Center display={"flex"} paddingTop={10}>
									<Box paddingRight={5}>
										<Text fontSize='3xl' >合計金額</Text>
										<Text fontSize='4xl' fontWeight={"bold"}>{total} 円</Text>
									</Box>
									<Link href='/recomend/end' >
										<Button size='lg' marginLeft={5} marginTop={5} colorScheme='orange'>注文を確定する</Button>
									</Link>
								</Center>

								<Box display={"flex"} flexFlow={"column"} marginBottom={"100px"} width="80%" margin={"0px auto"}>
										{cartList.map((cart: any, index: React.Key ) => (
											<Box key={index} display={"flex"} bg='white' padding={"20px 20px 20px 20px"} marginTop={10}  borderWidth='1px' borderRadius='lg' boxShadow='base'>
												{/* eslint-disable-next-line jsx-a11y/alt-text */}
												<Image src={`../${cart.image}`} boxSize='200px' objectFit='cover' />
												<Box>
													<Text fontSize='4xl' padding={"30px 100px 10px 70px"} >
														{cart.title}
													</Text>
													<Text fontSize='3xl' padding={"10px 100px 10px 70px"}>
														¥{cart.price}
													</Text>
												</Box>
												{/* TODO: 削除すると同じIDのもの全部消えるの修正。 */}
												<Button marginTop={20} size='lg'
													onClick={() => dispatch(deleteCart({ id: cart.id }))}>
													<DeleteIcon />
												</Button>
											</Box>
											))}
									</Box>
							</Box>
						</>
					)}
				</>
	
			</Center>

		</>
	)
}

export default inCart;
