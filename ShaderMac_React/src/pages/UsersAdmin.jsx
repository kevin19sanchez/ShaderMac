import React, { useState, useEffect } from 'react';
import { ref, push, onValue, remove, update } from 'firebase/database';
import {database} from '../services/firebase'

const UsersAdmin = () => {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [editingUser, setEditingUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Obtener usuarios de Firebase
    useEffect(() => {
        const usersRef = ref(database, 'usuario/usuarios')
        const unsubscribe = onValue(usersRef, (snapshot) =>{
            const data = snapshot.val()
            if(data){
                const usersArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }))
                setUsers(usersArray)
            }else{
                setUsers([])
            }
        })
        return () => unsubscribe()
    }, [])

    // Manejar cambios en el formulario
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Agregar o actualizar usuario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const userData = {
                email: formData.email,
                password: formData.password,
                fechaRegistro: new Date().toISOString().split('T')[0]
            }

            if(editingUser){
                // Actualizar usuario existente
                const userRef = ref(database, `usuario/usuarios/${editingUser.id}`);
                await update(userRef, userData);
                setEditingUser(null)
            }else{
                // Crear nuevo usuario
                const usersRef = ref(database, 'usuario/usuarios');
                await push(usersRef, userData);
            }

            // Limpiar formulario
            setFormData({
                email: '',
                password: ''
            })

            alert(editingUser ? 'Usuario actualizado correctamente' : 'Usuario agregado correctamente');
        } catch (error) {
            console.error('Error al guardar usuario:', error);
            alert('Error al guardar el usuario');
        }finally{
            setLoading(false)
        }
    }

    // Eliminar usuario
    const handleDelete = async(userId) => {
        if(window.confirm('¿Estás seguro de que quieres eliminar este usuario?')){
            try {
                const userRef = ref(database, `usuario/usuarios/${userId}`);
                await remove(userRef);
                alert('Usuario eliminado correctamente');
            } catch (error) {
                console.error('Error al eliminar usuario:', error);
                alert('Error al eliminar el usuario');
            }
        }
    }

    // Editar usuario
    const handleEdit = (user) => {
        setEditingUser(user)
        setFormData({
            email: user.email,
            password: user.password
        })
    }

    // Cancelar edición
    const handleCancelEdit = () =>{
        setEditingUser(null)
        setFormData({
            email: '',
            password:''
        })
    }

    return (
        <>
            <main className="container-fluid" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingTop: "2rem" }}>
            {/* Header */}
            <header className="row mb-5">
                <section className="col-12 text-center">
                <h1 className="text-danger fw-bold mb-2">Administrar Usuarios</h1>
                <p className="text-muted">Gestiona los usuarios del sistema ShaderMac</p>
                </section>
            </header>

            <section className="row justify-content-center">
                {/* Formulario Agregar Usuario */}
                <article className="col-lg-4 col-md-6 mb-4">
                <section
                    className="card shadow-sm h-100"
                    style={{ backgroundColor: "#fff2f2", border: "none" }}
                >
                    <div className="card-body text-center">
                    <div className="mb-4">
                        <i className="fas fa-users text-danger" style={{ fontSize: "3rem" }}></i>
                    </div>

                    <h2 className="text-danger fw-bold mb-2">
                        {editingUser ? "Editar Usuario" : "Agregar Usuario"}
                    </h2>
                    <p className="text-muted mb-4">
                        {editingUser
                        ? "Modifica los datos del usuario"
                        : "Registra un nuevo usuario en el sistema"}
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label fw-bold">
                            Correo Electrónico <span className="text-danger">*</span>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="usuario@email.com"
                            required
                        />
                        </div>

                        <div className="mb-4 text-start">
                        <label htmlFor="password" className="form-label fw-bold">
                            Contraseña <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                            <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••"
                            required
                            />
                            <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                            >
                            <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                        </div>
                        </div>

                        <div className="d-grid gap-2">
                        <button
                            type="submit"
                            className="btn btn-danger fw-bold"
                            disabled={loading}
                        >
                            {loading ? (
                            <>
                                <i className="fas fa-spinner fa-spin me-2"></i>
                                {editingUser ? "Actualizando..." : "Agregando..."}
                            </>
                            ) : (
                            editingUser ? "Actualizar" : "Agregar"
                            )}
                        </button>

                        {editingUser && (
                            <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCancelEdit}
                            >
                            Cancelar
                            </button>
                        )}
                        </div>
                    </form>
                    </div>
                </section>
                </article>

                {/* Tabla de Usuarios */}
                <article className="col-lg-8 col-md-12">
                <section className="card shadow-sm" style={{ border: "none" }}>
                    <header className="card-header bg-white border-0 pb-0">
                    <h2 className="text-danger fw-bold mb-1">Usuarios Registrados</h2>
                    <p className="text-muted mb-0">Lista de todos los usuarios en el sistema</p>
                    </header>
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                        <thead>
                            <tr className="border-bottom">
                            <th scope="col" className="fw-bold text-dark">Email</th>
                            <th scope="col" className="fw-bold text-dark">Contraseña</th>
                            <th scope="col" className="fw-bold text-dark">Fecha Registro</th>
                            <th scope="col" className="fw-bold text-dark text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.fechaRegistro}</td>
                                        <td className='text-center'>
                                            <button className="btn btn-sm btn-warning me-2"
                                            onClick={() => handleEdit(user)}>
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(user.id)}>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center text-muted"></td>
                                    No hay usuarios registrados
                                </tr>
                            )}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </section>
                </article>
            </section>
            </main>
        </>
    )
}

export default UsersAdmin
