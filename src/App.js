import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import { HStack, Box, Spacer, Text, Center } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
import SignUpPage from './pages/SignUpPage';

function NavBar() {
  return (
    <HStack boxShadow='base' bg='#2a2a2a' h='50px' alignItems='center' justifyContent="center">
      <Center as={RouterLink} to='/home'  ml='5' color='white' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '5px solid #0287c3'}}>
      <Text  textAlign='center'>HOME</Text>
      </Center>
      <Box as={RouterLink} to='/store' h='50px' alignItems='center' ml='5' color='white' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '5px solid #0287c3'}}>
      STORE
      </Box>
      <Box as={RouterLink} to='/community' h='50px' alignItems='center' ml='5' color='white' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '5px solid #0287c3'}}>
      COMMUNITY
      </Box>
      <Box as={RouterLink} to='/support' h='50px' alignItems='center' ml='5' color='white' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '5px solid #0287c3'}}>
      SUPPORT
      </Box>
      <Spacer></Spacer>
      <Box as={RouterLink} to='/signup' h='50px' mr='5' alignItems='center' ml='5' color='white' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '5px solid #0287c3'}}>
      SIGN UP
      </Box>
    </HStack>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/store' element={<StorePage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;