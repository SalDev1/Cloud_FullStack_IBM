import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import Dialog from './components/Dialog';
import { useDisclosure } from '@chakra-ui/react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="App">
      <NavBar onOpen = {onOpen}/>
      <MainSection />
      <Dialog isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </div>
  );
}

export default App;
