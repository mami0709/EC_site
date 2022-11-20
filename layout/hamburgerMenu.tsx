import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
	Button,
	useDisclosure,
  Icon,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from "next/link";
import { auth, provider } from "../firebase";



function HamburgerMenu () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  //サインアウトボタン
function SignOutButton () {
	return (
		<Button colorScheme='teal' variant='link' fontSize='2xl' onClick={() => auth.signOut()}>
			<Text>サインアウト</Text>
		</Button>
	)
}

  return (
    <>
      <Button>
      <Icon as={HamburgerIcon} onClick={onOpen} />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' fontSize='3xl'>リュック専門店</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody display={"flex"} flexFlow={"column"}>
            <Link href={'/'}>
              <SignOutButton  marginTop={5}>ログアウト</SignOutButton>
            </Link>
            <Link href={'/'}>
              <Button colorScheme='teal' variant='link'  fontSize='2xl' marginTop={5}>すべて</Button>
            </Link>
            <Link href={'/recomend/ryukku'}>
              <Button colorScheme='teal' variant='link' fontSize='2xl' marginTop={5}>リュック</Button>
            </Link>
            <Link href={'/recomend/bag'}>
              <Button colorScheme='teal' variant='link' fontSize='2xl' marginTop={5}>バック</Button>
            </Link>
            <Link href={'/recomend/saihu'}>
              <Button colorScheme='teal' variant='link' fontSize='2xl' marginTop={5}>財布</Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HamburgerMenu;