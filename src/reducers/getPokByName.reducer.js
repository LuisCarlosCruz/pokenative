import { GET_POK_BY_NAME } from '../actions/index.action';

const pokemon = (state = [], action) => {
  switch (action.type) {
  case GET_POK_BY_NAME:
    return [...action];
  default:
    return state;
  }
};

export default pokemon;