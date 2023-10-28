import { api } from '@/utils/url';
import React, { createContext } from 'react';

// Generate a blank react context
export const MainContext = createContext();

const MainProvider = ({ children }) => {
  // Add your context state and functions here

  const getStaticProps = async (context) => {
    const res = await fetch(api + context);
    const repo = await res.json();
    return { props };
  };

  return <MainContext.Provider value={{ getStaticProps }}>{children}</MainContext.Provider>;
};

export default MainProvider;
