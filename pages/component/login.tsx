import React from 'react'
import { Box, Text, Center, Button,  } from '@chakra-ui/react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import Top from '../Top'


function Login() {
	const [user] = useAuthState(auth);

	return (
		<>
			{user ? (
					<Top />
			):(
				<UserInfo />
			)}
		</>
	)
}
export default Login;

//Googleでサインインボタン
function SignInButton () {
	const signInWithGoogle = () => {
		//firebaseでGoogleログイン
		signInWithPopup(auth,provider)
	};
	return (
		<Button  colorScheme='orange' marginTop={"30px"} marginBottom={"70px"} padding={"40px"}
			onClick={signInWithGoogle}>
			<Text fontSize='2xl'>Googleでサインイン</Text>
		</Button>
	)
}


function UserInfo () {
	return(
		<>
			<Box borderWidth='1px' borderRadius='lg' overflow='hidden'  fontFamily="HiraMinProN-W3" width="60%" margin={"0px auto"} marginTop={"200px"}>
				<Center display={"flex"} flexFlow={"column"} >
					<Text fontSize='5xl' marginTop={"30px"}>リュック専門店</Text>
					<Text fontSize='2xl' marginTop={"30px"} textAlign={"center"} width="80%">
						あなたの欲しいものをあなたの手に、をコンセプトに。<br />
						当サイトはリュック専門店です。品質へのこだわりはもちろん、あなたの愛着あるリュックの修理も承っております。<br />
						丈夫で、かっこよく、使っていて気持ちのいいリュックをお探しの方はぜひ覗いていってください！
					</Text>
					<Text fontSize='3xl' marginTop={"30px"}>お買い物は下記からログインしてください👇</Text>

					<SignInButton />
				</Center>
			</Box>
		</>
	)
}