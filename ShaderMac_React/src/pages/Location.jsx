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
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
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
    <div className="container py-5">
      {/* Encabezado */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-danger mb-3">Nuestras Ubicaciones</h1>
        <p className="text-secondary">
          Encuentra el cine ShaderMac más cercano y consulta horarios, dirección y contacto.
        </p>
      </header>

      {/* Grid de tarjetas */}
      <div className="row g-4">
        {locations.map((loc) => (
          <div key={loc.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              {/* Imagen con overlay */}
              <div className="position-relative">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    color: "white",
                  }}
                >
                  <h5 className="card-title mb-0">{loc.name}</h5>
                  <small>{loc.city}</small>
                </div>
              </div>

              {/* Info */}
              <div className="card-body d-flex flex-column justify-content-between">
                <ul className="list-unstyled mb-3 text-secondary">
                  <li>
                    <strong>📍 Dirección:</strong> {loc.address}
                  </li>
                  <li>
                    <strong>📞 Teléfono:</strong> {loc.phone}
                  </li>
                  <li>
                    <strong>🕒 Horario:</strong> {loc.hours}
                  </li>
                  <li>
                    <strong>🎬 Salas:</strong>{" "}
                    <span className="badge bg-danger">{loc.screens} salas</span>
                  </li>
                </ul>

                {/* Botones */}
                <div className="d-flex gap-2">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger flex-fill"
                  >
                    Cómo llegar
                  </a>
                  <button type="button" className="btn btn-outline-danger flex-fill">
                    Ver cartelera
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}