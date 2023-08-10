import React from 'react';
import { Box, Image, Text, SimpleGrid, ChakraProvider, Stack, Heading, Button, VStack, Spacer, Divider, Center, ButtonGroup, HStack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
//input
import {InputGroup, InputRightElement, Input} from '@chakra-ui/react';
//icon
import {Icon} from '@chakra-ui/icon'
import {FaSearch} from 'react-icons/fa';

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
    {
      id: 7,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Fortnite',
      price: 'Free',
    },
    {
      id: 8,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Fortnite',
      price: 'Free',
    },
    {
      id: 9,
      imageSrc: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Fortnite',
      price: 'Free',
    },
  ];

  const topGamesCardData = [
    {
      id: 10,
      imageSrc: 'your-image-url',
      title: 'Top Game 1',
      price: 'Php 499.99',
    },
    {
      id: 11,
      imageSrc: 'your-image-url',
      title: 'Top Game 2',
      price: 'Php 799.99',
    },
    {
      id: 12,
      imageSrc: 'your-image-url',
      title: 'Top Game 2',
      price: 'Php 799.99',
    },
    {
      id: 13,
      imageSrc: 'your-image-url',
      title: 'Top Game 2',
      price: 'Php 799.99',
    },
    {
      id: 14,
      imageSrc: 'your-image-url',
      title: 'Top Game 2',
      price: 'Php 799.99',
    },
  ];

  return (
    <VStack bg='#121212' minHeight='100vh' p='5'>
      <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white'>
        Store Page
      </Text>
      
      <InputGroup width={{base:'90%', md:'650px'}} mt='5'>
        <Input
          variant='outline'
          placeholder='Search' _placeholder={{opacity:1, color: 'gray.500'}}
          bg='white'
          boxShadow='dark-lg'
        />
        <InputRightElement>
          <Icon as={FaSearch} color='gray.500' />
        </InputRightElement>
      </InputGroup>

      <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white'>
        Top Games
      </Text>

      <HStack spacing={4} overflowX="auto">
        {topGamesCardData.map((card) => (
          <Card key={card.id} maxW="sm">
            <CardBody>
              <Image
                src={card.imageSrc}
                alt={card.title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{card.title}</Heading>
                <Text>{card.price}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </HStack>

      
      <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white'>
        All Games
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mr='40' ml='40' mt='5'>
        {cardData.map((card) => (
          <VStack key={card.id} align='stretch'>
            <Card
              bg='#121212'
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              h='100px' w='350px'
              
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '150px' }}
                src={card.imageSrc}
                alt={card.title}
                variant='elevated'
              />

              <Stack>
                <CardBody >
                  <Heading color='white' size='sm'>{card.title}</Heading>
                  <Text color='white' py='2'>{card.price}</Text>
                </CardBody>
              </Stack>
            </Card>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
}


export default StorePage;