import { createStore } from "redux";

const globalReducer = (state = { user: null, todo: null }, action) => {
  const actionOnType = {
    "user/setUser": (payload) => ({ ...state, user: payload }),
    "todo/setTodo": (payload) => ({ ...state, todo: payload }),
  };

  return actionOnType[action.type]?.(action?.payload);
};

export const store = createStore(globalReducer);
