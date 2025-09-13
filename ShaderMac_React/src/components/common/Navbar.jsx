import React, { useState } from "react";

const Navbar = ({ setPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        setPage("login");
        alert("✔ Sesión cerrada");
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

                {/* Enlaces desktop */}
                <div className="flex items-center space-x-8">
                    <a href="#" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                        Inicio
                    </a>
                    <a href="#" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                        En Estreno
                    </a>
                    <a href="#" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                        Preventa
                    </a>
                    <a href="#" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium">
                        Próximamente
                    </a>
                    <a href="#" className="text-[#000000] hover:text-[#ad2e36] no-underline hover:underline p-3 font-medium flex items-center">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                        Ubicaciones
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="bg-[#ad2e36] text-white px-4 py-2 rounded-md font-medium flex items-center hover:bg-[#9c0720] transition duration-200">
                        <i className="fas fa-cog mr-2"></i>
                        Admin
                    </button>
                    <button onClick={handleLogout} className="border border-[#d6a709] text-[#000000] px-4 py-2 rounded-md font-medium hover:bg-[#fed900] transition duration-200">
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
                    <button className="w-full text-left px-3 py-2 text-red-600 font-medium">
                        Admin
                    </button>
                    <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-red-600 font-medium">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
