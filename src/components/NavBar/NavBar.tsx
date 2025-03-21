import React, { useState, useEffect, FC } from 'react';
import { IconType } from 'react-icons'; // Tipo explícito para tratar os ícones
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Importação dos ícones

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

  // Usando constantes com tipos explícitos para cada ícone
  const IconBars: IconType = FaBars;
  const IconTimes: IconType = FaTimes;
  const IconHome: IconType = FaHome;
  const IconInfoCircle: IconType = FaInfoCircle;
  const IconProjectDiagram: IconType = FaProjectDiagram;
  const IconEnvelope: IconType = FaEnvelope;

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md rounded-lg m-4 border border-gray-200">
      <div className="text-2xl font-bold text-center w-full lg:w-auto">
        Portfólio de{' '}
        <span className={`px-2 py-1 rounded ${highlight ? 'bg-black text-white' : blinking ? 'bg-black text-white' : ''}`}>
          Jonathan Gomes
        </span>
      </div>
      <div className="lg:hidden">
        <button onClick={handleMenuClick} aria-label="Menu">
          {menuOpen ? <IconTimes size={28} /> : <IconBars size={28} />}
        </button>
      </div>
      <ul
        className={`lg:flex ${
          menuOpen ? 'block' : 'hidden'
        } space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 lg:ml-auto w-full lg:w-auto text-center`}
      >
        <li>
          <a href="#home" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center">
            <IconHome className="mr-2 text-white" />
            Home
          </a>
        </li>
        <li>
          <a href="#sobre" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center">
            <IconInfoCircle className="mr-2 text-white" />
            Sobre
          </a>
        </li>
        <li>
          <a href="#projetos" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center">
            <IconProjectDiagram className="mr-2 text-white" />
            Projetos
          </a>
        </li>
        <li>
          <a href="#contato" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center">
            <IconEnvelope className="mr-2 text-white" />
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

