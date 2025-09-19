import PropTypes from "prop-types";

const STATUS_TO_BADGE = {
  now_playing: { text: "ESTRENO", classes: "bg-red-600" },
  pre_sale: { text: "PREVENTA", classes: "bg-amber-500" },
  coming_soon: { text: "PRÓX.", classes: "bg-neutral-600" },
};

export default function MovieCard({
  title,
  posterUrl,
  synopsis,
  year,
  genres = [],
  durationMin,
  country,
  language,
  status,
  badge,
}) {
  const meta = STATUS_TO_BADGE[status] ?? null;
  const badgeText = badge ?? meta?.text;
  const badgeClasses = meta?.classes ?? "bg-red-600";

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex flex-col">
      <div className="relative bg-neutral-100 aspect-[2/3]">
        <img src={posterUrl} alt={title} className="w-full h-full object-cover" />
        {badgeText ? (
          <span
            className={`absolute right-3 bottom-3 text-white font-semibold rounded-full px-3 py-1 text-xs tracking-wide shadow-md ${badgeClasses}`}
          >
            {badgeText}
          </span>
        ) : null}
      </div>

      <div className="p-3.5">
        <h3 className="m-0 mb-1.5 text-base font-semibold leading-tight">{title}</h3>

        {synopsis ? (
          <p className="m-0 mb-2.5 text-sm text-neutral-600 leading-snug line-clamp-2">
            {synopsis}
          </p>
        ) : null}

        <ul className="m-0 p-0 flex flex-wrap gap-2 text-[13px] text-neutral-600 list-none">
          {year ? <li>{year}</li> : null}
          {genres?.length ? <li>{genres.join(" · ")}</li> : null}
          {durationMin ? <li>{durationMin} min</li> : null}
          {country ? <li>{country}</li> : null}
          {language ? <li>{language}</li> : null}
        </ul>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  synopsis: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  genres: PropTypes.arrayOf(PropTypes.string),
  durationMin: PropTypes.number,
  country: PropTypes.string,
  language: PropTypes.string,
  status: PropTypes.oneOf(["now_playing", "pre_sale", "coming_soon"]),
  badge: PropTypes.string,
};
