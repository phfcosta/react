import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  console.log(config.URL_BACKEND_TOP);

  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possivel pegar os dados :(');
    });
}

function getAll() {
  console.log(config.URL_BACKEND_TOP);

  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possivel pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
