import React, { useState } from 'react'

const faqs = [
  { q: '¿La creatina retiene líquido?', a: 'La retención es mínima y suele ser intracelular; no es hinchazón significativa.' },
  { q: '¿Puedo tomarla sin “fase de carga”?', a: 'Sí. La fase de carga es opcional; la creatina igualmente se saturará con el tiempo.' },
  { q: '¿Es apta para mujeres?', a: 'Sí, es apta para todas las personas adultas sanas.' },
  { q: '¿Cuánto rinde un frasco de 300 g?', a: 'Un frasco de 300 g rinde aproximadamente 60–100 dosis (dependiendo de la dosis diaria).' },
  { q: '¿Cuánto demora el envío?', a: 'Envíos estándar 24–48h para zonas urbanas.' },
  { q: '¿Formas de pago disponibles?', a: 'Tarjetas, transferencias y pago en efectivo en puntos adheridos.' },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white mb-6">Preguntas frecuentes</h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white/5 p-4 rounded">
            <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(open === i ? null : i)}>
              <div className="font-semibold text-white">{f.q}</div>
              <div className="text-gray-300">{open === i ? '−' : '+'}</div>
            </button>
            {open === i && <div className="mt-2 text-gray-300">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
