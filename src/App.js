import React from 'react';
import { Stack, HStack, Heading, Spacer } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { GiTreasureMap } from 'react-icons/gi'
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import CommunityPage from './components/CommunityPage';
import SupportPage from './components/SupportPage';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';

function App() {
  return (
    <Stack bg='#212121'>
      <HStack mt='1' w='100%'>
        {/* <Icon ml='50' as={GiTreasureMap} boxSize={7}/> */}
        <Tabs ml='5'>
          <TabList>
            <Tab>HOME</Tab>
            <Tab>STORE</Tab>
            <Tab>COMMUNITY</Tab>
            <Tab>SUPPORT</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HomePage />
            </TabPanel>
            <TabPanel>
              <StorePage/>
            </TabPanel>
            <TabPanel>
              <CommunityPage/>
            </TabPanel>
            <TabPanel>
              <SupportPage/>
            </TabPanel>
          </TabPanels>

        </Tabs>
        <Spacer></Spacer>
        <Tabs align='end'>
          <TabList>
            <Tab>SIGN UP</Tab>
            <Tab>LOG IN</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignUpPage/>
            </TabPanel>
            <TabPanel>
              <LogInPage/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>
      
      {/* <HomePage></HomePage>
      <StorePage></StorePage>
      <CommunityPage></CommunityPage>
      <SupportPage></SupportPage>
      <SignUpPage></SignUpPage>
      <LogInPage></LogInPage> */}

    </Stack>
  );
}

export default App;
