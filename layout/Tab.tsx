import { ReactNode } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Box, Text, Image, Icon, Button, } from '@chakra-ui/react'
import  HamburgerMenu  from "./hamburgerMenu"
import React from 'react';
import Link from "next/link";


export function Tab() {
  return (
    <>
      <div>
        <Box style={{
          background: "#fff",
          display: "flex",
          padding: "20px 20px",
          position: "fixed",
          justifyContent: "space-between",
          width: "100%",
        }} boxShadow='lg'>
          <Link href='/'> 
            <Text fontSize='4xl' fontFamily="HiraMinProN-W3">リュック専門店</Text>
          </Link>
          <Box marginRight={0} marginLeft={'auto'} marginTop={2} >
            <Link href='/recomend/inCart' >
              <Icon w={10} h={10} >
                <AiOutlineShoppingCart />
              </Icon>
            </Link>
          </Box>

          <HamburgerMenu />
          
        </Box>
      </div>
    </>
  );
};