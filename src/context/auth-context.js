import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, signup } from "../services/sessions-service";
import { getUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser().then(data => {
      setUser(data);
      setTimeout(() => { setIsLoading(false); }, 1000);
    }).catch((_e) => {
      setIsLoading(false);
    });
  }, []);

  function handleLogin(credentials) {
    return login(credentials).then(user => {
      setUser(user);
    }).catch(e => {
      setError(e.message);
    });
  }

  function handleSignUp(data) {
    return signup(data).then(user => {
      setUser(user);
    }).catch(e => {
      setError(e.message);
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        setUser,
        setError,
        login: handleLogin,
        signup: handleSignUp,
        logout: handleLogout
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
