import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");       // invalida la sesión
        navigate("/login", { replace: true });  // redirige al login
    };

    return (
        <nav className="bg-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
            {/* Logo */}
                <div className="flex items-center">
                    <i className="fas fa-film text-[#ad2e36] fw-bold text-2xl mr-2"></i>
                    <span className="font-bold text-[#ad2e36] fw-bold text-xl">ShaderMac</span>
                </div>

                <div className="flex items-center space-x-8">
                    <NavLink to="/" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                            Inicio
                    </NavLink>
                    <NavLink to="/moviesCard" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                            En Estreno
                    </NavLink>
                    <NavLink to="/moviesCard" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                            Preventa
                    </NavLink>
                    <NavLink to="/moviesCard" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                            Próximamente
                    </NavLink>
                    <NavLink to="/locations" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                            Ubicaciones
                    </NavLink>
                </div>
                <div className="flex items-center space-x-3">
                    <NavLink to="/movies" className="bg-[#ad2e36] text-white no-underline px-4 py-2 rounded-md font-medium flex items-center hover:bg-[#9c0720] transition duration-200">
                        <i className="fas fa-cog mr-2"></i>
                            Admin
                    </NavLink>

                    <button onClick={handleLogout} className="border border-[#d6a709] text-[#000000] px-4 py-2 rounded-md font-medium hover:bg-[#fed900] transition duration-200" type="button">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
            <div className="lg:hidden bg-gray-50 border-t border-gray-200">
                <div className="px-4 pt-2 pb-3 space-y-1">
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium">
                        Inicio
                    </a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium">
                        Preventa
                    </a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium">
                        Próximamente
                    </a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium">
                        Ubicaciones
                    </a>
                    <NavLink to="/movies" className="bg-[#ad2e36] text-white px-4 py-2 rounded-md font-medium flex items-center hover:bg-[#9c0720] transition duration-200">
                        <i className="fas fa-cog mr-2"></i>
                            Admin
                    </NavLink>

                    <button onClick={handleLogout} className="border border-[#d6a709] text-[#000000] px-4 py-2 rounded-md font-medium hover:bg-[#fed900] transition duration-200" type="button">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
