import React, { FC, useEffect, useState } from 'react';
import api from '../../api';

// Importando os ícones em PNG
import ProjectIcon from '../../assets/icons/project.png';
import TrashIcon from '../../assets/icons/trash.png';
import AddIcon from '../../assets/icons/add.png';

interface Projeto {
  _id?: string;
  title: string;
  description: string;
  url?: string;
}

const Projetos: FC = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Buscar projetos ao carregar o componente
  useEffect(() => {
    api.get('/projects')
      .then((response) => setProjetos(response.data))
      .catch((error) => console.error('Erro ao buscar projetos:', error));
  }, []);

  const handleLogin = () => {
    const password = prompt('Digite a senha de administrador:');
    if (password === 'Galoplacas2025') {
      alert('Login bem-sucedido!');
      setIsAdmin(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const adicionarProjeto = async () => {
    const title = prompt('Digite o título do projeto:')?.trim();
    const description = prompt('Digite a descrição do projeto:')?.trim();
    const url = prompt('Digite o link (opcional):')?.trim();

    if (!title || !description) {
      alert('Título e descrição são obrigatórios!');
      return;
    }

    const novoProjeto = { title, description, url: url || undefined };

    try {
      const response = await api.post('/projects', novoProjeto);
      setProjetos([...projetos, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar projeto:', error);
      alert('Erro ao adicionar projeto. Tente novamente.');
    }
  };

  const deletarProjeto = async (_id?: string) => {
    if (window.confirm('Tem certeza que deseja deletar este projeto?')) {
      try {
        await api.delete(`/projects/${_id}`);
        setProjetos(projetos.filter((projeto) => projeto._id !== _id));
      } catch (error) {
        console.error('Erro ao deletar projeto:', error);
        alert('Erro ao deletar projeto. Tente novamente.');
      }
    }
  };

  return (
    <div id="projetos" className="p-8 bg-white text-black shadow-md rounded-lg m-4 border border-gray-200">
      {/* Substituí FaProjectDiagram por uma imagem */}
      <h1 className="text-3xl font-semibold mb-4 text-center flex items-center justify-center">
        <img src={ProjectIcon} alt="Meus Projetos" className="mr-2 w-8 h-8" /> Meus Projetos
      </h1>

      {!isAdmin && (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-black transition"
        >
          <img src={AddIcon} alt="Login de Administrador" className="mr-2 w-6 h-6" /> Login de Administrador
        </button>
      )}

      {isAdmin && (
        <button
          onClick={adicionarProjeto}
          className="bg-green-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-black transition"
        >
          <img src={AddIcon} alt="Adicionar Projeto" className="mr-2 w-6 h-6" /> Adicionar Projeto
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projetos.map((projeto) => (
          <div
            key={projeto._id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white text-black text-center"
          >
            <h2 className="text-2xl font-bold mb-2">{projeto.title}</h2>
            <p className="mb-4">{projeto.description}</p>
            {projeto.url && (
              <a
                href={projeto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver Projeto
              </a>
            )}
            {isAdmin && (
              <button
                onClick={() => deletarProjeto(projeto._id)}
                className="text-red-500 flex items-center justify-center mt-4 hover:underline"
              >
                <img src={TrashIcon} alt="Deletar" className="mr-2 w-6 h-6" /> Deletar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;



