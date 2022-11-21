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
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


function HamburgerMenu () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [placement, setPlacement] = React.useState('right')

  return (
    <>
      <Button>
      <Icon as={HamburgerIcon} onClick={onOpen} />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>リュック専門店</DrawerHeader>
          <DrawerBody>
            <p>ログアウト</p>
            <p>すべて</p>
            <p>メンズ</p>
            <p>レディース</p>
            <p>キッズ</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HamburgerMenu;