import React from "react";
import proodosLogo from "../assets/imgs/prodos_logo.png";
import { FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-gray-300 mt-16">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={proodosLogo}
                alt="Proodos Logo"
                className="h-20 w-auto filter brightness-0 invert"
              />
              <div className="text-white font-bold text-2xl">Proodos</div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Tu tienda de confianza para suplementos deportivos de calidad
              premium. Potencia tu rendimiento con los mejores productos.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/proodoscl?igsh=MTRhM2o5NTFxaG9kMg=="
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FiInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:cony.paola.ob@gmail.com"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FiMail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#productos"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  Productos
                </a>
              </li>

              <li>
                <a
                  href="#testimonios"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#envios"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  Transferencias
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-red-500" />
                <a
                  href="mailto:cony.paola.ob@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  cony.paola.ob@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">Chile</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Proodos. Todos los derechos
              reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Política de Devoluciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
