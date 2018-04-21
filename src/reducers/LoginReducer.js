import { actions } from '../constants';

const INITIAL_STATE = {
  userName: '',
};
export default (state = INITIAL_STATE, action) => {
  //console.log(action.payload);
  switch (action.type) {
    case actions.ACTION_USERNAME:
      return { ...state, userName: action.payload };
    case actions.ACTION_LOGGEDOUT:
      return { INITIAL_STATE };
    default: return { ...state };
  }
};
