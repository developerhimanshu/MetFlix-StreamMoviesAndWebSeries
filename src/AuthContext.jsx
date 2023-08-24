import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./pages/loading";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (token && userData) {
      setUser(userData);
    }
  }, []);
  const login = (userData) => {
    // Set user data based on the response
    setUser(userData);
    navigate("/");
  };

  const logout = () => {
    // Clear user data on logout
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
