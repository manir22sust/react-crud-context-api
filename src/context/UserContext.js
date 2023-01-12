import { createContext, useReducer } from "react";
import { userReducer } from "./userReducer";

// Initial State
const initialState = {
  users: [],
};

// Create Context
export const UserContext = createContext(initialState);

// Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Actions

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };
  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };

  const UserValue = {
    users: state.users,
    addUser,
    editUser,
    deleteUser,
  };

  return (
    <UserContext.Provider value={UserValue}>{children}</UserContext.Provider>
  );
};
