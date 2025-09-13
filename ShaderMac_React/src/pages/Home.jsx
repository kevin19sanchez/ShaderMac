import Navbar from '../components/common/Navbar'
import React from 'react'

const Home = () => {
    return (
        <>
            <main className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center py-5">
                            <h1 className="display-4 text-danger fw-bold">Bienvenido a ShaderMac</h1>
                            <p className="lead text-muted">Tu experiencia cinematográfica premium</p>
                            <div className="mt-4">
                                <p className="text-muted">Contenido principal en construcción...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
