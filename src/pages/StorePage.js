import React from 'react';
import { useState } from 'react';
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
import { BsFillPlusCircleFill } from "react-icons/bs";
//images
import bg2 from './photos/bg2.png'
//rtk
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

function StorePage() {
  
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  console.log(items);

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
        {items.slice(9, 13).map((card, index) => ( 
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
                <Button variant="solid" colorScheme="blue" onClick={() => addToCart(card)}>
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
        {items.slice(0, 9).map((item, index) => (
          <VStack key={item.id} align='stretch'>
            <Card
              bg='#121212'
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              h='100px' w='350px'
              maxW='350px'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
          
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '150px' }}
                src={item.imageSrc}
                alt={item.title}
                variant='elevated'
              />
              <Stack>
                <CardBody >
                  <Heading color='white' size='xs'>{item.title}</Heading>
                  <Text color='white' size='xs' py='2'>{item.price}</Text>
                </CardBody>

                <CardFooter>
                  {isHovered && (
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      position="absolute"
                      bottom="10%"
                      right="10%"
                      _hover={{ color: 'white' }}
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <BsFillPlusCircleFill size={30} />
                    </Button>
                  )}
                </CardFooter>

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