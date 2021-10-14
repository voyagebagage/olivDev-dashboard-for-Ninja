import { createContext, useContext, useState } from "react";

//----------------------------------
const SingleClientContext = createContext();
const SidebarVisibleContext = createContext();
//----------------------------------
export function useClient() {
  return useContext(SingleClientContext);
}
export function useVisible() {
  return useContext(SidebarVisibleContext);
}
//----------------------------------
export const GlobalProvider = ({ children }) => {
  // const [authState, authDispatch] = useReducer(auth, authInitialState);
  // const [contactsState, contactsDispatch] = useReducer(
  //   contacts,
  //   contactsInitialState
  // );
  const [clientDetails, setClientDetails] = useState({});
  const [visible, setVisible] = useState(false);

  return (
    <SidebarVisibleContext.Provider value={{ visible, setVisible }}>
      <SingleClientContext.Provider value={{ clientDetails, setClientDetails }}>
        {children}
      </SingleClientContext.Provider>
    </SidebarVisibleContext.Provider>
  );
};
