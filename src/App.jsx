import { BrowserRouter } from "react-router-dom";

// Import the new Certificates component
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Certificates, Education, Skills, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Education /> {/* ✅ Adding Education section */}
        <Skills /> {/* ✅ Adding Skills section */}
        <Experience />
        <Tech />
        <Works />

        {/* ✅ Replacing Feedbacks with Certificates */}
        <Certificates />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
