import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { TOGGLESIDEBAR } from "./action";
import reducer from "./reducer";
const initialState = {
  toggleSidebarValue: false,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLESIDEBAR });
  };
  return (
    <AppContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppcontext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppcontext, initialState };
