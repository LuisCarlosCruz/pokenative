export const GET_POK_BY_NAME = 'GET_POK_BY_NAME';

// payload nome dado por convenção para dados recebidos do componente;
export const getPokByName = (payload) => {
  return {
    type: GET_POK_BY_NAME,
    payload,
  }
};
