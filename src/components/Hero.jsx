import React from "react";
import proodosLogo from "../assets/imgs/prodos_logo.png";
const Hero = () => {
  return (
    <header className=" text-black relative overflow-hidden mt-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-800 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center gap-10 relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] max-w-5xl bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
            Proodos
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl">
            Sube de nivel tu rendimiento
          </p>
        </div>
        <div className="max-w-2xl space-y-8">
          <p className="text-xl leading-relaxed text-gray-600 font-medium">
            Creatina monohidratada pura + accesorios pensados para entrenar
            mejor. Calidad, dosis claras y envío rápido.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#productos"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-red-600 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-red-500 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Comprar creatina ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#accesorios"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-600 border-2 border-red-500 rounded-2xl hover:bg-red-50 hover:border-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver accesorios
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Envíos 24–48h
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Pago seguro
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              30 días de garantía
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
