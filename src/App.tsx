import Header from './components/Header';
import Hero from './components/Hero';
import Method from './components/Method';
import Quote from './components/Quote';
import Program from './components/Program';
import About from './components/About';
import Contact from './components/Contact';
import {ContactForm} from "./components/ContactForm.tsx";



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32">
        <Hero />
        <Method />
        <Quote />
        <Program />
        <Contact />
        <About />
          <ContactForm />
      </div>
    </div>
  );
}

export default App;