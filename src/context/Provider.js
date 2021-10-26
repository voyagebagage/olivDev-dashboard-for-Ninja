import { createContext, useContext, useState } from "react";

//----------------------------------
const FetchContext = createContext();
const DropDownContext = createContext();
const SingleClientContext = createContext();
const SidebarVisibleContext = createContext();
//----------------------------------
export function useClient() {
  return useContext(SingleClientContext);
}
export function useVisible() {
  return useContext(SidebarVisibleContext);
}
export function useFetch() {
  return useContext(FetchContext);
}
export function useDropDownFilter() {
  return useContext(DropDownContext);
}
//----------------------------------
export const GlobalProvider = ({ children }) => {
  // const [authState, authDispatch] = useReducer(auth, authInitialState);
  // const [contactsState, contactsDispatch] = useReducer(
  //   contacts,
  //   contactsInitialState
  // );
  //----------
  const [fieldDropDown, setFieldDropDown] = useState("companyName");
  const [directionDropDown, setDirectionDropDown] = useState("asc");
  //----------
  const [nextToken, setNextToken] = useState(undefined);
  const [nextNextToken, setNextNextToken] = useState();
  const [previousTokens, setPreviousTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [onEnter, setOnEnter] = useState(false);
  // const [limit, setLimit] = useState(10);
  //-----------------
  //-----------------
  const [clientDetails, setClientDetails] = useState({});
  const [clients, setClients] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  //----------
  const [visible, setVisible] = useState(false);

  return (
    <DropDownContext.Provider
      value={{
        fieldDropDown,
        setFieldDropDown,
        directionDropDown,
        setDirectionDropDown,
      }}
    >
      <FetchContext.Provider
        value={{
          nextToken,
          setNextToken,
          nextNextToken,
          setNextNextToken,
          previousTokens,
          setPreviousTokens,
          isLoading,
          setIsLoading,
          // limit,
          // setLimit,
        }}
      >
        <SidebarVisibleContext.Provider value={{ visible, setVisible }}>
          <SingleClientContext.Provider
            value={{
              clientDetails,
              setClientDetails,
              clients,
              setClients,
              filteredResults,
              setFilteredResults,
            }}
          >
            {children}
          </SingleClientContext.Provider>
        </SidebarVisibleContext.Provider>
      </FetchContext.Provider>
    </DropDownContext.Provider>
  );
};
