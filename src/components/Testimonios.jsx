import React, { useState } from "react";
import { FiStar, FiUser, FiInstagram, FiHeart } from "react-icons/fi";

const testimonials = [
  {
    text: "Noté fuerza en 2 semanas. Los resultados fueron increíbles y mi rendimiento en el gym mejoró notablemente.",
    name: "Diego Martínez",
    role: "Powerlifter",
    rating: 5,
    avatar: "DM",
    verified: true,
  },
  {
    text: "Cero grumos, se disuelve perfecto. La calidad es excelente y no tiene sabor extraño como otras marcas.",
    name: "Carla Rodríguez",
    role: "Atleta CrossFit",
    rating: 5,
    avatar: "CR",
    verified: true,
  },
  {
    text: "Envío al día siguiente. Servicio impecable y producto de primera calidad. Definitivamente volvería a comprar.",
    name: "Tomás Vega",
    role: "Entrenador Personal",
    rating: 5,
    avatar: "TV",
    verified: true,
  },
];

const Testimonios = () => {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FiStar
        key={i}
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section
      className="bg-white py-20"
      id="testimonios"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de nuestra comunidad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 border-2 border-red-500 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <a
            href="https://www.instagram.com/proodoscl?igsh=MTRhM2o5NTFxaG9kMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mb-6 hover:scale-105 transition-transform duration-300"
          >
            <FiInstagram className="text-red-500" size={24} />
            <h3 className="text-3xl font-bold text-gray-900 hover:text-red-600 transition-colors">
              #TeamProodos
            </h3>
          </a>
          <p className="text-gray-600 mb-8">
            Únete a nuestra comunidad y comparte tu progreso
          </p>
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/proodoscl?igsh=MTRhM2o5NTFxaG9kMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
          >
            <FiInstagram size={20} className="text-white" />
            <span className="text-white font-semibold">
              Síguenos para más historias de éxito
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
