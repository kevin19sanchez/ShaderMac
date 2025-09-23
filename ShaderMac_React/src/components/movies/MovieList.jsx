// src/components/MoviesList.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://shadermac-6af4c-default-rtdb.firebaseio.com/peliculas.json"
        );

        if (response.data) {
          // Convertir objeto {id: data} a array [{id, ...data}]
          const dataArray = Object.entries(response.data).map(([id, movie]) => ({
            id,
            ...movie,
          }));
          setMovies(dataArray);
        } else {
          setMovies([]); // no hay pelis aún
        }
      } catch (error) {
        console.error("Error al traer películas:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container py-4">
      <div className="row g-4">
        {movies.map((movie) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
            <MovieCard
              titulo={movie.titulo}
              urlPoster={movie.urlPoster}
              sinopsis={movie.sinopsis}
              anioEstreno={movie.anioEstreno}
              genero={movie.genero}
              tiempoEjecucion={movie.tiempoEjecucion}
              paisOrigen={movie.paisOrigen}
              idioma={movie.idioma}
              estado={movie.estado}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
