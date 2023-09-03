import React, { useEffect } from "react";
import { Box, Button, 
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
//card
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { FaTrash} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
//   decreaseItemQuantity,
//   increaseItemQuantity,
} from "../features/CartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <Box minH="100vh">
      <Box py={5}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} my={4}>
          
          <Box>
            <Heading mb={4}>Cart - {cart.length} items</Heading>
             {cart?.map((data) => (
              <Flex key={data.id} mb={4}>
                <Box w={{ base: "100px", md: "150px" }}>
                  <Image src={data.imageSrc} alt="Product" w="100%" />
                </Box>
                <Stack spacing={4} ml={{ md: 4 }}>
                  <Text fontWeight="bold">{data.title}</Text>
                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Icon as={FaTrash} />}
                        onClick={() => dispatch(removeItem(data.id))}
                        >
                    Remove item
                    </Button>
                  </Stack>
              </Flex>
            ))}
          </Box>

          <Box>
            <Heading mb={4}>Summary</Heading>
            <Stack spacing={4}>
              <HStack justifyContent="space-between">
                <Text>Total Quantity</Text>
                <Text>{totalQuantity}</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>Total amount</Text>
                <Text>{totalPrice}</Text>
              </HStack>
            </Stack>
            <Button variant="primary" size="lg" mt={4} width="100%">
              Go to checkout
            </Button>
          </Box>

        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CartPage;
