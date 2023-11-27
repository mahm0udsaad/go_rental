"use client"
import React, { createContext, useState, useContext } from 'react';

const SystemContext = createContext();

export const useSystemContext = () => {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error('useAddNew must be used within an AddNewProvider');
  }
  return context;
};

export const SystemProvider = ({ children }) => {
    const [addNew, setAddNew] = useState(false);
  
    return (
      <SystemContext.Provider value={{ addNew, setAddNew }}>
        {children}
      </SystemContext.Provider>
    );
  };
