import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';

function NavBar() {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <Link to='/home'>HOME</Link>
        </Tab>
        <Tab>
          <Link to='/store'>STORE</Link>
        </Tab>
        <Tab>
          <Link to='/community'>COMMUNITY</Link>
        </Tab>
        <Tab>
          <Link to='/support'>SUPPORT</Link>
        </Tab>
        <Tab align='end'>
          <Link to='signup'>SIGN UP</Link>
        </Tab>
      </TabList>
    </Tabs>
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
          <Route path='/login' element={<LogInPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
