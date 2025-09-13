import { useState } from 'react'
import Login from './components/auth/Login'
import Home from './pages/Home'
import MoviesAdmin from './pages/MoviesAdmin'
import UsersAdmin from './pages/UsersAdmin'
import Navbar from './components/common/Navbar'



function App() {
  const [page, setPage] = useState("login")

  const isLoggedIn = page !== "login"

  return (
    
      <div className="container text-center mt-5">
        {isLoggedIn && <Navbar setPage={setPage}/>}
      {page === "login" && (
        <>
        
          <Login setPage={setPage}/>
          <div className="mt-3">
            <button  
              className="btn btn-primary" 
              onClick={() => setPage("home")}>
              Ir a Home
            </button>
          </div>
        </>
      )}

      {page === "home" && (
        <>
          <Home />
          <div className="mt-3">
            <button  
              className="btn btn-secondary" 
              onClick={() => setPage("login")}>
              Volver al Login
            </button>
            <button
              className="btn btn-warning ms-2"
              onClick={() => setPage("moviesAdmin")}>
              Ir a MoviesAdmin
            </button>
          </div>
        </>
      )}

      {page === "moviesAdmin" && (
        <>
          <MoviesAdmin />
          <div className="mt-3">
            <button  
              className="btn btn-secondary" 
              onClick={() => setPage("login")}>
              Volver al Login
            </button>
            <button  
              className="btn btn-secondary" 
              onClick={() => setPage("home")}>
              Ir a Home
            </button>
            <button  
              className="btn btn-secondary" 
              onClick={() => setPage("usersAdmin")}>
              Ir a Usuarios
            </button>
          </div>
        </>
      )}

      {page === "usersAdmin" && (
        <>
          <UsersAdmin />
          <div className='mt-3'>
            <button  
              className="btn btn-secondary" 
              onClick={() => setPage("login")}>
              Volver al Login
            </button>
            <button  
              className="btn btn-secondary" 
              onClick={() => setPage("home")}>
              Ir a Home
            </button>
          </div>
        </>
      )}
    </div>    
  )
}

export default App

/**
 * <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
 * 

      <div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
 */
