import { Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainHome from "./pages/MainHome";
import ProfileScreen from "./pages/ProfileScreen";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./components/movies";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import Nav from "./components/Nav";

function App() {
  const { user } = useAuth();
  console.log(user);
  const renderRoutes = () => {
    if (!user) {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/movies" element={<Movies />} /> */}
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        </Routes>
      );
    } else {
      return (
        <div className="flex ">
          <Sidebar />
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<MainHome />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/movies" element={<Movies />} />
            </Routes>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="app">
      {renderRoutes()}
      <Footer />
    </div>
  );
}

export default App;
