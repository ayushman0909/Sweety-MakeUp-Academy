import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MobileBottomBar from "./components/layout/MobileBottomBar";

import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Credentials from "./components/sections/Credentials/Credentials";
import Course from "./components/sections/Course/Course";
import Experience from "./components/sections/Experience/Experience";
import VideoShowcase from "./components/sections/VideoShowcase/VideoShowcase";
import Gallery from "./components/sections/Gallery/Gallery";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import FAQ from "./components/sections/FAQ/FAQ";
import Booking from "./components/sections/Booking/Booking";
import PageLoader from "./components/common/PageLoader";
import FloatingActions from "./components/common/FloatingActions";

function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F6]">
      
      <PageLoader />
      <Navbar />

      <main>
        <Hero />

        <About />

        <Credentials />

        <Course />
        <Experience />
        <VideoShowcase />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>

      <Footer />

      <MobileBottomBar />
      <FloatingActions />

    </div>
  );
}

export default App;