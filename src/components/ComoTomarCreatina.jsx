import React from "react";
import { FiDroplet, FiClock, FiTrendingUp, FiHeart } from "react-icons/fi";

const steps = [
  {
    num: 1,
    title: "Dosis",
    text: "3–5 g al día para resultados óptimos",
    detail: "Una cucharadita rasa es suficiente",
    icon: <FiDroplet size={24} />,
  },
  {
    num: 2,
    title: "Momento",
    text: "Cuando te acomode (consistencia > horario)",
    detail: "Pre o post entreno, ambos funcionan",
    icon: <FiClock size={24} />,
  },
  {
    num: 3,
    title: "Carga",
    text: "Opcional. Lo importante es la constancia",
    detail: "Sin carga también obtienes beneficios",
    icon: <FiTrendingUp size={24} />,
  },
  {
    num: 4,
    title: "Hidratación",
    text: "Toma suficiente agua durante el día",
    detail: "2-3 litros diarios recomendados",
    icon: <FiHeart size={24} />,
  },
];

const ComoTomarCreatina = () => {
  return (
    <section id="como-tomar" className=" py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Cómo tomar la creatina
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guía simple y práctica para obtener los mejores resultados
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className="group relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 text-center relative z-10">
                  {" "}
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-white border-2 border-red-500 text-red-600 flex items-center justify-center font-bold text-xl mb-6 shadow-lg group-hover:scale-110 group-hover:bg-red-50 transition-all duration-300">
                    {step.num}
                  </div>
                  <div className="mb-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.text}
                    </p>
                    <p className="text-gray-400 text-xs italic">
                      {step.detail}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-20">
                    <div className="w-8 h-8 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400 transform rotate-90"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoTomarCreatina;
