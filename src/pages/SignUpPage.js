//react use
import React, {useState} from 'react';
import {Box, Flex, Link, Text, VStack, Button} from '@chakra-ui/react';
//Input
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';

function SignUpPage() {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box bg='#121212'>
      <Flex
        height='100vh'
        alignItems='center'
        justifyContent='center'
        px={[4, 8, 12]}
      >
        <Box
          width={['100%', '90%', '70%', '500px']}
          boxShadow='dark-lg'
          p={6}
          rounded='md'
          bg='#2a2a2a'
        >
          <VStack mt='7' spacing={4} width='100%'>
            <Text fontSize='xl' fontWeight='bold' color='white'>
              Sign In
            </Text>

            {/* Input Section */}
            <Input color='white' placeholder='Email Address or Username'/>
            <InputGroup size='md'>
              <Input
                color='white'
                pr='4.5rem'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                autoComplete='off'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClickShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            
            <Button colorScheme='blue' size='lg' width='100%'>
              Log In
            </Button>
            
            <Text fontWeight='medium' fontSize='sm' color='white'>
              or
            </Text>

            {/* Other Sign In Options */}
            <Button colorScheme='red' size='lg' width='100%'>
              Sign in with Google
            </Button>
            <Button colorScheme='facebook' size='lg' width='100%'>
              Sign in with Facebook
            </Button>
            <Button colorScheme='gray' size='lg' width='100%'>
              Sign in with Apple
            </Button>

            <Text mb='5' fontWeight='medium' fontSize='sm' color='white'>
              Don't have an account yet? <Link>Sign Up</Link>
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default SignUpPage;