import React from 'react';
import { Box, Image, Text, SimpleGrid, ChakraProvider } from '@chakra-ui/react';

const games = [
  {
    title: 'Game 1',
    image: 'game1.jpg', // Replace with the actual image URL
    price: 19.99,
  },
  // Add more games here...
];

function GameCard({ title, image, price }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />
      <Box p="6">
        <Text fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
        <Text mt="2">${price}</Text>
      </Box>
    </Box>
  );
}

function StorePage() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px">
      {games.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </SimpleGrid>
  );
}

export default StorePage;