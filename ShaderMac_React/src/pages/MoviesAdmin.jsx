import React, { useState } from 'react'
import Navbar from '../components/common/Navbar'
import axios from 'axios'

const MoviesAdmin = () => {
    //Estado del formulario
    const [formData, setFormData] = useState({
        titulo: '',
        anioEstreno: '',
        paisOrigen: '',
        idioma: '',
        genero: '',
        tiempoEjecucion: '',
        sinopsis: '',
        urlPoster: '',
        estado: ''
    })

    const [loading, setLoading] = useState(false)

    // Opciones para los dropdowns
    const generos = [
        'Acción',
        'Aventura',
        'Ciencia Ficción',
        'Comedia',
        'Drama',
        'Fantasía',
        'Horror',
        'Musical',
        'Romance',
        'Suspenso',
        'Thriller',
        'Western'
    ];

    const estados = [
        'En Estreno',
        'Preventa',
        'Próximamente'
    ];

    // Manejo de cambios en el formulario
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Limpiar formulario
    const handleClearForm = () => {
        setFormData({
            titulo: '',
            anioEstreno: '',
            paisOrigen: '',
            idioma: '',
            genero: '',
            tiempoEjecucion: '',
            sinopsis: '',
            urlPoster: '',
            estado: ''
        })
    }

    // Configuración de Firebase
    const FIREBASE_URL = 'https://shadermac-6af4c-default-rtdb.firebaseio.com/peliculas.json'

    // CRUD - CREATE: Función para guardar película en Firebase
    const saveMovies = async(movieData) =>{
        try {
            const response = await axios.post(FIREBASE_URL, {
                ...movieData,
                fechaCreacion: new Date().toISOString(),
                activa: true
            })
            return response.data
        } catch (error) {
            console.error('Error guardando pelicula: ', error)
            throw error;
        }
    }

    // CRUD - READ: Función para obtener todas las películas
    /*const getMovies = async () =>{
        try{
            const response = await axios.get(FIREBASE_URL)
            return response.data
        }catch(error){
            console.error('Error obteniendo películas:', error);
            throw error;
        }
    }*/

    // CRUD - UPDATE: Función para actualizar película
    /*const updateMovies = async(MoviesAdmin, movieData) => {
        try {
            const updateURL = ''
            const response = await axios.put(updateURL, {
                ...movieData,
                fechaActulizacion: new Date().toISOString()
            })
            return response.data
        } catch (error) {
            console.error('Error actualizando películas:', error);
            throw error;
        }
    }*/

    // CRUD - DELETE: Función para eliminar película
    /*const deleteMovies = async(movieId) => {
        try{const deleteURL = ''
            const response = await axios.delete(deleteURL)
            return response.data
        }catch(error){
            console.error('Error actualizando películas:', error);
            throw error;
        }
    } */

    // Manejo del envío del formulario
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Validar que todos los campos estén completos
            const requiredFields = Object.keys(formData)
            const emptyFields = requiredFields.filter(field => !formData[field].trim())

            if(emptyFields.length > 0){
                alert(`Por favor completa los siguientes campos: ${emptyFields.join(', ')}`)
                setLoading(false)
                return
            }

            // Guardar en Firebase
            await saveMovies(formData)

            // Mostrar mensaje de éxito
            alert('¡Película agregada exitosamente!');

            // Limpiar formulario
            handleClearForm()
        } catch (error) {
            alert('Error al agregar la película. Por favor intenta de nuevo.');
            console.error('Error:', error);
        }finally{
            setLoading(false)
        }
    }

    return (
        <>
            {/* Main Content */}
            <main className="container-fluid mt-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
                {/* Hero Section */}
                <div className="row">
                    <div className="col-12">
                        <div className="text-center py-4" style={{ backgroundColor: '#ffe6e6' }}>
                            <h1 className="display-5 text-danger fw-bold mb-2">Administrar Películas</h1>
                            <p className="lead text-muted">Agrega y gestiona el catálogo de películas de ShaderMac</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-4">
                                {/* Form Header */}
                                <div className="text-center mb-4">
                                    <i className="fas fa-film text-danger mb-3" style={{ fontSize: '2.5rem' }}></i>
                                    <h2 className="text-danger fw-bold mb-2">Agregar Nueva Película</h2>
                                    <p className="text-muted">Completa todos los campos para agregar una pelicula</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        {/* Título de la Película */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="titulo" className="form-label fw-medium">
                                                Título de la Película <span className='text-danger'>*</span>
                                            </label>
                                            <input type="text" className="form-control" id="titulo" name="titulo"
                                            placeholder="Ej: Avatar: El Camino del Agua"
                                            value={formData.titulo} onChange={handleChange} required
                                            disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem' }}/>
                                        </div>

                                        {/* Año de Estreno */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="anioEstreno" className="form-label fw-medium">
                                                Año de Estreno <span className="text-danger">*</span>
                                            </label>
                                            <input type="number" className="form-control" id="anioEstreno"
                                            name="anioEstreno" placeholder="2024" min="1900" max="2030"
                                            value={formData.anioEstreno} onChange={handleChange} required
                                            disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem' }}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* País de Origen */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="paisOrigen" className="form-label fw-medium">
                                                País de Origen <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" id="paisOrigen"
                                            name="paisOrigen" placeholder="Ej: Estados Unidos"
                                            value={formData.paisOrigen} onChange={handleChange} required
                                            disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem' }}/>
                                        </div>

                                        {/* Idioma */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idioma" className="form-label fw-medium">
                                                Idioma <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" id="idioma"
                                            name="idioma" placeholder="Ej: Inglés, Español"
                                            value={formData.idioma} onChange={handleChange} required
                                            disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem' }}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* Género */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="genero" className="form-label fw-medium">
                                                Género <span className="text-danger">*</span>
                                            </label>
                                            <select className="form-select" id="genero" name="genero"
                                            value={formData.genero} onChange={handleChange} required
                                            disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem' }}>
                                                <option value="">Selecciona un género</option>
                                                {generos.map((genero) =>(
                                                    <option key={genero} value={genero}>
                                                        {genero}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Tiempo de Ejecución */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="tiempoEjecucion" className="form-label fw-medium">
                                                Tiempo de Ejecución <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" id="tiempoEjecucion"
                                            name="tiempoEjecucion" placeholder="Ej: 120 min" value={formData.tiempoEjecucion}
                                            onChange={handleChange} required disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem' }}/>
                                        </div>
                                    </div>

                                    {/* Sinopsis */}
                                    <div className="mb-3">
                                        <label htmlFor="sinopsis" className="form-label fw-medium">
                                            Sinopsis <span className="text-danger">*</span>
                                        </label>
                                        <textarea className="form-control" id="sinopsis" name="sinopsis"
                                        rows="4" placeholder="Describe brevemente la trama de la película..."
                                        value={formData.sinopsis} onChange={handleChange} required
                                        disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem', resize: 'vertical' }}>                                            
                                        </textarea>
                                    </div>

                                    <div className="row">
                                        {/* URL del Poster */}
                                        <div className="col-md-8 mb-3">
                                            <label htmlFor="urlPoster" className="form-label fw-medium">
                                                URL del Poster <span className="text-danger">*</span>
                                            </label>
                                            <input type="url" className="form-control" id="urlPoster"
                                            name="urlPoster" placeholder="https://ejemplo.com/poster.jpg"
                                            value={formData.urlPoster} onChange={handleChange} required
                                            disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem' }}/>
                                        </div>

                                         {/*Botón de descarga (decorativo) */}
                                        <div className="col-md-4 mb-3 d-flex align-items-end">
                                            <button type="button" className="btn btn-outline-danger w-100"
                                            style={{ borderRadius: '8px', padding: '0.75rem' }}
                                            onClick={() => alert('Funcionalidad de descarga no implementada')}
                                            disabled={loading}>
                                                <i className="fas fa-download me-2"></i>
                                                Descargar
                                            </button>
                                        </div>
                                    </div>

                                    {/* Estado de la Película */}
                                    <div className="mb-4">
                                        <label htmlFor="estado" className="form-label fw-medium">
                                            Estado de la Película <span className="text-danger">*</span>
                                        </label>
                                        <select className="form-select" id="estado" name="estado"
                                        value={formData.estado} onChange={handleChange} required
                                        disabled={loading} style={{ borderRadius: '8px', padding: '0.75rem' }}>
                                            <option value="">Selecciona el estado</option>
                                            {estados.map((estado) => (
                                                <option key={estado} value={estado}>
                                                    {estado}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Form Buttons */}
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <button type="submit" className="btn btn-danger w-100 fw-medium py-3"
                                            style={{ borderRadius: '8px' }}  disabled={loading}>
                                                {loading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Guardando...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fas fa-plus me-2"></i>
                                                        Agregar Película
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <button type="button" className="btn btn-outline-danger w-100 fw-medium py-3"
                                            style={{ borderRadius: '8px' }} onClick={handleClearForm}
                                            disabled={loading}>
                                                <i className="fas fa-broom me-2"></i>
                                                Limpiar Formulario
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MoviesAdmin
