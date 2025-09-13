import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
    return (
    <footer className="bg-[#fff6f4] text-[#543a44] font-sans py-10 border-t border-[#f3dad5] mt-auto">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 px-4">
            <div className="flex flex-col min-w-[220px] flex-1">
                <div className="flex items-center mb-3 text-xl font-bold">
                    <i className="fas fa-film text-danger me-2" style={{ fontSize: '1.5rem' }}></i>
                    <span>
                        ShaderMac
                    </span>
                </div>
                    <p className="text-[#5b3b41] mb-4">
                        Tu experiencia cinematográfica premium.
                        <br />
                        Disfruta de las mejores películas en nuestros cines de última
                        generación.
                    </p>
                <div className="flex space-x-4 text-[#ad2e36] text-lg">
                    <a href="#" aria-label="Facebook" className="text-[#e94f5a]">
                        <FaFacebook />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-[#e94f5a]">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-[#e94f5a]">
                        <FaTwitter />
                    </a>
                </div>
            </div>

            <div className="min-w-[220px] flex-1">
                <h3 className="font-bold mb-2 text-[#ad2e36]">Enlaces Rápidos</h3>
                    <ul className="space-y-1 list-none text-left">
                        <li>
                            <a href="/" className="text-[#543a44] hover:text-[#ad2e36] no-underline hover:underline">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/en-estreno" className="text-[#543a44] hover:text-[#ad2e36] no-underline hover:underline">
                                En Estreno
                            </a>
                        </li>
                        <li>
                            <a href="/preventa" className="text-[#543a44] hover:text-[#ad2e36] no-underline hover:underline">
                                Preventa
                            </a>
                        </li>
                        <li>
                            <a href="/proximamente" className="text-[#543a44] hover:text-[#ad2e36] no-underline hover:underline">
                                Próximamente
                            </a>
                        </li>
                        <li>
                            <a href="/cines" className="text-[#543a44] hover:text-[#ad2e36] no-underline hover:underline">
                                Nuestros Cines
                            </a>
                        </li>
                    </ul>
            </div>

            <div className="min-w-[220px] flex-1">
                <h3 className="font-bold mb-2 text-[#ad2e36]">Contacto</h3>
                <div className="flex items-center my-1">
                    <FaPhoneAlt className="mr-2" /> +1 (555) 123-4567
                </div>
                <div className="flex items-center my-1">
                    <FaEnvelope className="mr-2" /> info@shadermac.com
                </div>
                <div className="flex items-start my-1">
                    <FaMapMarkerAlt className="mr-2 mt-1" />
                    <div>
                        Av. Principal 123
                    <br />
                        Centro Histórico
                    </div>
                </div>
            </div>

            <div className="min-w-[220px] flex-1">
                <h3 className="font-bold mb-2 text-[#ad2e36]">Horarios</h3>
                <div className="flex justify-between my-1">
                    <span>Lunes - Jueves:</span>
                    <span className="text-[#543a44]">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between my-1">
                    <span>Viernes - Sábado:</span>
                    <span className="text-[#543a44]">10:00 AM - 12:00 AM</span>
                </div>
                <div className="flex justify-between my-1">
                    <span>Domingo:</span>
                    <span className="text-[#543a44]">11:00 AM - 10:00 PM</span>
                </div>
            </div>
        </div>

        <div className="text-center text-[#543a44] text-sm border-t border-[#f3dad5] mt-8 pt-4">
            © 2024 ShaderMac Cinema. Todos los derechos reservados.
        </div>
    </footer>
    );
}

export default Footer;
