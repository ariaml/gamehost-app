import React from 'react';
import { Box, Flex, Link, Text, VStack, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function SignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box bg='#121212'>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box h='600px' w='500px' boxShadow='dark-lg' p='6' rounded='md' bg='#2a2a2a' >
          <VStack mt='10' ml='7' spacing={4} width="400px">
            <Text fontSize="xl" fontWeight="bold" color='white'>
              Sign In
            </Text>
            
            <Input placeholder="Email Address or Username" />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="off" 
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
            <Text fontWeight="medium" fontSize="sm" color='white'>
              or
            </Text>

            <Button colorScheme="red" size="lg" width="100%">
              Sign in with Google
            </Button>
            <Button colorScheme="facebook" size="lg" width="100%">
              Sign in with Facebook
            </Button>
            <Button colorScheme="gray" size="lg" width="100%">
              Sign in with Apple
            </Button>

            <Text fontWeight="medium" fontSize="sm" color='white'>
              Don't have an account yet? <Link>Sign Up</Link>
            </Text>

          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default SignUpPage;