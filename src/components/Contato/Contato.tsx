import React, { FC } from 'react';
import WhatsAppIcon from '../../assets/icons/whatsapp.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import InstagramIcon from '../../assets/icons/instagram.png';
import LinkedInIcon from '../../assets/icons/linkedin.png';
import EmailIcon from '../../assets/icons/email.png';
import GithubIcon from '../../assets/icons/github.png';

const Contato: FC = () => {
  return (
    <div id="contato" className="p-8 bg-blue-500 text-white shadow-md rounded-lg m-4 border border-gray-200">
      <p className="text-base mb-4 text-center">
        Se você gostaria de entrar em contato comigo, pode me encontrar nas seguintes plataformas:
      </p>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <img src={EmailIcon} alt="Email" className="w-8 h-8" />
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
          <img src={WhatsAppIcon} alt="WhatsApp" className="w-8 h-8" />
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
          <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
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
          <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
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
          <img src={GithubIcon} alt="GitHub" className="w-8 h-8" />
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
          <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
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



