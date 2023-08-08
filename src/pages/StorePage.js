import React from 'react';
import { Box, Image, Text, SimpleGrid, ChakraProvider, Stack, Heading, Button, VStack, Spacer } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function StorePage() {
  
  const cardData = [
    {
      id: 1,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Remnant 2',
      price: 'Php 1,955',
    },
    {
      id: 2,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'GTA V',
      price: 'Php 996',
    },
    {
      id: 3,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Dead Island 2',
      price: 'Php 2,199',
    },
    {
      id: 4,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Dead by Daylight',
      price: 'Php 499.99',
    },
    {
      id: 5,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'The Expanse - A Telltale Series',
      price: 'Php 999.99',
    },
    {
      id: 6,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Fortnite',
      price: 'Free',
    },
  ];

  return (
    <Box bg='#121212' minHeight='100vh' p='5'>
      <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white' ml='40'>
        Store Page
      </Text>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mr='40' ml='40'>
        {cardData.map((card) => (
          <VStack key={card.id} align='stretch'>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={card.imageSrc}
                alt={card.title}
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>{card.title}</Heading>
                  <Text py='2'>{card.price}</Text>
                </CardBody>

              </Stack>
            </Card>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}


export default StorePage;