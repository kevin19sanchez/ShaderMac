import PropTypes from "prop-types";

const STATUS_TO_BADGE = {
  "En Estreno": { text: "ESTRENO", classes: "bg-red-600" },
  "Preventa": { text: "PREVENTA", classes: "bg-amber-500" },
  "Próximamente": { text: "PRÓX.", classes: "bg-neutral-600" },
};

export default function MovieCard({
  titulo,
  urlPoster,
  sinopsis,
  anioEstreno,
  genero,
  tiempoEjecucion,
  paisOrigen,
  idioma,
  estado,
}) {
  const meta = STATUS_TO_BADGE[estado] ?? null;
  const badgeText = meta?.text;
  const badgeClasses = meta?.classes ?? "bg-red-600";

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex flex-col">
      {/* Poster */}
      <div className="relative bg-neutral-100 aspect-[2/3]">
        <img
          src={urlPoster}
          alt={titulo}
          className="w-full h-full object-cover"
        />
        {badgeText && (
          <span
            className={`absolute right-3 bottom-3 text-white font-semibold rounded-full px-3 py-1 text-xs tracking-wide shadow-md ${badgeClasses}`}
          >
            {badgeText}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5">
        <h3 className="m-0 mb-1.5 text-base font-semibold leading-tight">
          {titulo}
        </h3>

        {sinopsis && (
          <p className="m-0 mb-2.5 text-sm text-neutral-600 leading-snug line-clamp-2">
            {sinopsis}
          </p>
        )}

        <ul className="m-0 p-0 flex flex-wrap gap-2 text-[13px] text-neutral-600 list-none">
          {anioEstreno && <li>{anioEstreno}</li>}
          {genero && <li>{genero}</li>}
          {tiempoEjecucion && <li>{tiempoEjecucion}</li>}
          {paisOrigen && <li>{paisOrigen}</li>}
          {idioma && <li>{idioma}</li>}
        </ul>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  urlPoster: PropTypes.string.isRequired,
  sinopsis: PropTypes.string,
  anioEstreno: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  genero: PropTypes.string,
  tiempoEjecucion: PropTypes.string,
  paisOrigen: PropTypes.string,
  idioma: PropTypes.string,
  estado: PropTypes.oneOf(["En Estreno", "Preventa", "Próximamente"]),
};
