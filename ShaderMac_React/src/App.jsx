// src/App.jsx
import { Routes, Route, Navigate, Outlet, NavLink } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./pages/Home";
import MoviesAdmin from "./pages/MoviesAdmin";
import UsersAdmin from "./pages/UsersAdmin";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const useAuth = () => {
  const token = localStorage.getItem("token");
  return { isLoggedIn: Boolean(token) };
};

function AppLayout() {
  const linkBase = "btn px-3 py-2";
  const linkClass = (isActive) =>
    `${linkBase} ${isActive ? "btn-danger text-white" : "btn-outline-danger"}`;

  return (
    <div className="text-center d-flex flex-column min-vh-100">
      <Navbar />

      {/* Barra de accesos rápidos dentro del layout */}
      <div className="d-flex gap-2 justify-content-center my-3">
        <NavLink to="/" end className={({ isActive }) => linkClass(isActive)}>
          Home
        </NavLink>
        <NavLink to="/movies" className={({ isActive }) => linkClass(isActive)}>
          Admin
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => linkClass(isActive)}>
          Users
        </NavLink>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

function ProtectedRoutes() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <AppLayout /> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesAdmin />} />
        <Route path="/users" element={<UsersAdmin />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
