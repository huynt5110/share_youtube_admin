import { POST, GET } from 'lib/api';

const SET_TOKEN = 'SET_TOKEN';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';

// Actions
const initialState = {
  accessToken: null,
  currentUser: null,
  isSignIn: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        isSignIn: true,
        accessToken: action.token,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };

    case AUTH_SIGN_OUT:
      return {
        ...state,
        accessToken: null,
        currentUser: null,
        isSignIn: false,
      };

    default:
      return state;
  }
}


export function setAuthToken(token) {
  return { type: SET_TOKEN, token };
}

export function setCurrentUser(user) {
  return { type: SET_CURRENT_USER, user };
}

export function signOut() {
  return { type: AUTH_SIGN_OUT };
}
