import {createContext, useContext, useEffect} from "react";
import {currentUser} from "./DB/apiAuth";
import useFetch from "./hooks/useFetch";

const UrlContext = createContext();

const UrlProvider = ({children}) => {
  const {data: user, loading, fn: fetchUser} = useFetch(currentUser);

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UrlContext.Provider value={{user, fetchUser, loading, isAuthenticated}}>
      {children}
    </UrlContext.Provider>
  );
};

export const UrlState = () => {
  return useContext(UrlContext);
};

export default UrlProvider;