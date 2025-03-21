import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
      <ScrollToTopButton />
    </div>
  );
}

export default App;



