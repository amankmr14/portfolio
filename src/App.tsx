import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import data from "./data.json";
import ContactForm from "./pages/Contact";
import Footer from "./components/Footer";

export type TExp = typeof data.Experience;

function App() {

  return (
    <>
      <Navbar />
      <About data={data?.About}/>
      <Skills data={data?.Skills}/>
      <Experience data={data?.Experience}/>
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
