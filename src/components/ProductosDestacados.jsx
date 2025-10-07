import React from "react";
import { FiCheck } from "react-icons/fi";
import munequeras from "../assets/imgs/productos/munequeras.png";
import tobilleras from "../assets/imgs/productos/tobilleras.png";
import straps from "../assets/imgs/productos/straps.png";
import creatina from "../assets/imgs/productos/creatina.png";
const ProductosDestacados = () => {
  return (
    <section id="productos" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro Producto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creatina de máxima calidad para potenciar tu rendimiento
          </p>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-2xl p-4  mx-auto mb-6 flex items-center justify-center shadow-xl border border-gray-200 overflow-hidden">
              <img
                src={creatina}
                alt="Creatina Proodos"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Creatina Proodos
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              100% monohidratada, sin aditivos artificiales. La pureza que
              necesitas para maximizar tus resultados.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <FiCheck className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Pureza Garantizada
              </h4>
              <p className="text-gray-600 text-sm">Sin aditivos ni rellenos</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <FiCheck className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Absorción Óptima
              </h4>
              <p className="text-gray-600 text-sm">
                Micronizada para mejor disolución
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <FiCheck className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Dosis Precisa
              </h4>
              <p className="text-gray-600 text-sm">
                3-5g diarios, fácil de medir
              </p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="#envios"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Comprar Ahora
            </a>
          </div>
        </div>
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Accesorios Complementarios
            </h3>
            <p className="text-gray-600">
              Maximiza tu entrenamiento con estos accesorios esenciales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
                <img
                  src={tobilleras}
                  alt="Tobilleras"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Tobilleras de Alta Resistencia
              </h4>
              <p className="text-gray-600 mb-4">
                Mejora tu agarre en remos y jalones pesados. Mayor control y
                seguridad en cada repetición.
              </p>
              <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                Más Control
              </span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
                <img
                  src={munequeras}
                  alt="Muñequeras"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Muñequeras Deportivas
              </h4>
              <p className="text-gray-600 mb-4">
                Soporte y estabilidad para tus muñecas durante levantamientos
                pesados. Ajuste perfecto y comodidad.
              </p>
              <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                Protección
              </span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
                <img
                  src={straps}
                  alt="Straps"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Straps de Levantamiento
              </h4>
              <p className="text-gray-600 mb-4">
                Fortalece tu agarre en peso muerto y remo. Material resistente y
                duradero para entrenamientos intensos.
              </p>
              <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                Agarre Superior
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosDestacados;
