import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, ProductState } from "../redux/slice/products";
import { useState } from "react";
import {  ProductsData } from "../definitions/productData"
import { Box, Text, Image, Center, SimpleGrid, GridItem,LinkBox, LinkOverlay, Heading ,Grid,   } from '@chakra-ui/react'
import { Tab } from "../layout/Tab"
import type { NextPage } from 'next';


const Top: NextPage = () => {
  // const router = useRouter()
  const taskList:any = useSelector<ProductState>((state:any) => state.products.value);

  return (
    <>
      <Tab />
      
      <Center paddingTop={"100px"}  width="100%">
          {taskList.map((product:any, index: React.Key) => (
            // eslint-disable-next-line react/jsx-key
            <Box key={index}>
            <Grid templateColumns='repeat(1, 1fr )' gap={4} >
              <GridItem w='100%' h='10'>
                <Link href={`/recomend/${product.id}`} >
                    <Box >  
                      <Image src={product.image} boxSize='300px' objectFit='cover' />
                        <Heading size='md' my='2'>{product.title}</Heading>
                        <Text>{product.price}</Text>
                    </Box>
                </Link>
              </GridItem>
            </Grid> 
          </Box>
          ))}
        </Center>
        
      
    </>
  );
}

export default Top;
