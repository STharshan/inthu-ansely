import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ReactComparisonGuide from "./components/React";
import Digitaltransformation from "./pages/Digitaltransformation";
import Businessconsultancy from "./pages/Businessconsultancy";
import DigitalMarketing from "./pages/DigitalMarketing";
import CustomWebsite from "./pages/CustomWebsite";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Insidecustomsoftwareservice from "./pages/Insidecustomsoftwareservice";
import DigitalPartnership from "./pages/DigitalPartnership";
import PPCLearningModule from "./pages/PPCLearningModule";
import AILearningModule from "./pages/AILearningModule";
import SEOLearningPlatform from "./components/SEO/SeoHome";
import Navbar from "./components/Navbar";
import CustomeSoftware from "./pages/CustomeSoftware";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/ProvacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ContactForm from "./pages/Contact";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import LearningDashboard from "./pages/LearningDashboard"

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetail />} />
        <Route path="/React" element={<ReactComparisonGuide />} />
        <Route path="/digital-transformation" element={<Digitaltransformation />} />
        <Route path="/business-consultancy" element={<Businessconsultancy />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/customwebsite" element={<CustomWebsite />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/insidecustomsoftwareservice" element={<Insidecustomsoftwareservice />} />
        <Route path="/digital-partnership" element={<DigitalPartnership />} />
        <Route path="/PPCLearningModule" element={<PPCLearningModule />} />
        <Route path="/AILearningModule" element={<AILearningModule />} />
        <Route path="/SEOLearningPlatform" element={<SEOLearningPlatform />} />
        <Route path="/CustomeSoftware" element={<CustomeSoftware />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetail />} />
         <Route path="/Learning" element={<LearningDashboard />} />

      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
