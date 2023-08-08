import React from 'react';
//react use
import {HStack, Spacer, Text, Center, IconButton, VStack} from '@chakra-ui/react';
import {useDisclosure} from '@chakra-ui/react';
//drawer
import {Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody} from '@chakra-ui/react';
//router dom
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {Link as RouterLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';
//icon
import {HamburgerIcon} from '@chakra-ui/icons';
//pages
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
import SignUpPage from './pages/SignUpPage';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <>
      {/* Mobile Hamburger Icon */}
      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={<HamburgerIcon />}
        aria-label='Open menu'
        variant='unstyled'
        onClick={onOpen}
        ml='auto'
      />

      {/* Desktop Navbar */}
      <HStack
        display={{ base: 'none', md: 'flex' }}
        boxShadow='base'
        bg='#2a2a2a'
        h='50px'
        alignItems='center'
        justifyContent='center'
      >
        <Center
          as={RouterLink}
          to='/home'
          h='100%'
          ml='5'
          color='white'
          borderBottom={location.pathname === '/home' ? '5px solid #0287c3' : 'none'}
          _focus={{ boxShadow: 'none' }}
          _hover={{ borderBottom: '5px solid #0287c3' }}
        >
          <Text textAlign='center'>HOME</Text>
        </Center>
        <Center
          as={RouterLink}
          to='/store'
          h='100%'
          alignItems='center'
          ml='5'
          color='white'
          borderBottom={location.pathname === '/store' ? '5px solid #0287c3' : 'none'}
          _focus={{ boxShadow: 'none' }}
          _hover={{ borderBottom: '5px solid #0287c3' }}
        >
          STORE
        </Center>
        <Center
          as={RouterLink}
          to='/community'
          h='100%'
          alignItems='center'
          ml='5'
          color='white'
          borderBottom={location.pathname === '/community' ? '5px solid #0287c3' : 'none'}
          _focus={{ boxShadow: 'none' }}
          _hover={{ borderBottom: '5px solid #0287c3' }}
        >
          COMMUNITY
        </Center>
        <Center
          as={RouterLink}
          to='/support'
          h='100%'
          alignItems='center'
          ml='5'
          color='white'
          borderBottom={location.pathname === '/support' ? '5px solid #0287c3' : 'none'}
          _focus={{ boxShadow: 'none' }}
          _hover={{ borderBottom: '5px solid #0287c3' }}
        >
          SUPPORT
        </Center>
        <Spacer></Spacer>
        <Center
          as={RouterLink}
          to='/signup'
          h='100%'
          mr='5'
          alignItems='center'
          ml='5'
          color='white'
          borderBottom={location.pathname === '/signup' ? '5px solid #0287c3' : 'none'}
          _focus={{ boxShadow: 'none' }}
          _hover={{ borderBottom: '5px solid #0287c3' }}
        >
          SIGN UP
        </Center>
      </HStack>

      {/* Mobile Drawer */}
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='#2a2a2a'>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <VStack spacing='4' color='white'>
              <Link to='/home' as={RouterLink} color={useLocation().pathname === '/home' ? 'blue' : 'white'}>
                HOME
              </Link>
              <Link to='/store' as={RouterLink} color={useLocation().pathname === '/store' ? 'blue' : 'white'}>
                STORE
              </Link>
              <Link to='/community' as={RouterLink} color={useLocation().pathname === '/community' ? 'blue' : 'white'}>
                COMMUNITY
              </Link>
              <Link to='/support' as={RouterLink} color={useLocation().pathname === '/support' ? 'blue' : 'white'}>
                SUPPORT
              </Link>
              <Link to='/signup' as={RouterLink} color={useLocation().pathname === '/signup' ? 'blue' : 'white'}>
                SIGN UP
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
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