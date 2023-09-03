import React from 'react';
//react use
import {HStack, Spacer, Text, Center, IconButton, VStack, Divider, } from '@chakra-ui/react';
import {useDisclosure} from '@chakra-ui/react';
//drawer
import {Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody} from '@chakra-ui/react';
//router dom
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Link as RouterLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';
//icon
import {HamburgerIcon} from '@chakra-ui/icons';
import { AiOutlineShoppingCart } from "react-icons/ai";
//pages
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';

function NavBar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [isCartDrawerOpen, setCartDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    if (isOpen) {
      onClose();
    }
  };

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

        <IconButton
          as={RouterLink}
          to='/cart'
          icon={<AiOutlineShoppingCart />}
          colorScheme="white" // Adjust the color to match your navbar's text color
        />

        <Center
          as={RouterLink}
          to='/signup'
          h='100%'
          mr='5'
          alignItems='center'
          ml='1'
          color='white'
          borderBottom={location.pathname === '/signup' ? '5px solid #0287c3' : 'none'}
          _focus={{ boxShadow: 'none' }}
          _hover={{ borderBottom: '5px solid #0287c3' }}
        >
          SIGN UP
        </Center>

      {/* Shopping Cart Drawer
      <Drawer
        isOpen={isCartDrawerOpen}
        placement="right"
        blockScrollOnMount={false}
        onClose={() => setCartDrawerOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}

      </HStack>

      {/* Mobile Drawer */}
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='#2a2a2a'>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <VStack spacing='4' color='white'>
              <Text to='/home' as={RouterLink} onClick={closeDrawer} _hover={{ textDecoration: 'underline' }}>
                HOME
              </Text>
              <Divider />
              <Text to='/store' as={RouterLink} onClick={closeDrawer} _hover={{ textDecoration: 'underline' }}>
                STORE
              </Text>
              <Divider />
              <Text to='/community' as={RouterLink} onClick={closeDrawer} _hover={{ textDecoration: 'underline' }} >
                COMMUNITY
              </Text>
              <Divider />
              <Text to='/support' as={RouterLink} onClick={closeDrawer} _hover={{ textDecoration: 'underline' }}>
                SUPPORT
              </Text>
              <Divider />
              <Text to='/signup' as={RouterLink} onClick={closeDrawer} _hover={{ textDecoration: 'underline' }} >
                SIGN UP
              </Text>
              <Divider />
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
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;