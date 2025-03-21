import React, { useState, useEffect, FC } from 'react';
import { IconType } from 'react-icons'; // Importando o tipo IconType para garantir a interpretação correta do ícone
import { FaArrowUp } from 'react-icons/fa'; // Importando o ícone

const ScrollToTopButton: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        // Mostra o botão se a rolagem for maior que 10% da altura da janela
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Forçando o tipo do ícone para evitar erros de tipagem
  const IconArrowUp: IconType = FaArrowUp;

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-black transition duration-300"
          aria-label="Voltar ao topo"
        >
          <IconArrowUp size={24} className="text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;


