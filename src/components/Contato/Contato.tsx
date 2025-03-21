import React, { FC } from 'react';
import { IconType } from 'react-icons'; // Tipo de ícone para ajuste explícito
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const Contato: FC = () => {
  // Forçando os ícones a serem tratados como JSX válidos
  const IconEnvelope: IconType = FaEnvelope;
  const IconWhatsapp: IconType = FaWhatsapp;
  const IconFacebook: IconType = FaFacebook;
  const IconInstagram: IconType = FaInstagram;
  const IconGithub: IconType = FaGithub;
  const IconLinkedIn: IconType = FaLinkedin;

  return (
    <div id="contato" className="p-8 bg-blue-500 text-white shadow-md rounded-lg m-4 border border-gray-200">
      <p className="text-base mb-4 text-center">
        Se você gostaria de entrar em contato comigo, pode me encontrar nas seguintes plataformas:
      </p>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <IconEnvelope size={32} className="text-white" />
          <a
            href="mailto:jonathan.dsg104@hotmail.com"
            className="text-white hover:bg-black hover:text-white py-1 px-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <IconWhatsapp size={32} className="text-green-500" />
          <a
            href="https://wa.me/5548996573094"
            className="text-white hover:bg-black hover:text-white py-1 px-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <IconFacebook size={32} className="text-blue-700" />
          <a
            href="https://www.facebook.com/share/1EfUR15yXX/"
            className="text-white hover:bg-black hover:text-white py-1 px-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <IconInstagram size={32} className="text-pink-600" />
          <a
            href="https://www.instagram.com/jonathangomes104?igsh=MXYyZmttY2M2NG9ocg=="
            className="text-white hover:bg-black hover:text-white py-1 px-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <IconGithub size={32} className="text-gray-800" />
          <a
            href="https://github.com/jonathandsg104"
            className="text-white hover:bg-black hover:text-white py-1 px-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <IconLinkedIn size={32} className="text-blue-500" />
          <a
            href="https://www.linkedin.com/in/jonathangomes104/"
            className="text-white hover:bg-black hover:text-white py-1 px-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
