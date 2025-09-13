// src/router.jsx
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    NavLink,
} from "react-router-dom";

import Login from "../components/auth/Login";
import Home from "../pages/Home";
import MoviesAdmin from "../pages/MoviesAdmin";
import UsersAdmin from "../pages/UsersAdmin";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// auth mínima basada en localStorage
const isLoggedIn = () => Boolean(localStorage.getItem("token"));

function AppLayout() {
    const base = "btn px-3 py-2";
    const cls = (active) =>
        `${base} ${active ? "btn-danger text-white" : "btn-outline-danger"}`;

    return (
        <div className="text-center d-flex flex-col min-vh-100">
        <Navbar />

        {/* Accesos rápidos dentro del layout protegido */}
        <div className="d-flex gap-2 justify-content-center my-3">
            <NavLink to="/" end className={({ isActive }) => cls(isActive)}>
                Home
            </NavLink>
            <NavLink to="/users" className={({ isActive }) => cls(isActive)}>
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

function Protected() {
    return isLoggedIn() ? <AppLayout /> : <Navigate to="/login" replace />;
}

const router = createBrowserRouter([
    { path: "/login", element: <Login /> },

    {
        element: <Protected />,
        children: [
            { index: true, element: <Home /> }, // "/" como índice del layout
            { path: "movies", element: <MoviesAdmin /> },
            { path: "users", element: <UsersAdmin /> },
        ],
    },

    { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
