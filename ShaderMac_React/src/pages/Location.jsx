export default function Locations() {
  const locations = [
    {
      id: "mx_gdl_centroloma",
      name: "ShaderMac Centro Loma",
      city: "Guadalajara",
      address: "Av. Patria 123, Centro Loma",
      phone: "(33) 5555 1234",
      hours: "10:00 AM - 11:00 PM",
      screens: 8,
      mapUrl: "https://maps.google.com/?q=20.6736,-103.344",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "mx_cdmx_sur",
      name: "ShaderMac Sur",
      city: "Ciudad de México",
      address: "Insurgentes Sur 4567, Del Valle",
      phone: "(55) 5555 4567",
      hours: "10:00 AM - 11:30 PM",
      screens: 12,
      mapUrl: "https://maps.google.com/?q=19.4326,-99.1332",
      image:
        "https://images.unsplash.com/photo-1588776814546-885af6bfb0d5?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "mx_mty_valle",
      name: "ShaderMac Valle",
      city: "Monterrey",
      address: "Calz. San Pedro 890, Valle",
      phone: "(81) 5555 7890",
      hours: "10:00 AM - 10:30 PM",
      screens: 10,
      mapUrl: "https://maps.google.com/?q=25.6866,-100.3161",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-red-700 mb-2">
          Nuestras Ubicaciones
        </h1>
        <p className="text-neutral-600 text-lg">
          Encuentra el cine ShaderMac más cercano y consulta horarios,
          dirección y contacto.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <article
            key={loc.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Imagen */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-1">
                  {loc.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">{loc.city}</p>

                <ul className="text-sm text-neutral-700 space-y-2">
                  <li>
                    <span className="font-medium">📍 Dirección:</span>{" "}
                    {loc.address}
                  </li>
                  <li>
                    <span className="font-medium">📞 Teléfono:</span>{" "}
                    {loc.phone}
                  </li>
                  <li>
                    <span className="font-medium">🕒 Horario:</span> {loc.hours}
                  </li>
                  <li>
                    <span className="font-medium">🎬 Salas:</span>{" "}
                    <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {loc.screens} salas
                    </span>
                  </li>
                </ul>
              </div>

              {/* Botones */}
              <div className="mt-5 flex gap-3">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-red-600 text-white rounded-lg py-2 text-sm font-semibold text-center hover:bg-red-700 transition"
                >
                  Cómo llegar
                </a>
                <button
                  type="button"
                  className="flex-1 border border-red-600 text-red-600 rounded-lg py-2 text-sm font-semibold hover:bg-red-50 transition"
                >
                  Ver cartelera
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
