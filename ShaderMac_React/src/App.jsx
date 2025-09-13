
import { useState } from 'react'
import Login from './components/auth/Login'
import Home from './pages/Home'
import MoviesAdmin from './pages/MoviesAdmin'
import UsersAdmin from './pages/UsersAdmin'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

function App() {
  const [page, setPage] = useState("login");

  const isLoggedIn = page !== "login";

  console.log("Página actual:", page); // Para debug

  return (
    <div className='text-center flex flex-col min-h-screen'>
      {isLoggedIn && <Navbar setPage={setPage} />}

      {page === "login" && <Login setPage={setPage} />}
      {page === "home" && <Home />}
      {page === "moviesAdmin" && <MoviesAdmin />}
      {page === "usersAdmin" && <UsersAdmin />}

      {/* Controles para cambiar página */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {/* {page !== "login" && (
          <button onClick={() => setPage("login")}>
            Volver al Login
          </button>
        )} */}
        {page !== "home" && (
          <button onClick={() => setPage("home")} className="px-5 py-2 bg-red-600 text-black rounded-lg font-medium shadow-md hover:bg-[#ad2e36] transition-all duration-300">
            Ir a Home
          </button>
        )}
        {page !== "moviesAdmin" && (
          <button onClick={() => setPage("moviesAdmin")} className="px-5 py-2 bg-gray-800 text-black rounded-lg font-medium shadow-md hover:bg-[#ad2e36] transition-all duration-300">
            Ir a MoviesAdmin
          </button>
        )}
        {page !== "usersAdmin" && (
          <button onClick={() => setPage("usersAdmin")} className="px-5 py-2 border-2 border-red-600 text-red-600 rounded-lg font-medium hover:bg-[#ad2e36] hover:text-white transition-all duration-300">
            Ir a Usuarios
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
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
