import React from 'react';
import Link from "next/link";
import {  ProductsData } from "../definitions/productData"
import { Box, Text, Image, Center, GridItem,Heading ,Grid, } from '@chakra-ui/react'
import { Tab } from "../layout/Tab"
import type { NextPage } from 'next';


const Top: NextPage = () => {
  const taskList:any = ProductsData;
  
  return (
    <>
      <Tab />
      
      <Center paddingTop={"120px"}  width="100%">
          {taskList.map((product:any, index: React.Key) => (
            <Box key={index}>
            <Grid templateColumns='repeat(1, 1fr )' gap={4} >
              <GridItem w='100%' h='10'>
                <Link href={`/recomend/${product.id}`} >
                    <Box >  
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
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
