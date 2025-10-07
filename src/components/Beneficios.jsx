import React from "react";
import { FiZap, FiShield, FiDroplet, FiTag } from "react-icons/fi";

const items = [
  {
    title: "Fuerza & potencia",
    text: "+ rendimiento en series y sets de alta intensidad.",
    icon: <FiZap size={28} />,
  },
  {
    title: "Recuperación",
    text: "Menos fatiga entre sesiones.",
    icon: <FiDroplet size={28} />,
  },
  {
    title: "Pureza certificada",
    text: "Monohidratada, 3rd-party tested.",
    icon: <FiShield size={28} />,
  },
  {
    title: "Precio honesto",
    text: "Calidad premium sin pagar marca inflada.",
    icon: <FiTag size={28} />,
  },
];

const Beneficios = () => {
  return (
    <section id="beneficios" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beneficios clave
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Por qué elegir creatina Proodos para tu entrenamiento
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, index) => (
            <div
              key={it.title}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 border-2 border-red-500 rounded-2xl flex items-center justify-center text-red-600 mx-auto">
                  {it.icon}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{it.title}</h3>
                <p className="text-gray-600 leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 font-medium">
            Respaldado por ciencia y experiencia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
