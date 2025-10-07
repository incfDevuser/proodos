import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const DatosTransferenia = () => {
  const [copied, setCopied] = useState(false);

  const bankData = {
    titular: "IGNACIO ALEXIS ACEVEDO MORA",
    rut: "21.148.323-7",
    banco: "Banco prepago tenpo",
    tipoCuenta: "CUENTA VISTA",
    numeroCuenta: "111121148323",
    email: "ignacio.acevedom@usm.cl",
  };

  const copy = async () => {
    const textToCopy = `TITULAR: ${bankData.titular}
RUT: ${bankData.rut}
BANCO: ${bankData.banco}
TIPO: ${bankData.tipoCuenta}
CUENTA: ${bankData.numeroCuenta}
EMAIL: ${bankData.email}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="transferencia" className="py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Datos para transferencia
          </h2>
          <p className="text-gray-600">
            Copia los datos y úsalos en tu app bancaria
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
          <div className="space-y-6">
            {Object.entries(bankData).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
              >
                <span className="text-gray-600 font-medium uppercase text-sm tracking-wide">
                  {key === "titular"
                    ? "TITULAR"
                    : key === "rut"
                    ? "RUT"
                    : key === "banco"
                    ? "BANCO"
                    : key === "tipoCuenta"
                    ? "TIPO"
                    : key === "numeroCuenta"
                    ? "NÚMERO"
                    : key === "email"
                    ? "EMAIL"
                    : key}
                </span>
                <span className="text-gray-900 font-bold text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={copy}
            className={`w-full mt-8 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              copied
                ? "bg-green-600 text-white"
                : "bg-red-600 hover:bg-red-500 text-white transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            }`}
          >
            {copied ? (
              <>
                <FiCheck size={20} />
                ¡Copiado!
              </>
            ) : (
              <>
                <FiCopy size={20} />
                Copiar datos
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DatosTransferenia;
