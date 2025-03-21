import React, { useEffect, useState, FC } from 'react';
import { IconType } from 'react-icons'; // Adicionando o tipo IconType para garantir a validade dos ícones
import { FaHome } from 'react-icons/fa'; // Importando o ícone
import fotoJonathan from '../Home/Image/foto-jonathan.png';

const Home: FC = () => {
    const [text, setText] = useState<string>(''); // Tipagem explícita para o estado
    const message: string = 'A tecnologia é a arte de transformar o impossível em realidade.'; // Tipagem explícita para a mensagem

    // Garantir a exibição animada do texto
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(message.substring(0, index + 1)); // Atualiza o texto com uma nova substring
            index++;
            if (index === message.length) {
                clearInterval(intervalId); // Para a animação quando a mensagem completa é exibida
            }
        }, 100);

        return () => clearInterval(intervalId); // Limpa o intervalo para evitar vazamentos
    }, [message]); // Incluí message como dependência para evitar comportamento inesperado

    // Usando o tipo para tratar o ícone explicitamente como válido
    const IconHome: IconType = FaHome;

    return (
        <div id="home" className="p-8 bg-white text-black shadow-md rounded-lg m-4 border border-gray-200">
            <h1 className="text-4xl font-bold mb-4 text-center flex items-center justify-center">
                <IconHome className="mr-2 text-blue-500 w-8 h-8" /> Bem-vindo ao Meu Portfólio
            </h1>
            <p className="text-lg text-center bg-blue-500 text-white py-2 px-4 rounded">
                {text}
            </p>
            <div className="flex justify-center mt-6">
                <img
                    src={fotoJonathan}
                    alt="Foto de Jonathan"
                    className="rounded-full shadow-md w-48 h-48 object-cover"
                />
            </div>
        </div>
    );
};

export default Home;


