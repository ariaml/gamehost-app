import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { HStack, Tab, TabList, Tabs, Box, Text, Spacer } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
import SignUpPage from './pages/SignUpPage';

function NavBar() {
  return (
    <HStack mt='2' mr='2' boxShadow='base' >
      <Box h='30px' ml='5' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '2px solid blue'}}> 
        <Link to='/home'>HOME</Link>
      </Box>
      <Box h='30px' ml='5' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '2px solid blue'}}> 
        <Link to='/store'>STORE</Link>
      </Box>
      <Box h='30px' ml='5' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '2px solid blue'}}> 
        <Link to='/community'>COMMUNITY</Link>
      </Box>
      <Box h='30px' ml='5' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '2px solid blue'}}> 
        <Link to='/support'>SUPPORT</Link>
      </Box>
      <Spacer></Spacer>
      <Box h='30px' mr='5' ml='5' _focus={{ boxShadow: 'none' }} _hover={{ borderBottom: '2px solid blue'}}> 
      <Link to='/signup'>SIGN UP</Link>
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