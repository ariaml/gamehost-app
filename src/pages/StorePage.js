import React from 'react';
import { Box, Image, Text, SimpleGrid, Link, Stack, Heading, VStack, Divider } from '@chakra-ui/react';
//button
import { Button, ButtonGroup} from '@chakra-ui/react'
//card
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
//input
import {InputGroup, InputRightElement, Input} from '@chakra-ui/react';
//icon
import { Icon } from '@chakra-ui/icon'
import { FaSearch } from 'react-icons/fa';
//images
import remnant2 from './photos/remnant2.jfif'
import gtav from './photos/gtav.jpg'
import deadisland2 from './photos/deadisland2.jpg'
import dbd from './photos/dbd.jfif'
import expanse from './photos/expanse.jfif'
import cyberpunk from './photos/cyberpunk.png'
import thehunter from './photos/thehunter.jpg'
import borderlands3 from './photos/borderlands3.jpg'
import spidermanremastered from './photos/spidermanremastered.jfif'
import acv from './photos/acv.jpg'
import jwe2 from './photos/jwe2.jpg'
import elderscrolls from './photos/elderscrolls.jpg'
import hogwarts from './photos/hogwarts.jpg'
import bg2 from './photos/bg2.png'

function StorePage() {
  
  //all games data
  const cardData = [
    {
      id: 1,
      imageSrc: remnant2,
      title: 'Remnant 2',
      price: 'Php 1,955',
    },
    {
      id: 2,
      imageSrc: gtav,
      title: 'GTA V',
      price: 'Php 996',
    },
    {
      id: 3,
      imageSrc: deadisland2,
      title: 'Dead Island 2',
      price: 'Php 2,199',
    },
    {
      id: 4,
      imageSrc: dbd,
      title: 'Dead by Daylight',
      price: 'Php 499.99',
    },
    {
      id: 5,
      imageSrc: expanse,
      title: 'The Expanse - A Telltale Series',
      price: 'Php 999.99',
    },
    {
      id: 6,
      imageSrc: cyberpunk,
      title: 'Cyberpunk 2077',
      price: 'Php 2,431.99',
    },
    {
      id: 7,
      imageSrc: thehunter,
      title: 'theHunter: Call of the Wild',
      price: 'Php 449.95',
    },
    {
      id: 8,
      imageSrc: borderlands3,
      title: 'Borderlands 3',
      price: 'Php 2,399',
    },
    {
      id: 9,
      imageSrc: spidermanremastered,
      title: 'Spider-Man Remastered',
      price: 'Php 2,990',
    },
  ];

  //top games data
  const topGamesCardData = [
    {
      id: 10,
      imageSrc: acv,
      title: 'Assassins Creed Valhalla',
      price: 'Php 2,200',
    },
    {
      id: 11,
      imageSrc: jwe2,
      title: 'Jurassic World Evolution 2',
      price: 'Php 2,069.95',
    },
    {
      id: 12,
      imageSrc: elderscrolls,
      title: 'Elder Scrolls Online',
      price: 'Php 920',
    },
    {
      id: 13,
      imageSrc: hogwarts,
      title: 'Hogwarts Legacy',
      price: 'Php 2,500',
    },
  ];

  return (
    <VStack bg='#121212' minHeight='100vh'>
      {/* title bg and text */}
      <Box 
        bg={`url(${bg2})`} 
        h={{base:'150px', md:'200px'}} 
        width='100%'
      >
        <VStack>
           <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white' mt='5'>
            Store Page
          </Text>
          
          <InputGroup width={{base:'90%', md:'650px'}} mt='5'>
            <Input
              variant='outline'
              placeholder='Search' _placeholder={{opacity:1, color: 'gray.500'}}
              boxShadow='dark-lg'
            />
            <InputRightElement>
              <Icon as={FaSearch} color='gray.500' />
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Box>

      {/* top games section */}
      <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white' mt='5'>
        Top Games
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} overflowX='auto' maxW='100%' p='10'>
        {topGamesCardData.map((card) => (
          <Card key={card.id} maxW="sm" bg='#272729' >
            <CardBody>
              <Image
                src={card.imageSrc}
                alt={card.title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">{card.title}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  {card.price}
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      {/* all games section */}
      <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white' mt='10'>
        All Games
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={10} p='10' mt='5' mb='10'>
        {cardData.map((card) => (
          <VStack key={card.id} align='stretch'>
            <Card
              bg='#121212'
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              h='100px' w='350px'
              maxW='350px'
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
                  <Heading color='white' size='xs'>{card.title}</Heading>
                  <Text color='white' size='xs' py='2'>{card.price}</Text>
                </CardBody>
              </Stack>
            </Card>
          </VStack>
        ))}
          <Text mb='5' fontWeight='medium' fontSize='sm' color='white'>
            <Link>See more ...</Link>
          </Text>
      </SimpleGrid>

    </VStack>
  );
}

export default StorePage;