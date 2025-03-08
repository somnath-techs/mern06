import React, { createContext } from 'react';
import Navbar from '../components/Navbar';

export const MainContext = createContext();

const Layout = ({ children }) => {
  return (
    <MainContext.Provider>
        <Navbar />
        {children}
      
    </MainContext.Provider>
  );
};

export default Layout;
