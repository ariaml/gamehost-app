import React from 'react';
//router dom
import { Link } from 'react-router-dom';
//react
import { Text, Box, SimpleGrid, VStack, Stack, Heading, Image, Divider, HStack } from '@chakra-ui/react'
//card
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
//icons
import { IconButton } from '@chakra-ui/react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
//images
import bg from './photos/bg.png'
import remnant2 from './photos/remnant2.jfif'
import gtav from './photos/gtav.jpg'
import deadisland2 from './photos/deadisland2.jpg'
import dbd from './photos/dbd.jfif'
import expanse from './photos/expanse.jfif'
import cyberpunk from './photos/cyberpunk.png'
import thehunter from './photos/thehunter.jpg'
import borderlands3 from './photos/borderlands3.jpg'
import spidermanremastered from './photos/spidermanremastered.jfif'



function HomePage() {

    //router link
    const LinkClick = (url) => {window.open(url, '_blank')};

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

    return(
        <Box bg='#121212' minHeight='100vh'>
            {/* big photo */}
            <Box
                bg={`url(${bg})`} 
                backgroundPosition="center"
                h={{ base: '300px', md: '400px', lg: '500px' }} 
                width='100%'
            ></Box>

            {/* all games section */}
            <Stack p='20'>
                <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white' >
                    <Link to='/store'>
                        All Games
                    </Link>
                </Text>
 
                <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={10}  mt='5' mb='10'>
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
                </SimpleGrid>
                
                {/* community section */}
                <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white' mt='10' >
                    <Link to='/community'>
                        Community
                    </Link>
                </Text>

                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' mt='5' >
                    <Card bg='#272729' >
                        <CardHeader>
                            <Heading color='white' size='md'>Spider-Ham</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text color='white'>My name is Peter Porker. I actually started as a spider named Peter who lived ...</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>
                                <Link color='white' to='/community'>
                                    Read more
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                        
                    <Card bg='#272729'>
                        <CardHeader>
                            <Heading color='white' size='md'>Spooderman</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text color='white'>My name is Peter Parker. I was bitten by a radioactive spider, and for ...</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>
                                <Link color='white' to='/community'>
                                    Read more
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Stack>
            
            <Divider mt='20'></Divider>

            {/* about us section */}
            <Stack p='10'>
                <Heading size='md'>About Us</Heading>
                <Text color='white' mt='5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <HStack mt='5'>
                    <IconButton icon={<FaLinkedin />} isRound='true' onClick={() => LinkClick('https://www.linkedin.com/in/airaladera/')}></IconButton>
                    <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={() => LinkClick('https://www.instagram.com/a012a.ml/')}></IconButton>
                    <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() => LinkClick('https://github.com/ariaml')}></IconButton>  
                </HStack>
            </Stack>

        </Box>
    );
}

export default HomePage;