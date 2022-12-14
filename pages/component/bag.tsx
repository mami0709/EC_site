import React from 'react';
import Link from 'next/link';
import { ProductsData } from '../../definitions/productData';
import { Box, Text, Image, Center, GridItem, Heading, Grid } from '@chakra-ui/react';
import { Tab } from '../../layout/Tab';
import type { NextPage } from 'next';

const Bag: NextPage = () => {
  const taskList = ProductsData;
  //tagより任意のものを取り出す
  const taskListRyukku = taskList.filter((task) => {
    return task.tag == 'バック';
  });

  return (
    <>
      <Tab />

      <Center paddingTop={'130px'} width='90%' margin={'0px auto'}>
        <Grid templateColumns='repeat(5, 1fr )' gap={8}>
          {taskListRyukku.map((product, index: React.Key) => (
            <Box key={index} paddingTop={'30px'} paddingBottom={'50px'}>
              <GridItem>
                <Link href={`/component/${product.id}`}>
                  <Box>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image src={`../${product.image}`} boxSize='300px' objectFit='cover' />
                    <Heading size='md' my='2'>
                      {product.title}
                    </Heading>
                    <Text>¥{product.price}</Text>
                  </Box>
                </Link>
              </GridItem>
            </Box>
          ))}
        </Grid>
      </Center>
    </>
  );
};

export default Bag;
