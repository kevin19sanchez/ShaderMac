import React from 'react'

const Navbar = ({setPage}) => {
    const handleLogout = () =>{
        setPage("login")
        alert('✔ Sesion cerrada')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <i className="fas fa-film text-danger me-2" style={{ fontSize: '1.5rem' }}></i>
                    <span className="fw-bold text-danger" style={{ fontSize: '1.25rem' }}>
                        ShaderMac
                    </span>
                </a>

                {/* Toggler for mobile */}
                <button className="navbar-toggler" type='button' data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Left side navigation */}
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active fw-medium" href="#" aria-current="page">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link fw-medium">
                                Preventa
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link fw-medium">
                                Próximamente
                            </a>
                        </li>
                    </ul>

                    {/* Right side navigation */}
                    <ul className="navbar-nav">
                        {/* Ubicaciones */}
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center fw-medium" href="#">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                Ubicaciones
                            </a>
                        </li>

                        {/* Admin Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center text-white bg-danger rounded px-3 py-2 fw-medium" 
                            href="#" id="adminDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" style={{ textDecoration: 'none' }}>
                                <i className="fas fa-cog me-2"></i>
                                Admin
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="adminDropdown">
                                <li>
                                    <a className="dropdown-item d-flex align-items-center py-2" href="#">
                                        <i className="fas fa-film me-2 text-danger"></i>
                                        Gestionar Películas
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center py-2" href="#">
                                        <i className="fas fa-users me-2 text-danger"></i>
                                        Gestionar Usuarios
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        {/* Logout Button */}
                        <li className="nav-item ms-2">
                            <button className="btn btn-outline-danger fw-medium px-3"
                            onClick={handleLogout} style={{borderRadius:'6px'}}>
                                Cerrar Sesion
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
