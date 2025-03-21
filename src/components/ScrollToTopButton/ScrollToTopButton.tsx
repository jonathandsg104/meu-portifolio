import React, { useState, useEffect, FC } from 'react';
import ArrowUpIcon from '../../assets/icons/arrow-up.png'; // Importando a imagem do ícone

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

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-black transition duration-300"
          aria-label="Voltar ao topo"
        >
          <img src={ArrowUpIcon} alt="Voltar ao topo" className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;



