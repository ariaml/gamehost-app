import React from 'react';
import { Box, Flex, Stack, Text, VStack, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function SignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <VStack spacing={4} width="400px">
        <Text fontSize="xl" fontWeight="bold">
          Sign Up Page
        </Text>
        <Input placeholder="Email Address or Username" />
        <InputGroup size="md">s
          <Input
            pr="4.5rem"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClickShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="blue" size="lg" width="100%">
          Sign Up
        </Button>
        <Text fontWeight="medium" fontSize="sm">
          or
        </Text>

        <Button colorScheme="red" size="lg" width="100%">
          Sign in with Google
        </Button>
        <Button colorScheme="facebook" size="lg" width="100%">
          Sign in with Facebook
        </Button>
      </VStack>
    </Flex>
  );
}

export default SignUpPage;