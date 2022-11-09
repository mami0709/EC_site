import { ReactNode } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Box, Text, Image, } from '@chakra-ui/react'
import  HamburgerMenu  from "./hamburgerMenu"
import React from 'react';
import Link from "next/link";


export function Tab() {
  return (
    <>
      <div>
        <div style={{
          background: "#fff",
          display: "flex",
          padding: "20px 20px",
          position: "fixed",
          justifyContent: "space-between",
          width: "100%",
        }}>
          <Link href='/'> 
            <Text fontSize='4xl' fontFamily="HiraMinProN-W3">リュック専門店</Text>
          </Link>
          <AiOutlineShoppingCart />
          <HamburgerMenu />
          
        </div>
      </div>
    </>
  );
};