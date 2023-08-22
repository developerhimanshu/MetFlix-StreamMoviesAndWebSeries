import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./pages/loading";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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
