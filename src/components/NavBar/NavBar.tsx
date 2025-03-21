import React, { useState, useEffect, FC } from 'react';

// Importando as imagens dos ícones
import MenuIcon from '../../assets/icons/menu.png';
import CloseIcon from '../../assets/icons/close.png';
import HomeIcon from '../../assets/icons/home.png';
import SobreIcon from '../../assets/icons/sobremim.png';
import ProjectIcon from '../../assets/icons/project.png';
import ContactIcon from '../../assets/icons/contato.png';

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [highlight, setHighlight] = useState<boolean>(false);
  const [blinking, setBlinking] = useState<boolean>(false);

  const handleMenuClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      let blinkCount = 0;
      const blinkInterval = setInterval(() => {
        setBlinking((prev) => !prev);
        blinkCount++;
        if (blinkCount >= 6) {
          clearInterval(blinkInterval);
          setHighlight(true);
        }
      }, 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md rounded-lg m-4 border border-gray-200">
      <div className="text-2xl font-bold text-center w-full lg:w-auto">
        Portfólio de{' '}
        <span
          className={`px-2 py-1 rounded ${
            highlight ? 'bg-black text-white' : blinking ? 'bg-black text-white' : ''
          }`}
        >
          Jonathan Gomes
        </span>
      </div>
      <div className="lg:hidden">
        <button onClick={handleMenuClick} aria-label="Menu">
          {menuOpen ? (
            <img src={CloseIcon} alt="Fechar Menu" className="w-7 h-7" />
          ) : (
            <img src={MenuIcon} alt="Abrir Menu" className="w-7 h-7" />
          )}
        </button>
      </div>
      <ul
        className={`lg:flex ${
          menuOpen ? 'block' : 'hidden'
        } space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 lg:ml-auto w-full lg:w-auto text-center`}
      >
        <li>
          <a href="#home" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center">
            <img src={HomeIcon} alt="Home" className="mr-2 w-6 h-6" />
            Home
          </a>
        </li>
        <li>
          <a href="#sobre" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center">
            <img src={SobreIcon} alt="Sobre" className="mr-2 w-6 h-6" />
            Sobre
          </a>
        </li>
        <li>
          <a href="#projetos" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center">
            <img src={ProjectIcon} alt="Projetos" className="mr-2 w-6 h-6" />
            Projetos
          </a>
        </li>
        <li>
          <a href="#contato" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center">
            <img src={ContactIcon} alt="Contato" className="mr-2 w-6 h-6" />
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

