import React from 'react';
import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

function SignUpPage() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return(
        <Stack>
            <Text>Sign Up Page</Text>
            <VStack w='100%'>
                <Input placeholder='Email Address or username' />
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                <Button colorScheme='gray'>Sign Up</Button>
            </VStack>

            
        </Stack>
    );
}

export default SignUpPage;