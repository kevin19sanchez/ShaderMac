import React, { useState } from 'react'
import { database } from '../../services/firebase'
import { ref, get, child } from 'firebase/database'

const Login = ({setPage}) => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            // referencia a los usuarios
            const dbRef =  ref(database)
            const snapshot = await get(child(dbRef, "usuario/usuarios"))

            if(snapshot.exists()){
                const data = snapshot.val()

                //convertir en array
                const usersArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key]
                }))

                //buscar si existe el usuario
                const userFound = usersArray.find(
                    (u) => u.email === formData.email && u.password === formData.password
                )

                if(userFound){
                    alert("✔ Login Correcto")
                    setPage("home")
                }else{
                    alert("❌ Usuario o contraseña incorrectos")
                }
            }else{
                alert("No hay usuarios registrados en el sistema")
            }
        } catch (error) {
            console.error("Error al autenticar: ", error)
            alert("Ocurrio un erro en el login")
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f5f5f0' }}>
            {/* Main Content */}
            <div className="flex-grow-1 d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-lg-4">
                             {/* Brand Section */}
                            <div className="text-center mb-4">
                                <h1 className="fw-bold mb-2"style={{ color: '#dc3545', fontSize: '3rem' }}>
                                    ShaderMac
                                </h1>
                                <p className="mb-5" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                                    Tu experiencia cinematrográfica premium
                                </p>
                            </div>

                            {/* Login Card */}
                            <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4">
                                    <h2 className="text-center fw-semibold mb-2" style={{ color: '#dc3545', fontSize: '1.5rem' }}>
                                        Iniciar Sesion
                                    </h2>
                                    <p className="text-center mb-4" style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                                        Ingresa tus crendenciales para acceder
                                    </p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label fw-medium" style={{ color: '#333' }}>
                                                Correo Electrónico
                                            </label>
                                            <input type="email" className="form-control" id="email" name="email"
                                            placeholder='ejemplo@gmail.com' value={formData.email} onChange={handleChange}
                                            required style={{borderRadius: '8px', border: '1px solid #ddd', padding: '0.75rem'}}/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label fw-medium" style={{ color: '#333' }}>
                                                Contraseña
                                            </label>
                                            <div className="position-relative">
                                                <input type={showPassword ? 'text' : 'password'}
                                                className="form-control" id="password" name="password"
                                                placeholder='********' value={formData.password}
                                                onChange={handleChange} required
                                                style={{borderRadius: '8px', border: '1px solid #ddd', padding: '0.75rem', paddingRight: '2.5rem'}}/>

                                                <button type='button' className="btn position-absolute end-0 top-50 translate-middle-y me-2"
                                                style={{border: 'none', background: 'none', color: '#6c757d', zIndex: 10}}
                                                onClick={togglePassword}>
                                                    <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                                </button>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-danger w-100 fw-medium"
                                        style={{ borderRadius: '8px', padding: '0.75rem'}}>
                                            Ingresar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
