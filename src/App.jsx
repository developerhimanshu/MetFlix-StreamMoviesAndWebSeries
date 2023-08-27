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
import Favourites from "./pages/Favourites";
import WatchLater from "./pages/WatchLater";
import Actors from "./pages/Actors";

function App() {
  const { user } = useAuth();
  const renderRoutes = () => {
    if (!user) {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      );
    } else {
      return (
        <div className="flex ">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Nav />
            <Routes>
              <Route path="/" element={<MainHome />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="/actors/:id" element={<Actors />} />
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
