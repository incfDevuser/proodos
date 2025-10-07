import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Beneficios from "./components/Beneficios";
import ProductosDestacados from "./components/ProductosDestacados";
import ComoTomarCreatina from "./components/ComoTomarCreatina";
import Testimonios from "./components/Testimonios";
import DatosTransferenia from "./components/DatosTransferenia";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Beneficios />
      <ProductosDestacados />
      <ComoTomarCreatina />
      <Testimonios />
      <DatosTransferenia />
      <Footer />
    </div>
  );
}

export default App;
