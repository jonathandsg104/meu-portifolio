import React, { FC } from 'react';
import SobremimIcon from '../../assets/icons/sobremim.png';
import FormacaoIcon from '../../assets/icons/formacao.png';
import ExperienciaIcon from '../../assets/icons/experiencia.png';
import CertificadosIcon from '../../assets/icons/certificados.png';
import HabilidadesIcon from '../../assets/icons/habilidades.png';

const Sobre: FC = () => {
  return (
    <div id="sobre" className="p-8 bg-white text-black shadow-md rounded-lg m-4 border border-gray-200">
      <h1 className="text-3xl font-semibold mb-4 text-center flex items-center justify-center">
        <img src={SobremimIcon} alt="Sobre Mim" className="mr-2 w-8 h-8" /> Sobre Mim
      </h1>
      <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4 shadow hover:shadow-lg transition-shadow duration-300">
        <p className="text-base leading-6">
          Sou um profissional apaixonado por tecnologia, com perfil organizado, ético e comunicativo. Sempre busco novos desafios e aprendizado contínuo para me desenvolver na área de tecnologia. Meu objetivo é crescer profissionalmente, adquirindo mais conhecimento e experiência.
        </p>
        <p className="text-base mt-4 leading-6">
          Com formação em Tecnologia da Informação e Comunicação, e experiência em funções administrativas e operacionais, estou em transição para a área de desenvolvimento, focando em programação com JavaScript, React, Node.js, TypeScript e React Native. Tenho habilidades em comunicação, trabalho em equipe e resolução de problemas. Estou motivado a aplicar meus conhecimentos em projetos de desenvolvimento de software, contribuindo para o crescimento e inovação da empresa.
        </p>
      </div>
      <h2 className="text-2xl font-bold mt-8 flex items-center">
        <img src={FormacaoIcon} alt="Formação Acadêmica" className="mr-2 w-8 h-8" /> Formação Acadêmica
      </h2>
      <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4 shadow hover:shadow-lg transition-shadow duration-300">
        <ul className="list-disc pl-5">
          <li>Tecnologia da Informação e Comunicação - Universidade Federal de Santa Catarina (UFSC) | Concluído em 2019</li>
          <li>Ciência da Computação (Incompleto) - Universidade do Extremo Sul Catarinense (UNESC)</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 flex items-center">
        <img src={ExperienciaIcon} alt="Experiência Profissional" className="mr-2 w-8 h-8" /> Experiência Profissional
      </h2>
      <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4 shadow hover:shadow-lg transition-shadow duration-300">
        <div className="job mt-4">
          <h3 className="text-xl font-semibold">Proprietário - Galo Placas Veiculares Ltda</h3>
          <p className="italic">Jacinto Machado-SC | Agosto 2022 - Atual</p>
          <ul className="list-disc pl-5">
            <li>Gestão administrativa e operacional da empresa, assegurando o cumprimento de prazos e metas estabelecidas.</li>
            <li>Comunicação com clientes e parceiros comerciais, garantindo relacionamentos duradouros e satisfatórios.</li>
            <li>Coordenação de processos internos, incluindo vendas, controle de estoque e gestão de entregas de produtos.</li>
            <li>Acompanhamento financeiro, como controle de fluxo de caixa e planejamento de custos e investimentos.</li>
            <li>Desenvolvimento de estratégias comerciais para aumento de vendas e expansão da clientela, com foco em resultados sustentáveis.</li>
          </ul>
        </div>
        {/* Experiências adicionais podem ser adicionadas aqui */}
      </div>
      <h2 className="text-2xl font-bold mt-8 flex items-center">
        <img src={CertificadosIcon} alt="Cursos Complementares" className="mr-2 w-8 h-8" /> Cursos Complementares
      </h2>
      <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4 shadow hover:shadow-lg transition-shadow duration-300">
        <ul className="list-disc pl-5">
          <li>Fullstack JavaScript | OneBitcode | 2022</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 flex items-center">
        <img src={HabilidadesIcon} alt="Habilidades" className="mr-2 w-8 h-8" /> Habilidades
      </h2>
      <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4 shadow hover:shadow-lg transition-shadow duration-300">
        <ul className="list-disc pl-5">
          <li>Desenvolvimento em JavaScript</li>
          <li>Criação de interfaces com React</li>
          <li>Programação para dispositivos móveis com React Native</li>
          <li>Desenvolvimento de backend com Node.js</li>
          <li>Manipulação de bancos de dados com SQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Sobre;



